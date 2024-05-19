import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);