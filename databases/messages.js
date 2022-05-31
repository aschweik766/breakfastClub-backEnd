const Message = require('../models/messageModel')
const messageData = require('../databases/messages.json')
    console.log(messageData);

Message.deleteMany({})
    .then(()=> {
        return Message.collection.insertMany(messageData)
    })
    .then((res) => console.log(res))
    .finally(() => {
        process.exit()
    });
