const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))


const upload = multer(
    {
        storage : multer.memoryStorage()
    }
)

// app.get('/', (req,res) =>{
//     res.send('<h1>welcome</h1>')
    
// })

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
})


con.connect( (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('connected')
    }
})


app.get('/resp', (req,res) => {
    con.query("SELECT * FROM cards", (err,result) => {
        res.send(result)
    })
})

app.get('/cardid', (req,res) => {
    con.query("SELECT ID FROM cards", (err,result) => {
        res.send(result)
    })
})


app.post('/cardid', (req, res) =>{
    con.query("INSERT INTO subprojects (foreign_k) VALUES(ID)", (err, result) => {
        res.send("sent")
    })
})

app.get('/versionresp', (req,res) => {
    con.query("SELECT * FROM subprojects", (err,result) => {
        res.send(result)
    })

})

app.get('/read/:id', (req,res) => {
    const id = req.params.id
    con.query("SELECT * FROM cards WHERE ID = ? ",[id], (err,result) => {
        if(err){
        return res.json({message: "error inside server"})
        }
        else{
        return res.json(result)
        }
    })

})




// cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc

app.post('/register', (req,res) => {
    const email =req.body.email
    const username =req.body.username
    const password =req.body.password
    con.query('INSERT INTO users (email,username,password) VALUES(?,?,?)',[email,username,password],
    (err,result) => {
        if(result){
            res.send(result)
        }else{
            res.send({
                message: 'enter correct asked details'
            })
        }
    }
    )
})
// cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc

app.post('/login', (req,res) => {
   
    const username =req.body.username
    const password =req.body.password
    con.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password],
    (err,result) => {
        if(err){
            req.setEncoding({err:err})
        }else{
          if(result.length > 0){
            res.send(result)
          }else{
            res.send(
                {message:'wrong username or password'}
            )
          }
        }
    }
    )
})

app.post('/add', (req,res) => {

    
    const projectname  =req.body.projectname 
    const details =req.body.details
    
    con.query('INSERT INTO cards (projectname,details) VALUES(?,?)',[projectname,details],
    (err,result) => {
        if(result){
            res.send(result)
        }else{
            res.send({
                message: 'enter correct asked details'
            })
        }
    }
    )
})

app.post('/addVersion', (req,res) =>{
    const title = req.body.title
    const details = req.body.details
    const link = req.body.link
    const id = req.bo


    con.query('INSERT INTO subprojects (title,details,link) VALUES(?,?,?)', [title,details,link],
    (err,result) => {
        if (result){
            res.send(result)
        }else{
            res.send({
            message : 'enter correct asked details'
            })

        }
    }
    
    
    
    
    
    )
})







// cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc







app.listen(3001,() => {
    console.log('running backend server')
})