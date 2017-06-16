import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Panel.css';
import cx from 'classnames';

//function returns width of the i-th picture
let elemW = function(n,i, prob=0.05,kof=1.3){
  if (n==1) return 100;
  if (n>4) kof = 1.1;
  return 100*Math.pow(kof,i)*((kof-1)*(1-prob))/(Math.pow(kof,n)-1);
}

class Panel extends React.Component {
  render() {
    return (
      <div>
      <div className={s.panel}>
        {
          this.props.source.map((elem,i,arr) =>
            <img className={cx(s.Photo,"photo")} src={elem.img} alt={elem.alt} style={{width:elemW(arr.length,i)+"%"}}/>
          )
        }
      </div>
      </div>
    );
  }
}
export default withStyles(s)(Panel);
