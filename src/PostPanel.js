import React from 'react';
import PropTypes from 'prop-types';

import './PostPanel.css';

export default class PostPanel extends React.Component {
  constructor(props) {
    super(props);
    const websocket = new WebSocket('ws://localhost:9000/socket');
    websocket.onopen = () => {
      console.log('connected');
    };
    websocket.onmessage = (me) => {
      const msg = JSON.parse(me.data);

      // console.log(msg);
      props.addtree(msg);
    };
    this.state = {
      text: '',
      ws: websocket,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    try {
      const { text, ws } = this.state;
      // console.log(`send ${text}`);
      const msg = JSON.stringify(
        {
          user_id:
              '11111111-1111-1111-1111-111111111111',
          text,
        },
      );
      ws.send(msg);
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

PostPanel.propTypes = {
  addtree: PropTypes.func,
};

PostPanel.defaultProps = {
  addtree: () => {},
};
