import React from 'react';
import Item4Image from '../../assets/images/ResumeV2.0.jpg'
import ImageStyler from '../ImageStyler';

function Item4(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">D.G. Coin</h2>
      <div >
        <div className="">
          <ImageStyler className="Item4"
            imageSource={Item4Image}
            imageAlt=""
            label="">
          </ImageStyler>
        </div>
      </div>
    </section>
  );
};

export default Item4;
