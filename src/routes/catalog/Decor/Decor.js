import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Decor.css';
import Panel from './../Panel';

const Menu = [{name:"мармур", link:"/catalog?type=marble" ,type: "marble"},
  {name:"граніт", link:"/catalog?type=granite", type: "granite"},
  {name:"пісковик", link:"/catalog?type=sandstone", type: "sandstone"},
  {name:"вапняк", link:"/catalog?type=limestone", type: "limestone"},
  {name:"квацит", link:"/catalog?type=quartzite", type: "quartzite"},
  {name:"онікс", link:"/catalog?type=onyx", type: "onyx"} ];

class RichImg extends React.Component {
  render() {
    return (
      <img src={this.props.item.img} alt = {this.props.item.alt}/>
    );
  }
}

class All extends React.Component {
  render() {
    return (
      <div className={s.decor_imgBlock}>
        <div className={s.decor_imgBig}><RichImg item={this.props.array[0]}/></div>
        <div className={s.decor_item}>
          <div className={s.decor_item_block}>
            <div className={s.decor_img}><RichImg item={this.props.array[1]}/></div>
            <div className={s.decor_img}><RichImg item={this.props.array[2]}/></div>
          </div>
          <div className={s.decor_item_block}>
            <div className={s.decor_img}><RichImg item={this.props.array[3]}/></div>
            <div className={s.decor_img}><RichImg item={this.props.array[4]}/></div>
          </div>
        </div>
      </div>
    );
  }
}
let data = [];

class Decor extends React.Component {
  constructor(props) {
    super(props);
    let link = this.props.context.query.type;
    let current = Menu.findIndex(el=>el.type==link);
    console.log(link,current);
    if(current>=0) this.state = {current: current}; else this.state = {current: -1};
  }
  async select(i){
    await fetch(`http://maysternja.dataroot.co/catalog/decoration?type=${Menu[i].type}`).then(resp => {return resp.json()})
      .then(d => data=d)
      .catch(e => console.log("Error during request",e));
    this.setState({current: i});
  }

  componentWillMount() {
    let link = this.props.context.query.type;
    let current = Menu.findIndex(el=>el.type==link);
    console.log(link,current);
    if(current>=0) this.select(current);
  }
  render() {
    return (
      <div className={s.decor}>
        <div className={s.decor_title}>Внутрішнє та зовнішнє оздоблення</div>
        <div className={s.decor_block}>
            <div className={s.decor_line}></div>
            <div className={s.decor_tab}>
              <ul className={s.decor_menu}>
                <li className={s.decor_list}>Види каменю:</li>
                {
                  Menu.map((elem,i,arr) =>
                <li className={(i==this.state.current)?s.active:s.decor_list} onClick={this.select.bind(this,i)}><a href={elem.link}>{elem.name}</a></li>)
                }
              </ul>
            </div>
          {(this.state.current==-1)?
            <All array={this.props.array}></All>:<Panel source={data}/>
          }
        </div>
      </div>
    );
  }
}
export default withStyles(s)(Decor);
