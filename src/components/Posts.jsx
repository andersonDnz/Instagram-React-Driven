import Post from './Post';


import meowed from '../../src/assets/img/meowed.svg';
import gatoTelefone from '../../src/assets/img/gato-telefone.svg';
import respondeai from '../../src/assets/img/respondeai.svg';
import barked from '../../src/assets/img/barked.svg';
import dog from '../../src/assets/img/dog.svg';
import adorableAnimals from '../../src/assets/img/adorable_animals.svg';

const postsData = [
  {
    user: 'meowed',
    userImg: meowed,
    contentImg: gatoTelefone,
    likedBy: 'respondeai',
    likedByImg: respondeai,
    likes: 101523
  },
  {
    user: 'barked',
    userImg: barked,
    contentImg: dog,
    likedBy: 'adorable_animals',
    likedByImg: adorableAnimals,
    likes: 99159
  },
  {
    user: 'meowed',
    userImg: meowed,
    contentImg: gatoTelefone,
    likedBy: 'respondeai',
    likedByImg: respondeai,
    likes: 101523
  }
];

export default function Posts() {
  return (
    <div>
      {postsData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
