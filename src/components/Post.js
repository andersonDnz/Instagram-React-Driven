import React, { useState } from 'react';

import { IonIcon } from '@ionic/react';



import styles from "./Posts.module.css";

import {
  heartOutline,
  heart,
  chatbubbleOutline,
  paperPlaneOutline,
  bookmarkOutline,
  bookmark,
  ellipsisHorizontal,
} from 'ionicons/icons';

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  function toggleLike(byImage = false) {
    if (liked && byImage) return;
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <div className={styles.post}>
      <div className={styles.topo}>
        <div className={styles.usuario}>
          <img src={post.userImg} alt={post.user} />
          {post.user}
        </div>
        <div className={styles.acoes}>
          <IonIcon icon={ellipsisHorizontal} />
        </div>
      </div>

      <div className={styles.conteudo} onClick={() => toggleLike(false)}>
        <img src={post.contentImg} alt="conteudo" />
      </div>

      <div className={styles.fundo}>
        <div className={styles.acoes}>
          <div>
            <IonIcon
              icon={liked ? heart : heartOutline}
              color={liked ? 'danger' : ''}
              onClick={() => toggleLike(!liked)}
            />
            <IonIcon icon={chatbubbleOutline} />
            <IonIcon icon={paperPlaneOutline} />
          </div>
          <div>
            <IonIcon
              icon={saved ? bookmark : bookmarkOutline}
              onClick={() => setSaved(!saved)}
            />
          </div>
        </div>

        <div className={styles.curtidas}>
          <img src={post.likedByImg} alt={post.likedBy} />
          <div className={styles.texto}>
            Curtido por <strong>{post.likedBy}</strong> e <strong>outras {likes.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
