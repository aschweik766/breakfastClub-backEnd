const mongoose = require('../databases/connection')

const MessageSchema = new mongoose.Schema(
    {
        from: {
            type: String, required: true
        },
        to: {
            type: String, required: true
        },
        messages: {
            type: String, required: true
        },
    },
    {timestamps: true}
)
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;

