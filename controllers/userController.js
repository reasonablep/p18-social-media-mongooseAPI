const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models'); 

const userCount = async () => {

    try {
        const userCounter = [
            {

            $count:'totalUsers'
            }
    
]; 

const result = await User.aggregate(userCounter);

return result.length > 0 ? result[0].totalUsers : 0;

    } catch (error) {
        res.status(500).json(error);
        console.error('Error in count aggregation', error);
        throw error;
    }
};



module.exports = userCount;

module.exports = {

    async getUsers (req,res) {
        try {
            const users = await User.find();
        const userObject = {
            users,
            userCount: await userCount(),
        };    
        return res.json(userObject);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

},

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

async createUser (req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user); 

    } catch(error) {
        res.status(500).json(error);
    }
},

async deleteUser (req, res) {
    try {
        const user = await User.findOneAndRemove ({ _id: req.params.userId });

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
async addReaction (req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);

    try {
        const user = await User.findOneAndUpdate() (
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
};