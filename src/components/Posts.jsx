import React from 'react';
import styles from "./Posts.module.css";
import { IonIcon } from '@ionic/react';
import {
  ellipsisHorizontal,
  heartOutline,
  chatbubbleOutline,
  paperPlaneOutline,
  bookmarkOutline,
} from 'ionicons/icons';

import meowed from '../../src/assets/img/meowed.svg';
import gatoTelefone from '../../src//assets/img/gato-telefone.svg';
import respondeai from '../../src/assets/img/respondeai.svg';
import barked from '../../src/assets/img/barked.svg';
import dog from '../../src/assets/img/dog.svg';
import adorableAnimals from '../../src/assets/img/adorable_animals.svg';

const Posts = () => {
  return (
    <div className={styles.post}>

      <div className={styles.post}>
        <div className={styles.topo}>
          <div className={styles.usuario}>
            <img src={meowed} alt="meowed" />
            meowed
          </div>
          <div className={styles.acoes}>
            <IonIcon icon={ellipsisHorizontal} />
          </div>
        </div>

        <div className={styles.conteudo}>
          <img src={gatoTelefone} alt="gato-telefone" />
        </div>

        <div className={styles.fundo}>
          <div className={styles.acoes}>
            <div>
              <IonIcon icon={heartOutline} />
              <IonIcon icon={chatbubbleOutline} />
              <IonIcon icon={paperPlaneOutline} />
            </div>
            <div>
              <IonIcon icon={bookmarkOutline} />
            </div>
          </div>

          <div className={styles.curtidas}>
            <img src={respondeai} alt="respondeai" />
            <div className={styles.texto}>
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.post}>
        <div className={styles.topo}>
          <div className={styles.usuario}>
            <img src={barked} alt="barked" />
            barked
          </div>
          <div className={styles.acoes}>
            <IonIcon icon={ellipsisHorizontal} />
          </div>
        </div>

        <div className={styles.conteudo}>
          <img src={dog} alt="dog" />
        </div>

        <div className={styles.fundo}>
          <div className={styles.acoes}>
            <div>
              <IonIcon icon={heartOutline} />
              <IonIcon icon={chatbubbleOutline} />
              <IonIcon icon={paperPlaneOutline} />
            </div>
            <div>
              <IonIcon icon={bookmarkOutline} />
            </div>
          </div>

          <div className={styles.curtidas}>
            <img src={adorableAnimals} alt="adorable_animals" />
            <div className={styles.texto}>
              Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.topo}>
          <div className={styles.usuario}>
            <img src={meowed} alt="meowed" />
            meowed
          </div>
          <div className={styles.acoes}>
            <IonIcon icon={ellipsisHorizontal} />
          </div>
        </div>

        <div className={styles.conteudo}>
          <img src={gatoTelefone} alt="gato-telefone" />
        </div>

        <div className={styles.fundo}>
          <div className={styles.acoes}>
            <div>
              <IonIcon icon={heartOutline} />
              <IonIcon icon={chatbubbleOutline} />
              <IonIcon icon={paperPlaneOutline} />
            </div>
            <div>
              <IonIcon icon={bookmarkOutline} />
            </div>
          </div>

          <div className={styles.curtidas}>
            <img src={respondeai} alt="respondeai" />
            <div className={styles.texto}>
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Posts;
