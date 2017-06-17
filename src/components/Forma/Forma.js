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

class MSG extends React.Component {
  render() {
    console.log(this.props.msg);
    return (
      <p>{this.props.msg}</p>
    );
  }
}

class Forma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      idea: '',
      msg: false
    }
    this.nameChange = this.nameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.ideaChange = this.ideaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  nameChange(event) {
    this.setState({name: event.target.value});
  }
  phoneChange(event) {
    this.setState({phone: event.target.value});
  }
  emailChange(event) {
    this.setState({email: event.target.value});
  }
  ideaChange(event) {
    this.setState({idea: event.target.value});
  }
  handleSubmit(event) {
    let formData  = new FormData();
    let data  = this.state
    for(var name in data) {
      formData.append(name, data[name]);
    }
    fetch(`http://maysternja.dataroot.co/callback/`, {
      method: 'POST',
      body: formData
    }).then(resp => resp.json())
      .then(payload => this.setState({msg: payload.msg}))
    .catch(error => this.setState({msg: `Error during request: ${error}`})
    )
    event.preventDefault();
  }
  render() {
    return (
      <div className={s.forma}>
        <h3 className={s.forma_h3}>Виготовимо наступний шедевр разом</h3>
        {(this.state.msg)?<div className={s.forma_p}><MSG msg={this.state.msg}/></div>:
        <p className={s.forma_p}>Зв'язатися з нами та дізнайтесь більше</p>}
         <form id='forma' className={s.connect} onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          name = 'name'
          className='connect_name'
          placeholder="Ім'я"
          min="3"
          required
          value={this.state.name} onChange={this.nameChange}
          />
         <input
          type='text'
          value={this.state.phone} onChange={this.phoneChange}
          name = 'phone'
          className='connect_tel'
          placeholder='Телефон'
          title="Введіть телефон у форматі 000-000-00-00"
          pattern="^\d{3}-\d{3}-\d{2}-\d{2}$"
          required
        />
         <input
          type='email'
          value={this.state.email} onChange={this.emailChange}
          name = 'email'
          className='connect_email'
          placeholder='E-mail'
          required
        />
         <textarea
          name = 'msg'
          value={this.state.idea} onChange={this.ideaChange}
          className='connect_text'
          placeholder='Ваша ідея або питання'
          required
        ></textarea>
        <input type="submit"
          className='connect_btn'
               value="Зв'язатись"
          >
        </input>
      </form>
      </div>
    );
  }
}
export default withStyles(s)(Forma);
