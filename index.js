const express = require('express')
const bodyParseer = require("body-parser")
const app = express()
const cors = require('cors')
const mysql = require("mysql")
const bcrypt= require("bcrypt")
const saltRounds=10
const cookieParser=require("cookie-parser")
const session=require("express-session")

const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: "password",
    database: "ami_sa_db"
})

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE"],
    credentials:true
    })
)

app.use(session({
    key:"userId",
    secret:"makam",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24
    } 
}))

app.use(cookieParser())
app.use(bodyParseer.urlencoded({ extended: true }))
app.use(express.json())



//Lectors
app.get("/api/", (req, res) => {
    const sqlSelect = "SELECT * FROM lectors"
    db.query(sqlSelect, (err, result) => {


        if (err){
            console.log(err)
        }
        for (i=0;i<result.length;i++){
            if(result[i].Photo!=null){
            result[i].Photo=result[i].Photo.toString("base64")
            }
        }
        res.send(result)
    })
})


//Groups
app.get("/groups", (req, res) => {
    const sqlSelect = "SELECT * FROM  `groups`"
    db.query(sqlSelect, (err, result) => {
        if (err){
            console.log(err)
        }
      
        res.send(result)
    })
})

//Users
app.get("/users", (req, res) => {
    const sqlSelect = "SELECT * FROM  `users`"
    db.query(sqlSelect, (err, result) => {
        if (err){
            console.log(err)
        }
        for (i=0;i<result.length;i++){
            if(result[i].photo!=null){
            result[i].photo=result[i].photo.toString("base64")
            }
        }
        console.log(result)
        res.send(result)
    })
})


//Admin
app.post("/api/insert",(req,res)=>{
    const FullName=req.body.FullName
    const Cafedra=req.body.Cafedra
    const sqlInsert="INSERT INTO lectors (FullName,Cafedra) VALUE (?,?) "
    db.query(sqlInsert,[FullName,Cafedra],(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })
})
app.delete("/api/delete",(req,res)=>{
    const FullName=req.body.FullName
    const sqlDelete="DELETE FROM lectors WHERE  FullName=?"
    db.query(sqlDelete,FullName,(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
} )
})

//Registration
app.post("/api/register",(req,res)=>{
    const userName=req.body.userName
    const password=req.body.password
    const group=req.body.group
    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err){
            console.log(err)
        }
      const sqlInsert="INSERT INTO users (userName,password,userRole,`group`) VALUE(?,?,?,?)"
      db.query(sqlInsert,[userName,hash,"visitor",group],(err,result)=>{
         if(err){
             console.log("Error in Registration is",err)
         }
         console.log(result)
       })
    })
})
app.get(`/lector/:id`,(req,res)=>{
    var id=req.params.id
     const sqlSelect= "SELECT * FROM lectors WHERE ID=?"  
     db.query(sqlSelect,id,(err,result)=>{
     if(err){
            console.log(err)
        }
        console.log(result)
        res.send(result)
     })  
})
//Login
app.post("/api/login",(req,res)=>{
    const userName=req.body.userName
    const password=req.body.password
    const sqlSelect="SELECT * FROM users WHERE userName=?" 
    db.query(sqlSelect,userName,(err,result)=>{
        if(err){
            console.log(err)
        }
        
            if (result.length>0){
                bcrypt.compare(password,result[0].password,(err,response)=>{
                    if(response){
                        if(result[0].photo!=null){
                        result[0].photo= result[0].photo.toString("base64")}
                        req.session.user=result
                        res.json({'result':result,'status':1})
                    }
                    else{
                         res.send({message:"Некоректний пароль або логін!"})
                    }       
                 })
            }
            else{
                res.send({message:"Некоректний пароль або логін!"})
        }
      
    })
})
app.get("/login",(req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true,user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})
//Other 
app.listen(3001, () => {
    console.log("Running on port 3001")
})
