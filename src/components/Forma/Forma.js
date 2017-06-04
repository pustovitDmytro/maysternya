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
import s from './forma.css';


class Forma extends React.Component {
  render() {
    return (
      <div className={s.forma}>
        <h3 className={s.forma_h3}>Виготовимо наступний шедевр разом</h3>
        <p className={s.forma_p}>Зв'язатися з нами та дізнайтесь більше</p>
         <form id='forma' metod = 'POST' className={s.connect}>
        <input
          type='text'
          className='connect_name'
          placeholder="Ім'я" 
          min="3"
          required     
          />
         <input
          type='text'
          className='connect_tel'
          placeholder='Телефон'
          title="Введіть телефон у форматі 000-000-00-00"
          pattern="^\d{3}-\d{3}-\d{2}-\d{2}$"
          required
        />
         <input
          type='email'
          className='connect_email'
          placeholder='E-mail'
          required
        />        
         <textarea
          className='connect_text'
          placeholder='Ваша ідея або питання'
        ></textarea>
        <button
          className='connect_btn'
          >
          Зв'язатись
        </button>
      </form>
      </div>
    );
  }
}
export default withStyles(s)(Forma);