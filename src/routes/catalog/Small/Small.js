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
import cx from 'classnames';

//function returns width of the i-th picture
let elemW = function(n,i, prob=0.05,kof=1.3){
  if (n==1) return 100;
  return 100*Math.pow(1.3,i)*((kof-1)*(1-prob))/(Math.pow(1.3,n)-1);
}

class Panel extends React.Component {
  render() {
    return (
      <div>
      <div className={s.panel}>
        {
          this.props.source.map((elem,i,arr) =>
            <img src={elem.src} alt={elem.alt} style={{width:elemW(arr.length,i)+"%"}}/>
          )
        }
      </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className={s.header}>
        <h3 className={s.title}>{this.props.children}</h3>
        <hr className={cx(s.line,s.big)}></hr>
      </div>
    );
  }
}
class Small extends React.Component {
  render() {
    return (
      <div>
        <Header>{this.props.children}</Header>
        <div className={s.big}><Panel source={this.props.array}/></div>
        <div className={s.clear}></div>
      </div>
    );
  }
}


export default withStyles(s)(Small);
