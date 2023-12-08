import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import imageByIndex from 'utils/imageByIndex.js';
import { Thumb } from 'components/InfoCar/InfoCarCarouselThumb.jsx';
import { generateCarImgUrl } from 'utils/requests.js';

export const InfoCarCarousel = (props) => {
  const { slides, options, text } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="absolute">
                <div className="flex col-span-3 p-6 text-white font-medium rounded-ten max-md:hidden">
                  <div className="max-w-[380px]">
                    <h2 className="text-3xl font-semibold mb-4">
                      Sports car with the best design and acceleration
                    </h2>
                    <p className="max-w-[285px] mb-8">
                      Safety and comfort while driving a futuristic and elegant sports car
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={generateCarImgUrl(text.make, text.model, text.year)}
                      alt={`${text.make} ${text.model}`}
                    />
                  </div>
                </div>
              </div>
              <img className="embla__slide__img" src={imageByIndex(index)} alt="Your alt text" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
