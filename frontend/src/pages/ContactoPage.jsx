import React from "react";
import styles from "./../styles/contacto.module.css"
import { useState } from "react";
import axios from "axios";


export const ContactoPage = (props) => {

    const initialForm = {
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main className={styles.contenedor}>
            <form className={styles.formulario} action="/contacto" onSubmit={handleSubmit} method="post">
                <div className={styles.contactotitle}><h3>Comunicate con nosotros</h3></div>
                
                <div className={styles.email}>
                    <input type="email" placeholder="Correo"name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className={styles.telefono}>
                    <input placeholder="Telefono"type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                </div>
                <div className={styles.mensaje}>
                    <textarea placeholder="Mensaje"name="mensaje" value={formData.mensaje} onChange={handleChange} rows={2}></textarea>
                </div>
                <div className={styles.btn}>
                    <button type="submit" value="Enviar"className={styles.button}>Enviar</button>
                </div>
                

                {sending ? <p>Enviando</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </main>
    )
}