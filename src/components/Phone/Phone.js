import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Phone.css';

class Phone extends React.Component {
  render() {
    return (
      <a className={s.phone} href={"tel:"+this.props.children}>{this.props.children}</a>
    );
  }
}

export default withStyles(s)(Phone);
