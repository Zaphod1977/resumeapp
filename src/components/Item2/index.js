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
import Item5 from '../Item5';

function Item2(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Glass</h2>
      <div className="work-rightside">
        <div className="btmw">
          <Item5
            imageSource={glass01}
            label="Paper Weight $25">
          </Item5>
          <Item5
            imageSource={glass02}
            label="Clear Cups $50 set">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass03}
            label="Abstract Shell $200">
          </Item5>
          <Item5
            imageSource={glass04}
            label="Wavy Bowl $75">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass05}
            label="Abstract Shell $200">
          </Item5>
          <Item5
            imageSource={glass06}
            label="Flowers $50-$75 each">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass07}
            label="Flower $75">
          </Item5>
          <Item5
            imageSource={glass08}
            label="Vase+Flower $350 set">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass09}
            label="Flowers $50 each">
          </Item5>
          <Item5
            imageSource={glass10}
            label="Wavy Bowl $150">
          </Item5>
          <Item5
            imageSource={glass11}
            label="Abstract Flower $100">
          </Item5>
          <Item5
            imageSource={glass12}
            label="Wavy Bowl $200">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass13}
            label="Clear Pumpkin $40">
          </Item5>
          <Item5
            imageSource={glass14}
            label="Pumpkin w/color $50">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            imageSource={glass15}
            label="Clear Pumpkin $40">
          </Item5>
          <Item5
            imageSource={glass16}
            label="Flowers in Vase (sold)">
          </Item5>
          <Item5
            imageSource={glass17}
            label="Pilgrim's Shell $100">
          </Item5>
        </div>
      </div>
    </section>

  );
}
export default Item2;
