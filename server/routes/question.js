const router = require('express').Router();
const getQuestions = require('./../data/questions.js')

router.get('/:no', async (req, res) => {
    const maxQues = getQuestions.length
    const quesno = req.params.no;
    if(quesno < 1 || quesno > maxQues+1) {
        res.status(401).json('Question Limit Reached');
    }
    else {
        try {
            res.status(200).json(getQuestions[quesno - 1]);
        } catch(err) {
            res.status(500).json(err);
        }
    }
});

module.exports = router;