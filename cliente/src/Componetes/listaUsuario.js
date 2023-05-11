import { useEffect, useState } from "react";
import { UsuarioInvidual } from "./UsuarioInvidual";
import axios from  'axios'
export const ListaUsuario = () =>{

    const [DataUsuario,SetDataUsuario] = useState ([])

    useEffect(()=>{
        const api = axios.create({
            baseURL: 'http://localhost:5000'
        })
        const d = [];
        api.post('/api/usuario/ObtenerUsuarios',d)
            .then(res =>{
                SetDataUsuario(res.data)
            }).catch(err=>{
                console.log(err)
            })
    },[])

    let listausuario = [] ;
    if (DataUsuario.length !==0){
        listausuario = DataUsuario.map(usuario =>{
            return(
                <div key={usuario._id}>
                    <UsuarioInvidual usuario = {usuario}/>
                </div>
            )
        })
    }
    
    return(
        <div>
            <h2>Lista de videos</h2>
             {listausuario}
        </div>
    )
}