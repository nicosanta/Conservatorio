import styles from "./../../styles/header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GiMusicalNotes } from "react-icons/gi"
import { TbArrowBackUp } from "react-icons/tb"
import { useState } from "react";


export const Header = (props) => {

    const [openMenuBoolean, setOpenMenuBoolean] = useState(false)

    function handleOpenMenu() {
        setOpenMenuBoolean(true);
    }

    function handleCloseMenu() {
        setOpenMenuBoolean(false);
    }

    return (

        <header className={styles.topheader}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1><li><GiMusicalNotes></GiMusicalNotes> <Link to='/'>Conservatorio de Musica</Link></li></h1>
                </div>
                <nav>
                    <ul className={styles.menuDesktop}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/planes'>Planes</Link></li>
                        <li><Link to='/grupos'>Grupos</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                    </ul>
                </nav>
                <button className={styles.openMenu} onClick={handleOpenMenu} aria-label="abrir menú"><BiMenu></BiMenu>
                </button>
                {openMenuBoolean &&
                    <nav>
                        <ul className={styles.menu}>
                            <button className={styles.closeMenu} onClick={handleCloseMenu} aria-label="cerrar menú"><TbArrowBackUp></TbArrowBackUp> Volver</button>
                            <li><Link to='/' className={styles.closeMenu} onClick={handleCloseMenu}>Home</Link></li>
                            <li><Link to='/planes' className={styles.closeMenu} onClick={handleCloseMenu}>Planes</Link></li>
                            <li><Link to='/grupos' className={styles.closeMenu} onClick={handleCloseMenu}>Grupos</Link></li>
                            <li><Link to='/contacto'className={styles.closeMenu} onClick={handleCloseMenu}>Contacto</Link></li>
                        </ul>
                    </nav>
                }
            </div>
        </header>
    );
}

