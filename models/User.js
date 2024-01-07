const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const userSchema = new Schema ({
    username: {
        type: Schema.Types.ObjectId
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegex
    },
    thought: {

    },
    friends:{

    }
})



module.exports = userSchema;