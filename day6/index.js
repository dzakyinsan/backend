const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors') //npm ini gunanaya untuk mengbungkan backend dan frontend
// connection
// const {uploader}=require('./helper/uploader')
// const {mysqldb}=require('./connection')
// const fs=require('fs')

const PORT=2020

app.use(cors())

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json())
app.use(express.static('public'))

const {userRouters,AuthRouters}=require('./routers')

app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Selamat datang di api ini</h1>')
})


app.use('/auth',AuthRouters)
app.use('/user',userRouters)



app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))


