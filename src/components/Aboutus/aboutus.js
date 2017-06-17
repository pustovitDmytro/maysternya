/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './aboutus.css';

class Aboutus extends React.Component {
  render() {
    if(!this.props.source.length) return (<div>Unable to load data</div>);
    return (
      <div className={s.aboutus}>
        <div className={s.aboutus_img}>
        	<img src={this.props.source.img} width="440" height="535" alt="About us" />
        </div>
        <div className={s.aboutus_info}>
        <h4>{this.props.source.title}</h4>
          {React.DOM.div({dangerouslySetInnerHTML: {__html: this.props.source.content}})}
        <ul className={s.aboutus_choise}>
            <li><a className={s.aboutus_choise_a} href='/about'>Детальніше</a></li>
            <li><a className={s.aboutus_choise_a} href='/works'>Переглянути роботи</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Aboutus);
