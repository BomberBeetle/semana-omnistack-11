import React, {useEffect, useState} from 'react';
import logoImg from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {FiPower, FiTrash2} from "react-icons/fi"
import './styles.css';
import api from "../../services/api";

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{headers:{Authorization: ongId,}})
            setIncidents(incidents.filter(incident => incident.id !== id))
        }
        catch(err){
            alert("Erro em deletar o caso, tente novamente.");
            throw err;
        }
    }
    useEffect(() => {
        api.get("profile", {
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId])

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem-Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Caso</Link>
                <button type="button">
                    <FiPower size = {18} color="#e02841"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso:</strong> 
                    <p>{incident.title}</p>
 
                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>
 
                    <strong>Valor: </strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(incident.value)}</p>
 
                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                         <FiTrash2 size={18} color="#E02041"/>
                    </button>
                 </li>
                ))}
            </ul>
        </div>
        
    );
}