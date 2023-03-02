import { SetStateAction, Dispatch, useRef, useEffect } from "react";

import '../styles/InspectGalleryImage.css';

interface InspectGalleryImageProps {
    imgSrc: string;
    setShowIGI: Dispatch<SetStateAction<string | null>>
}

export const InspectGalleryImage: React.FC<InspectGalleryImageProps> = ({imgSrc, setShowIGI}) => {

    return <div id="igi-bg" onClick={() => {
        setShowIGI(null);
    }}>
        <img id="inspect-gallery-image" src={imgSrc}/>
    </div>
}

export default InspectGalleryImage;