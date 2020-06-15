import React from "react";

class ThumbIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let imgRender = 'https://image.thum.io/get/auth/9495-test/https://' + this.props.value

      return (
        <img src={imgRender} alt='thum.io'></img>
      );
    
  }
}

export default ThumbIO;
