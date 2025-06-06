import React from 'react'

import styles from "./Container.module.css";



import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from './Posts';
import Suggestions from './Suggestions';

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.corpo}>
        <Navbar />
        <div className={styles.esquerda}></div>
        <Stories />
        <Posts />
        <Suggestions />
      </div>

    </div>

  )
}

export default Container