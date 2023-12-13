// Import necessary modules and services
import * as express from 'express';
import { conversationService } from 'path_to_conversationService_file';

// Create a router instance
const router = express.Router();
// Route to start a new conversation
router.post('/start', async (req, res) => {
    try {
        const conversation = await conversationService.startConversation(req.body);
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to fetch an existing conversation
router.get('/:id', async (req, res) => {
    try {
        const conversation = await conversationService.getConversation(req.params.id);
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update a conversation
router.put('/:id', async (req, res) => {
    try {
        const conversation = await conversationService.updateConversation(req.params.id, req.body);
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export the router
module.exports = router;