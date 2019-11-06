import React from 'react';
import PropTypes from 'prop-types';

import './TimeLine.css';

export default class TimeLine extends React.Component {
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9000/posts', true);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log(xhr.response.posts);
          xhr.response.posts.forEach((post) => {
            const { addtree } = this.props;
            addtree(post);
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
    const { timeline } = this.props;
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

TimeLine.propTypes = {
  timeline: PropTypes.arrayOf,
  addtree: PropTypes.func,
};

TimeLine.defaultProps = {
  timeline: [],
  addtree: () => {},
};
