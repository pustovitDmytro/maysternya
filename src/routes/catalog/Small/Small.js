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
import Panel from './../Panel';

class Filter extends React.Component {
  render() {
    return (
      <div className={s.Filter}>
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
        {
          (this.props.isFilter)?<Filter/>:<div/>
        }
        <div className={s.big}><Panel source={this.props.array}/></div>
        <div className={s.clear}></div>
      </div>
    );
  }
}
export default withStyles(s)(Small);
