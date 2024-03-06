const router = require('express').Router();
const request = require('request')
const modelUri = "http://127.0.0.1:5000/"

// Get predicted result
router.post("/", async (req, res) => {
    const newData = req.body;
    try {
        request({
            uri: modelUri,
            body: JSON.stringify(newData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }, function(error, response) {
            if(error) {
                res.status(501).json(error);
                return;
            }
            const predictedResult = JSON.parse(response.body);
            res.status(200).json(predictedResult.careers);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;