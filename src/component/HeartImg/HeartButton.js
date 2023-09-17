import React, { Component } from 'react'
import HeartImg from "./icons8R.png"
import EmptyHeartImg from "./icons8B.png"


// const HeartButton = ({Like, onClck}) => {

//   return (
//     <div>
//       <img className="likeIcon" src={Like?HeartImg:EmptyHeartImg} onClick={onClck} />
//     </div>
//   );
// };

// export default HeartButton


class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: localStorage.getItem('isChecked') === 'true',
      notice: '좋아요 3개',
    };
  }

  onClick = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }), () => {
      localStorage.setItem('isChecked', this.state.isChecked);
    });
  };

  render() {
    return (
      <div className="likeIcon" onClick={this.onClick}>
        {this.state.isChecked ? (
          <img src={HeartImg} alt="Heart" />
        ) : (
          <img src={EmptyHeartImg} alt="Empty Heart" />
        )}
        <h3>{this.state.notice}</h3>
      </div>
    );
  }
}

export default HeartButton;