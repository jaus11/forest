import React from "react";
import ReactDOM from 'react-dom';
import './Tree.css'

export default class Tree extends React.Component<Props> {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>
          <p className="user_id">{this.props.post.user_id}</p>
          <p className="tree_text">{this.props.post.text}</p>
          <p className="posted_at">{this.props.post.posted_at}</p>
        </td>
      </tr>
    );
  }
}
