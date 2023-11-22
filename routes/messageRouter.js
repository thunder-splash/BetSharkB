const MessageRouter = require('express')
const router = new MessageRouter()
const messageController = require('../controllers/messageController')
const authMiddleware = require('../middlewares/authMiddleware')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/send', authMiddleware, messageController.sendMessage)
router.get('/history', authMiddleware, messageController.getChatHistory)

module.exports = router
