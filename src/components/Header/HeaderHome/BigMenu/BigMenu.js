
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BigMenu.css';
import cx from 'classnames';
import logoUrl from './logo.png';
import Link from './../../../Link';


class BigMenu extends React.Component {
  render() {
    return (
      <div className={s.bigmenu}>
        <div className={s.up}>
        <img src={logoUrl} className={s.logo}>
        </img>
        <div>
        <h1 className={s.title}> Майстерня </h1>
        <p className={s.phone}>+38 066 445 59 00</p>
        <p className={s.addres}>м. Мукачево, вул. Переяславська, 1</p>
          </div>
          </div>
        <ul className={s.list}>
          <li><Link to="/catalog" className={cx(s.item,"link")}>Каталог продукції</Link></li>
          <li><Link to="/about" className={cx(s.item,"link")}>Про нас</Link></li>
          <li><Link to="/our_works" className={cx(s.item,"link")}>Наші роботи</Link></li>
        </ul>
      </div>
    );
  }
}
export default withStyles(s)(BigMenu);
