import React from 'react';
import Item4Image from '../../assets/images/ResumeV2.0.jpg'
import Item5 from '../Item5';

function Item4(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">D.G. Coin</h2>
      <div >
        <div className="">
          <Item5 className="Item4"
            imageSource={Item4Image}
            imageAlt=""
            label="">
          </Item5>
        </div>
      </div>
    </section>
  );
};

export default Item4;
