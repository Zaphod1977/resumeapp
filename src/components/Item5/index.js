import React from 'react';


function Item5 (props) {
    const {linkurl, imageSource, imageAlt, label} = props;

    return (
        <div>
        <a href={linkurl}>
          <img src={imageSource} alt={imageAlt} />
          <div className="pictext">{label}</div>
        </a>
      </div>
    )
}

export default Item5;