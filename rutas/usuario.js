const express = require('express')
const router = express.Router()
const multer = require('multer');
const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const ObjectId = require('mongodb').ObjectId;
const os = require('os');
// const { exec } = require('child_process');

module.exports = router

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uri = 'mongodb://192.168.132.129:27017';
const client = new MongoClient(uri);

router.post('/agregarusuario', upload.single('video'), async (req, res) => {
    const { nombre } = req.body;
    const video = req.file;

    try {
        await client.connect();
        const database = client.db('tablaPrueba');
        const bucket = new mongodb.GridFSBucket(database);
        const stream = bucket.openUploadStream(`${nombre}`);
        stream.end(video.buffer);
    
        await new Promise((resolve, reject) => {
          stream.on('finish', resolve);
          stream.on('error', reject);
        });
    
        res.send('Ok');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    } 
});
  
router.post("/ObtenerUsuarios",async (req,res) =>{
    await client.connect();
    const collection = client.db("tablaPrueba").collection("fs.files");
    const cursor = collection.find({});
    const data = [];
    await cursor.forEach((document) => {
        data.push(document)
    });
    res.send(data)
})

router.post('/ObtenerDataUsuario', async (req, res) => {
  
    try {
      await client.connect();
      const valorEnvio = new ObjectId(req.body.ID);
      const collection = client.db('tablaPrueba').collection('fs.files');
      const file = await collection.findOne({ _id: valorEnvio });
  
      if (!file) {
        return res.status(404).send('No se encontró el archivo');
      }
  
      const database = client.db('tablaPrueba');
      const bucket = new mongodb.GridFSBucket(database);
      const downloadStream = bucket.openDownloadStream(file._id);
  
      downloadStream.pipe(res); 
  
      downloadStream.on('error', (error) => {
        console.log(error);
        res.status(500).send('Error al obtener el archivo');
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al conectar con la base de datos');
    } 
});

router.post("/Eliminarusuario",async (req,res) =>{
    const videoId = new ObjectId(req.body.ID)
    try {
      await client.connect();
      const database = client.db('tablaPrueba');
      const bucket = new mongodb.GridFSBucket(database);
      bucket.delete(videoId)
      res.send("OK")

    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
});

router.post("/tokent",async (req , res) =>{
  const username = os.userInfo().username;
  res.send(username)
});