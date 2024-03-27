const questions = {
    "skills": [
        "How good are you with the fundamentals in Database Management?",
    	"How good are you in understanding the computer architecture?",
    	"How good you understand distributed computing systems?",
    	"How well do you know to fight against CyberSecurity?",
    	"Do you understand the networking in computing systems?",
    	"Are you interested in the field of Development and Production of software systems?",
    	"How would you rate yourself in Programming Skills?",
    	"Do you like to lead and manage teams and manage the projects?",
    	"How good are you with the fundamentals in Computer Forensics?",
    	"How well can you communicate in technical language and explaining it to non-technical people?",
    	"Are you interested in contributing towards the development of AI/ML(Artificial Intelligence/Machine Learning)?",
    	"Do you like to program and solve the problems in software engineering?",
    	"Do you like to manage and analyze the business graphs and take decisions?",
    	"How would you rate yourself in Communication Skills?",
    	"How well can you visualize data and extract information from it?",
    	"How well can you troubleshoot common and unexpected errors in computing systems?",
    	"Do you like to design graphics?",
    ],
    "interests": [
        "What level of interest do you have in Drawing?",
	    "What level of interest do you have in Dancing",
	    "What level of interest do you have in Singing",
	    "What level of interest do you have in Sports",
	    "What level of interest do you have in Video Game",
	    "What level of interest do you have in Acting",
	    "What level of interest do you have in Travelling",
	    "What level of interest do you have in Gardening",
	    "What level of interest do you have in Animals",
	    "What level of interest do you have in Photography",
	    "What level of interest do you have in Teaching",
	    "What level of interest do you have in Exercise",
	    "What level of interest do you have in Coding",
	    "What level of interest do you have in Electricity Components",
	    "What level of interest do you have in Mechanic Parts",
	    "What level of interest do you have in Computer Parts",
	    "What level of interest do you have in Researching",
	    "What level of interest do you have in Architecture",
	    "What level of interest do you have in Historic Collection",
	    "What level of interest do you have in Botany",
	    "What level of interest do you have in Zoology",
	    "What level of interest do you have in Physics",
	    "What level of interest do you have in Accounting",
	    "What level of interest do you have in Economics",
	    "What level of interest do you have in Sociology",
	    "What level of interest do you have in Geography",
	    "What level of interest do you have in Psycology",
	    "What level of interest do you have in History",
	    "What level of interest do you have in Science",
	    "What level of interest do you have in Bussiness Education",
	    "What level of interest do you have in Chemistry",
	    "What level of interest do you have in Mathematics",
	    "What level of interest do you have in Biology",
	    "What level of interest do you have in Makeup",
	    "What level of interest do you have in Designing",
	    "What level of interest do you have in Content writing",
	    "What level of interest do you have in Crafting",
	    "What level of interest do you have in Literature",
	    "What level of interest do you have in Reading",
	    "What level of interest do you have in Cartooning",
	    "What level of interest do you have in Debating",
	    "What level of interest do you have in Asrtology",
	    "What level of interest do you have in Hindi",
	    "What level of interest do you have in French",
	    "What level of interest do you have in English",
	    "What level of interest do you have in Urdu",
	    "What level of interest do you have in Other Language",
	    "What level of interest do you have in Solving Puzzles",
	    "What level of interest do you have in Gymnastics",
	    "What level of interest do you have in Yoga",
	    "What level of interest do you have in Engeeniering",
	    "What level of interest do you have in Doctor",
	    "What level of interest do you have in Pharmisist",
	    "What level of interest do you have in Cycling",
	    "What level of interest do you have in Knitting",
	    "What level of interest do you have in Director",
	    "What level of interest do you have in Journalism",
	    "What level of interest do you have in Bussiness",
	    "What level of interest do you have in Listening Music"
    ]
};

// const questions = {
// 	skills: [
// 		"Database Management",
// 		"Computer Architecture",
// 	],
// 	interests: [
// 		"Drawing",
// 		"Dancing",
// 		"Singing",
// 	]
// };

const getQuestion = (quesno) => {
	const skillsCount = questions.skills.length;
	const interestsCount = questions.interests.length;
	if(quesno < 0 || quesno+1 > skillsCount + interestsCount) {
		return {"ques": "Max", "type": "none"};
	}
	else if(quesno < skillsCount) {
		return {"ques": questions.skills[quesno], "type": "skill"};
	}
	else {
		return {"ques": questions.interests[quesno - skillsCount], "type": "interest"};
	}
};

module.exports = getQuestion;