import React from "react";
require('dotenv').config();

class ThumbIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let imgRender = 'https://image.thum.io/get/auth/' + process.env.THUMBIOKEY + '/https://' + this.props.value

      return (
        <img src={imgRender} alt='thum.io'></img>
      );
    
  }
}

export default ThumbIO;
