import React from "react";
import styles from "./../styles/home.module.css"
import { Link } from "react-router-dom";

export const HomePage = (props) => {
    return (
        <main className={styles.holder}>
            <div className={styles.img}>
                <img src="img/orquesta.jpg" alt="orquesta" />
            </div>

            <div className={styles.container}>
                <div className={styles.cajaUno}>
                    <div className={styles.imgGraduacion}>
                        <img src="img/graduacion2.jpg" alt="formacion profesional" width="680px" height="auto" />
                    </div>
                    <div className={styles.boxIntro}>
                        <div>
                            <h2 className={styles.titleIntro}><li><Link to='/contacto'>Conservatorio de Música</Link></li></h2>
                        </div>
                        <div>
                            <p className={styles.textIntro}>Años de experiencia en formacion profesional. 
                            Comunicate con nosotros. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.cajaDos}>
                    <div className={styles.imgProgramas}>
                        <img src="img/libros2.jpg" alt="nuestros programas" width="680px" height="auto" />
                    </div>
                    <div className={styles.boxProgramas}>
                        <div>
                            <h2 className={styles.titleProgramas}><li><Link to='/planes'>Nuestros programas</Link></li></h2>
                        </div>
                        <div>
                            <p className={styles.textProgramas}>Actualmente tenemos mas de 10 carreras disponibles.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.cajaTres}>
                    <div className={styles.imgGrupos}>
                        <img src="img/concierto.jpg" alt="nuestros grupos" width="680px" height="auto" />
                    </div>
                    <div className={styles.boxGrupos}>
                        <div>
                            <h2 className={styles.titleGrupos}><li><Link to='/grupos'>Grupos Estables</Link></li></h2>
                        </div>
                        <div>
                            <p className={styles.textGrupos}> Estos son nuestros conjuntos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.cajaCuatro}>
                    <div className={styles.imgConcierto}>
                        <img src="img/concierto3.jpg" alt="eventos" width="680px" height="auto" />
                    </div>
                    <div className={styles.boxConcierto}>
                        <div>
                            <h2 className={styles.titleConcierto}>Eventos y Conciertos</h2>
                        </div>
                        <div>
                            <p className={styles.textConcierto}>Todos nuestros conciertos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

