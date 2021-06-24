require ('./db_connection')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 8000
const Todo = require('./models/todo');

// app.use((req,res,next)=>{
//     //logger
//     console.log(req.url)
//     // res.write('Hi')
//     // res.send('HI')
//     next()
// })
app.use(express.json())
app.use(morgan('dev'))
app.use('/assets', express.static('./resources'))
// app.use((req, res, next) => {
//     //logger
//     console.log(req.url)
//     // res.write('Hi')
//     // res.send('HI')

//     // next(new Error('No endpoints'))
// })
app.get('/', (req, res) => {
    // console.log(req.url)
    res.status(201)
    res.send('Hello World!')
})

app.get('/profile', (req, res, next) => {
    // console.log(req.url)

    res.send('profile')
    // res.write()
    // next()
})

app.get('/users', (req, res) => {
    // console.log(req.url)

    res.json([1, 2, 3])
})

app.post('/login', (req, res,next) => {
    // debugger;
    //check if user exists
    if (req.body.username === "Mohamed")
        res.status(200).json({ "status": 'logged in' })
    else
        next(new Error("user is not registerd"))
        // res.status(404).json({ "status": "user is not registerd" })

})


app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '/resources/main.css'))
})

//todo 
app.get('/todo/',(req,res)=>{
    Todo.find({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

app.post('/todo',(req,res,next)=>{
    let {body} = req;
    const todo = new Todo(body)
    todo.save()
    .then((result)=>{
        console.log(result)
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
    console.log(todo)
   debugger; 
})

app.use((err,req,res,next)=>{
    // console.log(err)
    res.status(404).json({'msg':err})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


//log req.url


// /**
//  * req
//  *  url:/profile
//  *  method:GET
//  *
//  *
//  * server
//  *  app.get(/)   x
//  * app.get(/profile) //handle request
//  * app.post(/login)
//  *
//  *
//  */