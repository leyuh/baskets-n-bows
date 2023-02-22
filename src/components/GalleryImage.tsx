import React from 'react';


interface GalleryImageProps {
    path: string;
    desc: string;
    k: number;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({path, desc, k}) => {
  return (
    <div className="gallery-image-div">
        <img className="gallery-img" src={path}/>
        <p className="gallery-desc">{desc}</p>
    </div>
  );
}

export default GalleryImage;