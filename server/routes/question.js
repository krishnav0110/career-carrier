const router = require('express').Router();

const questions = [
"When faced with a problem, do you prefer to rely on logical analysis or your intuition to find a solution",
"Are you more comfortable making decisions based on objective criteria or considering the impact on people and relationships",
"Do you enjoy socializing and interacting with a large group of people, or do you prefer smaller, more intimate gatherings",
"Are you more inclined to stick to a schedule and follow a plan, or do you prefer to be flexible and adapt to changes as they arise",
"When working on a team project, do you prefer to take charge and organize tasks, or do you prefer to contribute your expertise without taking on a leadership role",
"Are you more energized by spending time alone, focusing on your thoughts and ideas, or by engaging in social activities with others",
"Do you tend to approach new situations with a sense of curiosity and openness, or do you prefer to rely on familiar routines and structures",
"Are you more comfortable expressing your thoughts and feelings openly, or do you prefer to keep your emotions private and process them internally",
"When faced with conflict, do you prefer to address it directly and seek resolution, or do you tend to avoid confrontation and find alternative solutions",
"Do you enjoy exploring abstract concepts and theories, or do you prefer to focus on practical, real-world applications",
"Are you more comfortable working in a dynamic, fast-paced environment with frequent changes, or do you prefer a stable, predictable work environment",
"Are you more detail-oriented, preferring to focus on the specifics of a task, or do you tend to see the bigger picture and consider the overall strategy",
"Do you prefer to work independently, with autonomy and freedom to make decisions, or do you enjoy collaborating with others and being part of a team",
"Are you more inclined to follow established rules and guidelines, or do you prefer to think outside the box and challenge conventional wisdom",
"Do you enjoy taking risks and embracing new opportunities, or do you prefer to play it safe and stick to what you know",
];

router.get('/:no', async (req, res) => {
    const quesno = req.params.no;
    if(quesno < 1 || quesno > 15) {
        res.status(401).json('Question Limit Reached');
    }
    else {
        try {
            res.status(200).json(questions[quesno - 1]);
        } catch(err) {
            res.status(500).json(err);
        }
    }
});

module.exports = router;