import  { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import "./Slider2.css"

const MAX_VISIBILITY = 3;

export const Card = ({ title, content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const SliderComponent = ({ cards }) => {
  const [active, setActive] = useState(2);
  const count = cards.length; // Use cards.length instead of React.Children.count

  return (
    <div className='carousel'>
      {active > 0 && (
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {cards.map((card, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
          key={i}
        >
          {card}
        </div>
      ))}
      {active < count - 1 && (
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default SliderComponent;
