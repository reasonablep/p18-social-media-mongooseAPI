const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => 
                new Types.ObjectId(),
            
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: [280, "The value is greater than the maximum allowed length"]

        },

        username: {
            type: String,
            required: true

        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },

    }
)

module.exports = reactionSchema;