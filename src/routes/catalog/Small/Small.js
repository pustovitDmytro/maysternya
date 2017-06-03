/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Small.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

const images1 = [{
  src: img1,
  alt: "first",
  link: "./catalog"
},{
  src: img2,
  alt: "Second",
  link: "./catalog"
},{
  src: img3,
  alt: "third",
  link: "./catalog"
}
];
const images2=[{
  src: img4,
  alt: "big",
  link: "./catalog"
}];
//function returns width of the i-th picture
let elemW = function(n,i, prob=0.05,kof=1.3){
  if (n==1) return 100;
  return 100*Math.pow(1.3,i)*((kof-1)*(1-prob))/(Math.pow(1.3,n)-1);
}

class Panel extends React.Component {
  render() {
    return (
      <div className={s.panel}>
        {
          this.props.source.map((elem,i,arr) =>
            <img src={elem.src} alt={elem.alt} style={{width:elemW(arr.length,i)+"%"}}/>
          )
        }
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h3 className={s.title}>{this.props.title}</h3>
        <div className="line"></div>
      </div>
    );
  }
}
class Small extends React.Component {
  render() {
    return (
      <div>
        <header
        <Panel source={images1}/>
      </div>
    );
  }
}


export default withStyles(s)(Small);
