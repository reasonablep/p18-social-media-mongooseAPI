const { User, Thought } = require('../models'); 

module.exports = {

    //Get all users

    async getUsers (req,res) {
        try {
            const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

},

// Get an individual user

async getOneUser (req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId }).select('-__v').lean(); 

        if (!user) {
            return res.status(404).json({ message: 'No user found with that ID'});
        } 
        res.json ({
            user
        })
    } catch (error) {
        console.log(error);
         return res.status(500).json(error);
        
    }
},

// Create a new user

async createUser (req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user); 

    } catch(error) {
        res.status(500).json(error);
    }
},

// Delete a user

async deleteUser (req, res) {
    try {
        const user = await User.findOneAndDelete ({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user found'})
        }

        const thought = await Thought.findOneAndUpdate (
            { users: req.params.userId },
            { $pull: {users: req.params.userId }},
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'User deleted but no Thought found'})
        }
        res.json({ message: 'User deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
},

// Add a reaction to a thought

async addReaction (req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);

    try {
        const user = await User.findOneAndUpdate (
            { _id: req.params.userId},
            { $addToSet: {reactions: req.body }},
            { runValidators: true, new: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: 'No user found with that ID'});

        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
},

// Delete a reaction

async removeReaction (req,res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {reaction: {reactionId: req.params.reactionId }}},
            { runValidators: true, new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'No user found with that ID'});
        }

        res.json(user)
    } catch (error) {
        res.status(500).json(error);
    }
},

async addFriend (req,res) {
    try {   

        const friend = await User.findOneAndUpdate (
            {_id: req.params.userId},
            { $addToSet: {friends: req.body.ObjectId } },
            { runValidators: true, new: true }
        );

        if (!friend) {
            return res.status(404).json({ message: 'No friend found'});
        }

        res.json(friend);

    } catch (error) {
        res.status(500).json(({ message: 'Database error', error}));
    }
},

async deleteFriend (req,res) {
    try {
        const friend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {friends: { friends: req.body.friendId }}},
            {runValidators: true, new: true}
            );

        if (!friend) {
            return res.status(404)({ message: 'No friend found' });
        }

        res.json({ message: 'Friend deleted' });
    } catch (error) {
    res.status(500).json({ message: 'Database error while deleting friend', error})
    }
}


};
