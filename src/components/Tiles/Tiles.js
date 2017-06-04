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
import s from './Tiles.css';
import tilesUrl from './1.jpg';



class Tiles extends React.Component {
  render() {
    return (
      <div className={s.tiles}>
        <h3 className={s.tiles_h3}>Краще один раз подивитись</h3>
        <p className={s.tiles_p}>Фото проектів з нашого instagram.</p>
         <div className={s.tiles_block}>
           <div className={s.tiles_item}>
              <img src={tilesUrl} width="320" height="320" alt="project" />
              <p className={s.tiles_item_description}>#onyx #m-selection</p>
           </div>
           <div className={s.tiles_item}>
            <img src={tilesUrl} width="320" height="320" alt="project" />
            <p className={s.tiles_item_description}>#3d #randomy</p>
         </div>
         <div className={s.tiles_item}>
            <img src={tilesUrl} width="320" height="320" alt="project" />
            <p className={s.tiles_item_description}>#onyx #m-selection</p>
         </div>
         <div className={s.tiles_item}>
            <img src={tilesUrl} width="320" height="320" alt="project" />
            <p className={s.tiles_item_description}>#onyx #m-selection</p>
         </div>
         <div className={s.tiles_item}>
            <img src={tilesUrl} width="320" height="320" alt="project" />
            <p className={s.tiles_item_description}>#onyx #m-selection</p>
         </div>
         <div className={s.tiles_item}>
            <img src={tilesUrl} width="320" height="320" alt="project" />
            <p className={s.tiles_item_description}>#onyx #m-selection</p>
         </div>
        </div>
        <button className={s.tiles_btn}>Всі проекти</button>
      </div>
    );
  }
}
export default withStyles(s)(Tiles);