import image1 from '/slide-bg-1.png';
import image2 from '/slide-bg-2.png';
import image3 from '/gtr.png';

export const images = [image1, image2, image3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
