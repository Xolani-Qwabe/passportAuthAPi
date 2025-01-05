const express = require('express');
const cors = require('cors');
const users = require('./mockData').users;
const musicReviews = require('./mockData').musicReviews;

// Create an express app
const app = express();
const port = process.env.PORT || 3000;


const client_users = [];3

// set up middleware
app.use(cors());
app.use(express.json());

start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);  
    }
}

// default API route
app.get('/', (req, res) => {
    try {
        res.status(201).send({message :'Welcome to the API'});
    } catch (error) {
        console.log(error);
    }
});

// more routes
app.get('/api/users', (req , res) => {
        try {
            res.status(200).send(users); 
        } catch (error) {
            console.log(error);
        }     
});

app.post('/api/users', (req , res) => {
    try {
        console.log(req.body);
        if(!req.body.name || !req.body.email || !req.body.password || !req.body.location || !req.body.userType){
            console.log('Please provide all required fields: name, email, password, location, and userType.')
            return res.status(400).send({message: 'Please provide all required fields: name, email, password, location, and userType.'});
        }
        return res.status(201).send(200);    
    } catch (error) {
        console.log(error);
    } 
});

app.put('/api/users/:id', (req , res) => { 
    try {
        const {body, params:{id}} = req;
        let parsedId = parseInt(id);
    } catch (error) {
        console.log(error);
        
    }
}   );


app.get('/api/users/:id', (req , res) => {
    try {
        if(isNaN(req.params.id)){
            res.status(400).send({message: 'Invalid ID supplied'});
        } 
        if(users.filter(user => user.id == parseInt(req.params.id)).length === 0){
            res.status(404).send({message: 'User not found'});
        }
        res.status(200).send(users.filter(user => user.id == parseInt(req.params.id)));  
    } catch (error) {
        console.log(error);
        
    } 
});

app.get('/api/reviews', (req , res) => { 
    try {
        if (musicReviews.length === 0) {    
            res.status(404).send({message: 'No reviews found'});
        }
        if (req.query.value) {
            return res.status(200).send(musicReviews.filter(review => review.artist.includes(req.query.value)));
        }
        if(req.query.artist){
            return res.status(200).send(musicReviews.filter(review => review.artist === req.query.artist));
        }
        if(req.query.album){
            return res.status(200).send(musicReviews.filter(review => review.album === req.query.album));
        }
        if(req.query.rating){
            return res.status(200).send(musicReviews.filter(review => review.rating === parseFloat(req.query.rating)));
        }
        if(req.query.userId){
            return res.status(200).send(musicReviews.filter(review => review.userId === parseInt(req.query.userId)));
        }
        return res.status(200).send(musicReviews);
    } catch (error) {
        console.log(error);
    }
});

app.get('/api/users/:id/reviews/:review_id', (req , res) => {        
    try {
        if(isNaN(req.params.id) || isNaN(req.params.review_id)){
            res.status(400).send({message: 'Invalid ID supplied'});
        }
        if(users.filter(user => user.id == parseInt(req.params.id)).length === 0){
            res.status(404).send({message: 'User not found'});
        }
        res.status(200).send(musicReviews.filter(review => review.userId == parseInt(req.params.id) && review.id == parseInt(req.params.review_id)));
    } catch (error) {
        console.log(error);
    }   
});

start();