import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const EditarUsuario = () =>{

    const param = useParams()
    const [nombre,setnombre] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const api = axios.create({
              baseURL: 'http://192.168.132.129:5000/',
              responseType: 'arraybuffer', // Para recibir los datos como un ArrayBuffer
            });
      
            const response = await api.post('/api/usuario/ObtenerDataUsuario', { ID: param._id });
            const videoBlob = new Blob([response.data], { type: 'video/mp4' });
            const videoUrl = URL.createObjectURL(videoBlob);
            setnombre(videoUrl);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
    }, [param._id]);

    return (
      <div className="container">
        <div className="row">
            <h2 className="mt-4">Ver video</h2>   
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="Nombre" className="form-label">Video</label>
                    <video className="form-control" src={nombre} controls type="video/mp4"/>
                </div>
            </div>
        </div>
      </div>
    )
}