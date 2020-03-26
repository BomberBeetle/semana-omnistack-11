import React, {useState} from 'react';
import logoImg from "../../assets/logo.svg";
import { Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css'
import api from "../../services/api"

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whats, setWhats] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUF] = useState("");

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        let data = {
            name,
            email,
            whatsapp: whats,
            city,
            uf
        };

        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de Acesso: ${response.data.id}`);

            history.push("/");
        }
        catch(e){
            alert("Erro no registro. Tente novamente.");
            console.log(e);
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#E02041"/>
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder = "Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="Email da ONG"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="WhatsApp"value={whats}
                    onChange={e => setWhats(e.target.value)}/>
                    <div className = "input-group">
                        <input placeholder="Cidade"value={city}
                    onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{width: 80}} value={uf}
                    onChange={e => setUF(e.target.value)}/>
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}