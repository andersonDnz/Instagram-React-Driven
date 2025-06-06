import React from 'react'

import styles from "./Stories.module.css";

import { IonIcon } from '@ionic/react';
import { chevronForwardCircle } from 'ionicons/icons';


import gag from "../../src/assets/img/9gag.svg";
import meowed from "../../src/assets/img/meowed.svg";
import barked from "../../src/assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../src/assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../src/assets/img/wawawicomics.svg";
import respondeai from "../../src/assets/img/respondeai.svg";
import filomoderna from "../../src/assets/img/filomoderna.svg";
import memeriagourmet from "../../src/assets/img/memeriagourmet.svg";




const Stories = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={gag} alt="9gag" />
        </div>
        <div className={styles.usuario}>
          9gag
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={meowed} alt="meowed" />
        </div>
        <div className={styles.usuario}>
          meowed
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={barked} alt="barked" />
        </div>
        <div className={styles.usuario}>
          barked
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={nathanwpylestrangeplanet} alt="nathanwpylestrangeplanet" />
        </div>
        <div className={styles.usuario}>
          nathanwpylestrangeplanet
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={wawawicomics} alt="wawawicomics" />
        </div>
        <div className={styles.usuario}>
          wawawicomics
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={respondeai} alt="respondeai" />
        </div>
        <div className={styles.usuario}>
          respondeai
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={filomoderna} alt="filomoderna" />
        </div>
        <div className={styles.usuario}>
          filomoderna
        </div>
      </div>

      <div className={styles.story}>
        <div className={styles.imagem}>
          <img src={memeriagourmet} alt="memeriagourmet" />
        </div>
        <div className={styles.usuario}>
          memeriagourmet
        </div>
      </div>

      <div className={styles.setinha}>
        <IonIcon icon={chevronForwardCircle}></IonIcon>
      </div>
    </div>

  )
}

export default Stories;