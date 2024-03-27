const router = require('express').Router();
const getQuestion = require('./../data/questions.js')

router.get('/:no', async (req, res) => {
    const quesno = req.params.no;
    try {
        res.status(200).json(getQuestion(quesno-1));
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;