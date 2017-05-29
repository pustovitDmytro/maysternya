/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './aboutus.css';
// import aboutUrl from './about.jpg';

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './aboutus.css';
import aboutUrl from './about.jpg';


class Aboutus extends React.Component {
  render() {
    return (
      <div className={s.aboutus}>
        <div className={s.aboutus_img}>
        	<img src={aboutUrl} width="440" height="535" alt="About us" />
        </div>
        <div className={s.aboutus_info}>
        <h4>Про нас</h4>
        <p>Майстерня – це місце, де ваша ідея реалізовується з натурального каменю. 
        Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
        </p><br/>
        <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація, художнє оформлення інтер'єрів,
        а також їх доставку та послуги монтування.
        </p><br/>
        <p>Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість 
        нашої роботи та дотримання термінів виконання.
        </p><br/>
        <ul className={s.aboutus_choise}>
            <li><a className={s.aboutus_choise_a} href='#'>Детальніше</a></li>
            <li><a className={s.aboutus_choise_a} href='#'>Переглянути роботи</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Aboutus);
