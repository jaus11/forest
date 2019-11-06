import React from 'react';
import './App.css';
import TimeLine from './TimeLine';
import PostPanel from './PostPanel';
import Tree from './Tree';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    };
    this.addtree = this.addtree.bind(this);
  }

  addtree(post) {
    const { timeline } = this.state;
    this.setState({
      timeline: [<Tree post={post} key={post.id} />].concat(timeline),
    });
  }

  render() {
    const { timeline } = this.state;
    return (
      <div className="App">
        <PostPanel addtree={this.addtree} />
        <TimeLine timeline={timeline} addtree={this.addtree} />
      </div>
    );
  }
}
