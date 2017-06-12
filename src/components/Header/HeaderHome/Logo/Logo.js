import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Logo.css';
import logoUrl from '../logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className={s.headerlogo}>
        <img src={logoUrl} className={s.big_logo}>
        </img>
        <h1 className={s.headline}>Майстерня
        </h1>
      </div>
    );
  }
}

export default withStyles(s)(Logo);
