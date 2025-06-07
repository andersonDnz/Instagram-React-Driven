import React, { useState } from 'react';
import { pencil } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

import styles from "./Suggestions.module.css";

import catanacomics from "../assets/img/catanacomics.svg";


export default function Usuario() {
  const [nome, setNome] = useState("catanacomics");
  const [imagem, setImagem] = useState(catanacomics);

  function editarNome() {
    const novoNome = prompt("Digite o novo nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
      setNome(novoNome);
    }
  }

  function editarImagem() {
    const novoLink = prompt("Digite o novo link da imagem:");
    if (novoLink !== null && novoLink.trim() !== "") {
      setImagem(novoLink);
    }
  }

  return (

    <div className={styles.usuario}>
      <img
        src={imagem}
        alt="Imagem do usuário"
        onClick={editarImagem}
        style={{ cursor: "pointer" }}
      />

      <div className={styles.texto}>
        <strong>{nome}</strong>
        <span onClick={editarNome} style={{ cursor: "pointer" }}>
          <IonIcon icon={pencil} />
        </span>
      </div>

    </div>
  );
}
