const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const archivobd = require('./conexion')
const rutaUsuario = require('./rutas/usuario')
const path = require('path');

const app = express()
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


const staticFilesPath = path.join(__dirname, './cliente/build');
app.use(express.static(staticFilesPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

app.use('/api/usuario',rutaUsuario)

app.get('/',(req,res) =>{
    res.end('servidor arriba')
})

app.listen(5000, function() {
    console.log("el servidor esta corriendo correctamente")
})
