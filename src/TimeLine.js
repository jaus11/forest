import React from "react";
import Tree from "./Tree";
import ReactDOM from 'react-dom';

export default class TimeLine extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    }
  }

  componentWillMount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9000/posts", true);
    let self = this;
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log(xhr.response.posts);
          xhr.response.posts.forEach( post => {
            self.setState({
              timeline: self.state.timeline.concat(<Tree text={post.text}></Tree>)
            });
          });
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    };
    xhr.responseType = "json";
    xhr.send(null);
  }

  render() {
    return this.state.timeline;
  }
}
