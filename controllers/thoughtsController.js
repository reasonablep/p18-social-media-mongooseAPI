const { User, Thought } = require('../models');

module.exports = {
    async getThoughts (req,res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts)
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleThought (req,res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId}).select('-__v');

            if (!thought) {
                return res.status(404).json({message: 'No Thought found by ID'});
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async createThought (req,res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    async deleteThought (req,res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});

            if (!thought) {
                return res.status(404).json ({ message: 'No Thought found with that ID'});
            }
            await User.deleteMany({ _id: {$in: thought.users}})
            res.json({ message: 'Thought deleted' });
        } catch (error) {
            res.json(500).json(error);
        }
    },
    
    async updateThought (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID'});
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);    
        }
    }

}