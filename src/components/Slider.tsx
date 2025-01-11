import { useState } from 'react';
import one from '../assets/uno.jpg';
import dos from '../assets/dos.jpg';
import tres from '../assets/tres.jpg';
import { Wrapper } from '../wrappers/Slider';

const Slider: React.FC = () => {
  // Lista de imágenes
  const images = [one, dos, tres];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Wrapper>
      <div className='slider'>
        <div
          className='slider-container'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className='slider-image' />
          ))}
        </div>

        <button className='slider-button prev' onClick={prevSlide}>
          ❮
        </button>
        <button className='slider-button next' onClick={nextSlide}>
          ❯
        </button>
      </div>
    </Wrapper>
  );
};

export default Slider;
