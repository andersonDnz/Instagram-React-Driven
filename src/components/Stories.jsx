import React, { useRef } from 'react';

import styles from "./Stories.module.css";


import gag from "../../src/assets/img/9gag.svg";
import meowed from "../../src/assets/img/meowed.svg";
import barked from "../../src/assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../src/assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../src/assets/img/wawawicomics.svg";
import respondeai from "../../src/assets/img/respondeai.svg";
import filomoderna from "../../src/assets/img/filomoderna.svg";
import memeriagourmet from "../../src/assets/img/memeriagourmet.svg";

const Stories = () => {
  const storiesRef = useRef(null);


  return (
    <div className={styles.container}>
      <div className={styles.stories} ref={storiesRef}>
        {[
          { src: gag, alt: "9gag", user: "9gag" },
          { src: meowed, alt: "meowed", user: "meowed" },
          { src: barked, alt: "barked", user: "barked" },
          { src: nathanwpylestrangeplanet, alt: "nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet" },
          { src: wawawicomics, alt: "wawawicomics", user: "wawawicomics" },
          { src: respondeai, alt: "respondeai", user: "respondeai" },
          { src: filomoderna, alt: "filomoderna", user: "filomoderna" },
          { src: memeriagourmet, alt: "memeriagourmet", user: "memeriagourmet" },
          { src: gag, alt: "9gag", user: "9gag" },
          { src: barked, alt: "10gag", user: "10gag" },
          { src: gag, alt: "11gag", user: "11gag" },
          { src: nathanwpylestrangeplanet, alt: "extra", user: "9gag" },
          { src: gag, alt: "another", user: "9gag" },
        ].map((story, index) => (
          <div className={styles.story} key={index}>
            <div className={styles.imagem}>
              <img src={story.src} alt={story.alt} />
            </div>
            <div className={styles.usuario}>{story.user}</div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Stories;
