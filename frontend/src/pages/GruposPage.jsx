import React from "react";
import styles from "./../styles/grupos.module.css"

export const GruposPage = (props) => {
  return (
    <main>
      <div className={styles.description}>
        <h2>Nuestros Grupos Estables</h2>
        <br></br>
        <p></p>
      </div>
      <div className={styles.container}>
        <div className={styles.jazz}>
          <div className={styles.jazz_img}>
            <img
              src="img/jazz4.jpg"
              alt="conjuntodejazz"
              width="480"
              height="200"
            />
          </div>
          <div className={styles.des}>
            <h3>Conjunto de Jazz</h3>
            <hr />
            <p>Si te gusta la improvisacion el Jazz es para vos.</p>
          </div>
        </div>
        <div className="coro-container">
          <div className="coro-img">
            <img
              src="img/coro1.jpg"
              alt="ensamblecoral"
              width="480"
              height="200"
            />
          </div>
          <div className={styles.des}>
            <h3>Ensamble Coral</h3>
            <hr />
            <p>Si buscas un grupo para cantar, nosotros tenemos el mejor.</p>
          </div>
        </div>
        <div className="orquesta-container">
          <div className="orquesta-img">
            <img
              src="img/clasico.jpg"
              alt="practicaorquestal"
              width="480"
              height="200"
            />
          </div>
          <div className={styles.des}>
            <h3>Practica Orquestal</h3>
            <hr />
            <p>Gran conjunto sinfónico con mas de 30 años de experiencia.</p>
          </div>
        </div>
      </div>

    </main>
  )
}