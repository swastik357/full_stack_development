const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuidv4(),
        username: 'robo1',
        comment: "I am robo1!"
    },
    {
        id: uuidv4(),
        username: 'human1',
        comment: 'I am human1!'
    },
    {
        id: uuidv4(),
        username: 'robo2',
        comment: "I am robo2!"
    },
    {
        id: uuidv4(),
        username: 'human2',
        comment: 'I am human2!'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    res.redirect('/comments');
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})