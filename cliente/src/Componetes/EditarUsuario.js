import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiEnvio } from "../ApiConfig/WebConfig";

export const EditarUsuario = () =>{

    const param = useParams()
    const [nombre,setnombre] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await apiEnvio.post('/api/usuario/ObtenerDataUsuario', { ID: param._id });
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