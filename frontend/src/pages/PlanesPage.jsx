import React from "react";
import styles from "./../styles/planes.module.css"

export const PlanesPage = (props) => {
    return (
        <main>
            <div className={styles.art}>
                <h2>¿Que te gustaria aprender?.</h2>
                <p>Estas son nuestras carreras:</p>
            </div>
            <div className={styles.contiene}>
                <div className={styles.carreras}>
                    <div className={styles.piano}>
                        <div>
                            <img
                                src="img/pianovertical.jpg"
                                alt="piano"
                                height="auto"
                                width="330"
                            />
                        </div>
                        <div className={styles.text}>
                            <h3>Piano</h3>
                            <hr></hr>
                            <p>Estas son las clases de piano</p>
                        </div>
                    </div>

                    <div className={styles.cuerdas}>
                        <div>
                            <img
                                src="img/contrabajovertical.jpg"
                                alt="cuerdas"
                                height="auto"
                                width="330"
                            />
                        </div>
                        <div className={styles.text}>
                            <h3>Cuerdas</h3>
                            <hr></hr>
                            <p>Todo tipo de cuerdas</p>
                        </div>
                    </div>
                    <div className={styles.vientos}>
                        <div>
                            <img
                                src="img/vientos.jpg"
                                alt="vientos"
                                height="auto"
                                width="330"
                            />
                        </div>
                        <div className={styles.text}>
                            <h3>Vientos</h3>
                            <hr></hr>
                            <p>Intrumentos de Viento</p>
                        </div>
                    </div>
                    <div className={styles.percusion}>
                        <div>
                            <img
                                src="img/percusion2.jpg"
                                alt="percusion"
                                height="496"
                                width="330"
                            />
                        </div>
                        <div className={styles.text}>
                            <h3>Percusión</h3>
                            <hr></hr>
                            <p>Timbales</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}