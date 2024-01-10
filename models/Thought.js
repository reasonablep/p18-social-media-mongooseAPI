const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema ({

    thoughtText: {
        Type: String,
        required: true,
        minLength: [1, "The value is shorter than the minimum allowed length"],
        maxLength: [280, "The value is greater than the maximum allowed length"]
    },
    createdAt: {
        Type: Date,
        default: Date.now,
        get: (timestamp) => {
return moment(timestamp).format['YYYY:MM:DD'];
        },

    username: {
        Type: String,
        required: true,


    },
    reactions: [reactionSchema]
    },
},

    {
        toJSON: {
            getters: true,
        },
    },
)

module.exports = thoughtSchema;