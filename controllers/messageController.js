const Message = require('../models/models')

class MessageController {
    async sendMessage(req, res) {
        const {userId, text} = req.body
        const message = await Message.create({userId, text})
        res.json(message)
    }

    async getChatHistory(req, res) {
        const messages = await Message.findAll()
        res.json(messages)
    }
}

module.exports = new MessageController()
