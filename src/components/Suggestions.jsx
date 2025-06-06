import React from 'react'



import styles from "./Suggestions.module.css"

import { IonIcon } from '@ionic/react'
import { pencil } from 'ionicons/icons'

import catanacomics from "../assets/img/catanacomics.svg"
import badVibes from "../assets/img/bad.vibes.memes.svg"
import chibirdart from "../assets/img/chibirdart.svg"
import razoesparaacreditar from "../assets/img/razoesparaacreditar.svg"
import adorable_animals from "../assets/img/adorable_animals.svg"
import smallcutecats from "../assets/img/smallcutecats.svg"



const Suggestions = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.usuario}>
        <img src={catanacomics} alt="imagem de perfil" />
        <div className={styles.texto}>
          <span>
            <strong>catanacomics</strong>

            <IonIcon icon={pencil} ></IonIcon>
          </span>
        </div>
      </div>

      <div className={styles.sugestoes}>
        <div className={styles.titulo}>
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <div className={styles.sugestao}>
          <div className={styles.usuario}>
            <img src={badVibes} alt="bad.vibes.memes.svg" />
            <div className={styles.texto}>
              <div className={styles.nome}>bad.vibes.memes</div>
              <div className={styles.razao}>Segue você</div>
            </div>
          </div>

          <div className={styles.seguir}>Seguir</div>
        </div>

        <div className={styles.sugestao}>
          <div className={styles.usuario}>
            <img src={chibirdart} alt="chibirdart" />
            <div className={styles.texto}>
              <div className={styles.nome}>chibirdart</div>
              <div className={styles.razao}>Segue você</div>
            </div>
          </div>

          <div className={styles.seguir}>Seguir</div>
        </div>

        <div className={styles.sugestao}>
          <div className={styles.usuario}>
            <img src={razoesparaacreditar} alt="razoesparaacreditar" />
            <div className={styles.texto}>
              <div className={styles.nome}>razoesparaacreditar</div>
              <div className={styles.razao}>Novo no Instagram</div>
            </div>
          </div>

          <div className={styles.seguir}>Seguir</div>
        </div>

        <div className={styles.sugestao}>
          <div className={styles.usuario}>
            <img src={adorable_animals} alt="adorable_animals" />
            <div className={styles.texto}>
              <div className={styles.nome}>adorable_animals</div>
              <div className={styles.razao}>Segue você</div>
            </div>
          </div>

          <div className={styles.seguir}>Seguir</div>
        </div>

        <div className={styles.sugestao}>
          <div className={styles.usuario}>
            <img src={smallcutecats} alt="smallcutecats" />
            <div className={styles.texto}>
              <div className={styles.nome}>smallcutecats</div>
              <div className={styles.razao}>Segue você</div>
            </div>
          </div>

          <div className={styles.seguir}>Seguir</div>
        </div>
      </div>

      <div className={styles.links}>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className={styles.copyright}>
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>



  )
}

export default Suggestions