import heart from './svg/heart.svg';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import dog from './svg/dog.svg';
import { useState } from 'react';

const svgMap = {
  bird,
  cat,
  cow,
  gator,
  horse,
  dog,
};

function Animal({ type }) {
  const [clicks, setClicks] = useState(0);

  return (
    <div onClick={() => setClicks(clicks + 1)}>
      <img alt="animal" src={svgMap[type]}></img>
      <img
        alt="heart"
        src={heart}
        style={{ width: 10 + 5 * clicks + 'px' }}
      ></img>
    </div>
  );
}

export default Animal;
