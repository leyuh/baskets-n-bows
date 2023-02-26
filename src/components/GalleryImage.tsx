import React, { useState, useRef } from 'react';
import {isMobile} from 'react-device-detect';

interface GalleryImageProps {
    path: string;
    desc: string;
    k: number;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({path, desc, k}) => {

  const [show, setShow] = useState(true);

  const divRef = useRef<any>();
  const imgRef = useRef<any>();
  const descRef = useRef<any>();

  return (
    <div ref={divRef} className="gallery-image-div" onClick={() => {
      if (isMobile) {
        setShow(prev => !prev);
        if (show) {
          imgRef.current.style.filter = "brightness(50%) blur(2px)";
          descRef.current.style.visibility = "visible";
        } else {
          imgRef.current.style.filter = "brightness(100%) blur(0px)";
          descRef.current.style.visibility = "hidden";
        }
      }
    }}>
        <img ref={imgRef}className="gallery-img" src={path}/>
        <p ref={descRef} className="gallery-desc">{desc}</p>
    </div>
  );
}

export default GalleryImage;