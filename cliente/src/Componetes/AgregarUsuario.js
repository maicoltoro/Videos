import React, { useState } from "react";
import axios from  'axios'
import { Correcto, Fallo, validarDatos } from "../JavaScript/Swall_Alert";

export const AgregarUsuario = () =>{
    
    const [Video, SetVideo] = useState({})

    const agregarUsuarios = () =>{
        if (Video.name === undefined) return validarDatos("Archivo")
        const formData = new FormData();
            formData.append('nombre', Video.name);
            formData.append('video', Video);

        const api = axios.create({
                baseURL: 'http://192.168.132.129:5000/'
            })
            
        api.post('/api/usuario/agregarusuario',formData)
            .then(res =>{
                if(res.data==='Ok') return Correcto()
                else return Fallo()
            }).catch(err => {console.log(err)})
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo video</h2>                
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="Archivo" className="form-label" >Archivo</label>
                        <input type="file" className="form-control" accept=".mp4" onChange={(e) =>{SetVideo(e.target.files[0])}}/>   
                    </div>
                    <button onClick={agregarUsuarios} className="btn btn-success">Guardar Video</button>
                </div>
            </div>
        </div>
    )
}