import React from "react";
import Tree from "./Tree";

import './TimeLine.css'

export default class TimeLine extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    }
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9000/posts", true);
    let self = this;
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log(xhr.response.posts);
          xhr.response.posts.forEach( post => {
            self.setState({
              timeline: self.state.timeline.concat(<Tree post={post} key={post.id}/>)
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
    return (
      <div className="TimeLine">
        <table>
          <tbody>
            {this.state.timeline}
          </tbody>
        </table>
      </div>
    );
  }
}
