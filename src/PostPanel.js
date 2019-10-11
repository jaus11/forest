import React from 'react';
import axios from 'axios';

import './PostPanel.css';

export default class PostPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    try {
      const { text } = this.state;
      const result = await axios.post('http://localhost:9000/posts/create', {
        user_id: '11111111-1111-1111-1111-111111111111',
        text,
      });
      // console.log(result);
      if (result.status === 200) {
        this.setState({ text: '' });
      }
    } catch (error) {
      console.log('error!!');
    }
  }

  onChange(evt) {
    this.setState({ text: evt.target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="PostPanel">
        <textarea onChange={this.onChange} value={text} />
        <button onClick={this.onClick} type="submit">tree</button>
      </div>
    );
  }
}
