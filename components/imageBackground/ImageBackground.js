import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageBackground.module.css'
const ImageWithBackground = ({ src, className }) => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const c = canvas.getContext('2d');
      c.width = canvas.width = img.width;
      c.height = canvas.height = img.height;
      c.clearRect(0, 0, c.width, c.height);
      c.drawImage(img, 0, 0, img.width, img.height);

      const colors = getColors(c);
      const avgColor = getAverageColor(colors);
      setBgColor(`#${avgColor}`);
    };
  }, [src]);

  const getColors = (context) => {
    const imageData = context.getImageData(0, 0, context.width, context.height);
    const data = imageData.data;
    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3];
      if (alpha < 128) continue; // skip transparent pixels

      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    return { r, g, b };
  };

  const getAverageColor = ({ r, g, b }) => {
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  };

  return (
    <div className={className} style={{ backgroundColor: bgColor, display:"flex", width:"100%", height:"100%" }}>
      <img ref={imgRef} src={src} alt="Dynamic Background"  width="90%" height={"auto"} style={{display:'block',margin:"auto"}}/>
    </div>
  );
};

export default ImageWithBackground;
