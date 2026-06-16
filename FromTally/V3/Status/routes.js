import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tallyResponse = await fetch('http://localhost:9000/');

        if (tallyResponse.ok) {
            return res.status(200).send('up');
        };

        return res.status(503).send('down');
    } catch (error) {
        return res.status(500).send('connection failed');
    }
});

export { router };