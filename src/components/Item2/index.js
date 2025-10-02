import React from 'react';
import horrorScorer from '../../assets/images/horror_scorer_screengrab.jpg'
import movieJuice from '../../assets/images/movieJuice.jpg'
import STL_Happens from '../../assets/images/STL_Happens screenshot.jpg'
import weatherApp from '../../assets/images/weather resize.jpg'
import Item5 from '../Item5';


function Item2(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Glass</h2>
      <div className="work-rightside">
        <div className="btmw">
          <Item5
            linkurl="https://horror-scorer.herokuapp.com/" target="_blank"
            imageSource={horrorScorer}
            imageAlt=""
            label="MERN Demo (offline)">
          </Item5>
          <Item5
            linkurl="https://agile-harbor-58683.herokuapp.com/" target="_blank"
            imageSource={STL_Happens}
            imageAlt="STL_Happens screenshot"
            label="STL Happens (offline)">
          </Item5>
        </div>
        <div className="btmw">
          <Item5
            linkurl="https://zaphod1977.github.io/Weather-Dashboard/" target="_blank"
            imageSource={weatherApp}
            imageAlt="webpage screengrab"
            label="Weather App">
          </Item5>
          <Item5
            linkurl="https://amymgardiner.github.io/movieJuice/" target="_blank"
            imageSource={movieJuice}
            imageAlt="webpage screengrab"
            label="movieJuice">
          </Item5>
        </div>
      </div>
    </section>

  );
}
export default Item2;
