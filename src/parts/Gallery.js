import React from 'react';
import ImageGallery from 'react-image-gallery';

import Title from '../components/Title';

const Gallery = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1014/1000/600/',
      thumbnail: 'https://picsum.photos/id/1014/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1020/1000/600/',
      thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1011/1000/600/',
      thumbnail: 'https://picsum.photos/id/1011/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <section className="gallery container d-flex flex-column align-items-center">
      <Title title="Captured Moments" />
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <ImageGallery
            items={images}
            lazyLoad={true}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
