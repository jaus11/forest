import React from 'react';
import Tree from './Tree';

import './TimeLine.css';

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9000/posts', true);
    const self = this;
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log(xhr.response.posts);
          xhr.response.posts.forEach((post) => {
            self.setState({
              timeline: self.state.timeline.concat(<Tree post={post} key={post.id} />),
            });
          });
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = () => {
      console.error(xhr.statusText);
    };
    xhr.responseType = 'json';
    xhr.send(null);
  }

  render() {
    const { timeline } = this.state;
    return (
      <div className="TimeLine">
        <table>
          <tbody>
            {timeline}
          </tbody>
        </table>
      </div>
    );
  }
}
