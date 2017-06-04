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
import s from './Decor.css';
import decorUrl1 from './1.jpg';
import decorUrl2 from './2.jpg';
import decorUrl3 from './3.jpg';
import decorUrl4 from './4.jpg';
import decorUrl5 from './5.jpg';


class Decor extends React.Component {
  render() {
    return (
      <div className={s.decor}>
        <div className={s.decor_title}>Внутрішнє та зовнішнє оздоблення</div>
        <div className={s.decor_block}>
            <div className={s.decor_line}></div>
            <div className={s.decor_tab}>
              <ul className={s.decor_menu}>
                <li className={s.decor_list}>Види каменю:</li>
                <li className={s.decor_list}><a href="#">мармур</a></li>
                <li className={s.decor_list}><a href="#">граніт</a></li>
                <li className={s.decor_list}><a href="#">пісковик</a></li>
                <li className={s.decor_list}><a href="#">вапняк</a></li>
                <li className={s.decor_list}><a href="#">квацит</a></li>
                <li className={s.decor_list}><a href="#">онікс</a></li>
              </ul>
            </div>
            <div className={s.decor_imgBlock}>
              <div className={s.decor_imgBig}><img src={decorUrl1}/></div>
              <div className={s.decor_item}>
                <div className={s.decor_item_block}>
                  <div className={s.decor_img}><img src={decorUrl2}/></div>
                  <div className={s.decor_img}><img src={decorUrl3}/></div>
                </div>
              <div className={s.decor_item_block}>
                  <div className={s.decor_img}><img src={decorUrl4}/></div>
                  <div className={s.decor_img}><img src={decorUrl5}/></div>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(Decor);