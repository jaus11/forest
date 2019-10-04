import React from "react";
import axios from "axios";

import './PostPanel.css';

export default class PostPanel extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      text: 'demo',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick = async () => {
    try {
      const result = await axios.post("http://localhost:9000/posts/create", {
        user_id: '11111111-1111-1111-1111-111111111111',
        text: this.state.text,
      });
      console.log(result);
    } catch (error) {
      console.log("error!!");
    }
  }

  onChange(evt) {
    this.setState({text: evt.target.value});
  }

  render() {
    return (
      <div className='PostPanel'>
        <textarea rows="7" onChange={this.onChange} value={this.state.text}/>
        <button onClick={this.onClick}>tree</button>
      </div>
    );
  }
}
