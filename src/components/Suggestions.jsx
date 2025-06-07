import React from 'react';
import styles from "./Suggestions.module.css";


import badVibes from "../assets/img/bad.vibes.memes.svg";
import chibirdart from "../assets/img/chibirdart.svg";
import razoesparaacreditar from "../assets/img/razoesparaacreditar.svg";
import adorable_animals from "../assets/img/adorable_animals.svg";
import smallcutecats from "../assets/img/smallcutecats.svg";


import Usuario from './Usuario.js';



const sugestoes = [
  {
    img: badVibes,
    nome: "bad.vibes.memes",
    razao: "Segue você",
  },
  {
    img: chibirdart,
    nome: "chibirdart",
    razao: "Segue você",
  },
  {
    img: razoesparaacreditar,
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram",
  },
  {
    img: adorable_animals,
    nome: "adorable_animals",
    razao: "Segue você",
  },
  {
    img: smallcutecats,
    nome: "smallcutecats",
    razao: "Segue você",
  },
];

const Suggestions = () => {
  return (
    <div className={styles.sidebar}>
      <Usuario />

      <div className={styles.sugestoes}>
        <div className={styles.titulo}>
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((s, index) => (
          <div key={index} className={styles.sugestao}>
            <div className={styles.usuario}>
              <img src={s.img} alt={s.nome} />
              <div className={styles.texto}>
                <div className={styles.nome}>{s.nome}</div>
                <div className={styles.razao}>{s.razao}</div>
              </div>
            </div>
            <div className={styles.seguir}>Seguir</div>
          </div>
        ))}
      </div>

      <div className={styles.links}>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className={styles.copyright}>
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
};

export default Suggestions;
