import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom'
import { Eliminar, Fallo } from "../JavaScript/Swall_Alert";

export const UsuarioInvidual = ({usuario}) =>{

    const eliminar = (value) =>{
        const api = axios.create({
            baseURL: 'http://192.168.132.129:5000/'
        })
        const Obj = {
            ID: value
        }
        api.post('/api/usuario/Eliminarusuario',Obj)
            .then(res =>{
                if(res.data === "OK") return Eliminar()
                else Fallo()
            }).catch(err => {console.log(err)})
    }
    return (
        <div className="container">
            <div className="row"  >
                <div className="col-sm-6 offset-3">
                    <ul className="list-group" >
                        <li className="list-group-item" > {usuario.filename}</li>
                        <li className="list-group-item" > {usuario.uploadDate}</li>
                    </ul>
                    <hr className="mt-0"></hr>
                    <Link to = {`/editarusuario/${usuario._id}`}> <li className="btn btn-success"> Ver</li> </Link>
                    &nbsp;
                    <button className="btn btn-danger"  onClick={() => eliminar(usuario._id)}>Eliminar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}