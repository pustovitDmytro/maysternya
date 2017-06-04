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
import s from './map.css';

class Map extends React.Component {
  render() {
    return (
      <div className={s.map}>
        <div className={s.map_frame}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21170.38577018863!2d22.705925642928893!3d48.450807338517805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739ab8a21d3ae17%3A0x6f5344e1208971a3!2sPeremohy+St%2C+Mukacheve%2C+Zakarpats&#39;ka+oblast!5e0!3m2!1sen!2sua!4v1496578647431"></iframe>
        	
        </div>
        <div className={s.map_contact}>
        	<h4>Контакти</h4>
        	<p className={s.map_tel}>+38 066 445 59 00</p>
        	<p className={s.map_contact_adress}>м. Мукачево вул. Переяславська, 1</p>
   
        		<ul className={s.map_link}>
        			<li><a href='#'>Каталог продукції</a></li>
        			<li><a href='#'>Про нас</a></li>
        			<li><a href='#'>Наші роботи</a></li>
        		</ul>
 
        </div>
        
      </div>
    );
  }
}

export default withStyles(s)(Map);
