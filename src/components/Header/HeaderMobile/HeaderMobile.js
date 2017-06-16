import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderMobile.css';
import Link from './../../Link';
import Phone from './../../Phone';
import logoUrl from './../HeaderHome/logo.png';
import cx from 'classnames';

class HeaderMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {menu:false};
  }
  showmenu(){
    this.setState({menu: !this.state.menu});
  }
  render() {
    return (
      <div className={s.mobile}>
        {
          (!this.state.menu) ?
            <div className={s.header}>
              <h1 className={s.title}>Майстерня</h1>
              <a className={cx(s.button,s.up_button)} onClick={this.showmenu.bind(this)}>&#9776;</a>
            </div>
            :
            <div className={s.menu}>
              <a className={cx(s.down_button,s.button)} onClick={this.showmenu.bind(this)}>&#10006;</a>
              <div className={s.vertical}>
              <div className={s.up}>
                <img src={logoUrl} className={s.logo}>
                </img>
                <div>
                  <h1 className={s.title}> Майстерня </h1>
                  <div></div>
                  <Phone className={s.phone}>+38 066 445 59 00</Phone>
                  <p className={s.addres}>м. Мукачево, вул. Переяславська, 1</p>
                </div>
              </div>
              <ul className={s.list} onClick={this.showmenu.bind(this)}>
                <li className={s.item}><Link to="/catalog" className={cx(s.item,"link")}>Каталог продукції</Link></li>
                <li className={s.item}><Link to="/about" className={cx(s.item,"link")}>Про нас</Link></li>
                <li className={s.item}><Link to="/works" className={cx(s.item,"link")}>Наші роботи</Link></li>
              </ul>
              <footer className={s.footer}>
                <div onClick={this.showmenu.bind(this)}><Link className={s.footer_button + " button"} to="/contact">Зв’язатись з нами</Link></div>
              </footer>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default withStyles(s)(HeaderMobile);

