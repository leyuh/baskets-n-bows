import React, { useState, useRef, SetStateAction, Dispatch, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

import InspectGalleryImage from "./InspectGalleryImage";

interface GalleryImageProps {
    path: string;
    desc: string;
    showIGI: string | null;
    setShowIGI: Dispatch<SetStateAction<string | null>>;
    k: number;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({path, desc, showIGI, setShowIGI, k}) => {

  const [show, setShow] = useState<boolean>(true);  

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
          imgRef.current.style.filter = "";
          descRef.current.style.visibility = "hidden";
        }
      }
    }} onClick={() => {
      if (!isMobile) {
        setShowIGI(prev => {
          if (prev == null) {
            return imgRef.current.src;
          } else if (prev != imgRef.current.src) {
            return imgRef.current.src;
          }
          return null;
        });
      }
    }}>
      <img ref={imgRef}className="gallery-img" src={path} onMouseOver={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "brightness(50%) blur(2px)";
          descRef.current.style.visibility = "visible";
        }
      }} onMouseOut={() => {
        if (!isMobile) {
          imgRef.current.style.filter = "";
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
          imgRef.current.style.filter = "";
          descRef.current.style.visibility = "hidden";
        }
      }}>{desc}</p>
    </div>
  );
}

export default GalleryImage;