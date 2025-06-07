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
import gatoTelefone from '../../src/assets/img/gato-telefone.svg';
import respondeai from '../../src/assets/img/respondeai.svg';
import barked from '../../src/assets/img/barked.svg';
import dog from '../../src/assets/img/dog.svg';
import adorableAnimals from '../../src/assets/img/adorable_animals.svg';

export default function Posts() {
  const posts = [
    {
      usuario: "meowed",
      avatar: meowed,
      imagem: gatoTelefone,
      curtidoPor: "respondeai",
      avatarCurtida: respondeai,
      outrasCurtidas: "101.523"
    },
    {
      usuario: "barked",
      avatar: barked,
      imagem: dog,
      curtidoPor: "adorable_animals",
      avatarCurtida: adorableAnimals,
      outrasCurtidas: "99.159"
    },
    {
      usuario: "meowed",
      avatar: meowed,
      imagem: gatoTelefone,
      curtidoPor: "respondeai",
      avatarCurtida: respondeai,
      outrasCurtidas: "101.523"
    }
  ];

  return (
    <div className={styles.post}>
      {posts.map((post) =>
        <div className={styles.post}>
          <div className={styles.topo}>
            <div className={styles.usuario}>
              <img src={post.avatar} alt={post.usuario} />
              {post.usuario}
            </div>
            <div className={styles.acoes}>
              <IonIcon icon={ellipsisHorizontal} />
            </div>
          </div>

          <div className={styles.conteudo}>
            <img src={post.imagem} alt="conteúdo" />
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
              <img src={post.avatarCurtida} alt={post.curtidoPor} />
              <div className={styles.texto}>
                Curtido por <strong>{post.curtidoPor}</strong> e <strong>outras {post.outrasCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
