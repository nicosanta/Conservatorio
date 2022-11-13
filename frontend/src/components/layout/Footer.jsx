import React from "react";
import styles from "./../../styles/footer.module.css"

export const Footer = (props) => {
    return (
        <footer>
            <div className={styles.footer}>
                <p className={styles.footerText}>Creado por Nicolás Santachita &copy;</p>
            </div>
        </footer>
    );
}