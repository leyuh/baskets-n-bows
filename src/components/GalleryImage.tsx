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
    <div ref={divRef} className="gallery-image-div" onMouseDown={() => {
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
      <img ref={imgRef}className="gallery-img" src={path} onMouseOver={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "brightness(50%) blur(2px)";
          descRef.current.style.visibility = "visible";
        }
      }} onMouseOut={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "brightness(100%) blur(0px)";
          descRef.current.style.visibility = "hidden";
        }
      }}/>

      <p ref={descRef} className="gallery-desc" onMouseOver={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "brightness(50%) blur(2px)";
          descRef.current.style.visibility = "visible";
        }
      }} onMouseOut={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "brightness(100%) blur(0px)";
          descRef.current.style.visibility = "hidden";
        }
      }}>{desc}</p>
    </div>
  );
}

export default GalleryImage;