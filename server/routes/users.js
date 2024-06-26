const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
    try {
	  	const updatedUser = await User.findByIdAndUpdate(req.params.id, {
	    	$set: {
				qualification: req.body.qualification,
				stream: req.body.stream,
				salary: req.body.salary,
			}
    	}, {new: true });
    	res.status(200).json(updatedUser);
    } catch(err) {
    	res.status(500).json(err);
    }
});

//DELETE
router.put('/:id', async (req, res) => {
  	if(req.body.userId === req.params.id){
	    try {
      		const user = User.findById(req.params.id);
        	try {
          		await Post.deleteMany({ username: user.username });
          		await User.findByIdAndDelete(req.params.id);
          		res.status(200).json('User has been deleted');
        	} catch(err) {
          		res.status(500).json(err);
        	}
    	} catch(err) {
	        res.status(404).json('user not found!');
	    }
  	} else {
    	res.status(401).json('cant delete other account!');
  	}
});

module.exports = router;