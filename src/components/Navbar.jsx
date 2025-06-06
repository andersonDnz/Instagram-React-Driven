import React from 'react'

import logo from "../../src/assets/img/logo.png";


import { IonIcon } from '@ionic/react';
import {
  logoInstagram,
  paperPlaneOutline,
  compassOutline,
  personOutline,
  heartOutline,
} from 'ionicons/icons';


import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <IonIcon icon={logoInstagram}></IonIcon>
          <div className={styles.separador}></div>
          <img src={logo} alt="logo-insta" />
        </div>

        <div className={styles.pesquisa}>
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className={styles.icones}>
          <IonIcon icon={paperPlaneOutline}></IonIcon>
          <IonIcon icon={compassOutline}></IonIcon>
          <IonIcon icon={heartOutline}></IonIcon>
          <IonIcon icon={personOutline}></IonIcon>
        </div>

        <div className={styles.icones_mobile}>
          <IonIcon icon={styles.personOutline}></IonIcon>
        </div>
      </div>
    </div>
  )
}

export default Navbar;