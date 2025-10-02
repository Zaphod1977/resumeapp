import React from 'react';
import "./ImageStyler.css";

function ImageStyler(props) {
  const { linkurl, imageSource, imageAlt, label } = props;

  // fallback: if no linkurl provided, just use the imageSource
  const finalLink = linkurl || imageSource;

  return (
    <div className="item">
      <a href={finalLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSource} alt={imageAlt || label} />
        <div className="pictext">{label}</div>
      </a>
    </div>
  );
}

export default ImageStyler;
