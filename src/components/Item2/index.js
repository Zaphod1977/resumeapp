import React from 'react';
import glass01 from '../../assets/images/glass01.JPG';
import glass02 from '../../assets/images/glass02.JPG';
import glass03 from '../../assets/images/glass03.JPG';
import glass04 from '../../assets/images/glass04.JPG';
import glass05 from '../../assets/images/glass05.JPG';
import glass06 from '../../assets/images/glass06.JPG';
import glass07 from '../../assets/images/glass07.JPG';
import glass08 from '../../assets/images/glass08.JPG';
import glass09 from '../../assets/images/glass09.JPG';
import glass10 from '../../assets/images/glass10.JPG';
import glass11 from '../../assets/images/glass11.JPG';
import glass12 from '../../assets/images/glass12.JPG';
import glass13 from '../../assets/images/glass13.JPG';
import glass14 from '../../assets/images/glass14.JPG';
import glass15 from '../../assets/images/glass15.JPG';
import glass16 from '../../assets/images/glass16.JPEG';
import glass17 from '../../assets/images/glass17.JPG';
import ImageStyler from '../ImageStyler';

function Item2(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Glass</h2>
      <div className="work-rightside">
        <div className="btmw">
          <ImageStyler
            imageSource={glass01}
            label="Paper Weight $35">
          </ImageStyler>
          <ImageStyler
            imageSource={glass02}
            label="Clear Cups $50 set">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass03}
            label="Abstract Shell $200">
          </ImageStyler>
          <ImageStyler
            imageSource={glass04}
            label="Wavy Bowl $75">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass05}
            label="Abstract Shell $200">
          </ImageStyler>
          <ImageStyler
            imageSource={glass06}
            label="Flowers $50-$75 each">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass07}
            label="Flower $75">
          </ImageStyler>
          <ImageStyler
            imageSource={glass08}
            label="Vase+Flower $350 set">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass09}
            label="Flowers $50 each">
          </ImageStyler>
          <ImageStyler
            imageSource={glass10}
            label="Wavy Bowl $150">
          </ImageStyler>
          <ImageStyler
            imageSource={glass11}
            label="Abstract Flower $100">
          </ImageStyler>
          <ImageStyler
            imageSource={glass12}
            label="Wavy Bowl $200">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass13}
            label="Clear Pumpkin $40">
          </ImageStyler>
          <ImageStyler
            imageSource={glass14}
            label="Pumpkin w/color $50">
          </ImageStyler>
        </div>
        <div className="btmw">
          <ImageStyler
            imageSource={glass15}
            label="Clear Pumpkin $40">
          </ImageStyler>
          <ImageStyler
            imageSource={glass16}
            label="Flowers in Vase (sold)">
          </ImageStyler>
          <ImageStyler
            imageSource={glass17}
            label="Pilgrim's Shell $100">
          </ImageStyler>
        </div>
      </div>
    </section>

  );
}
export default Item2;
