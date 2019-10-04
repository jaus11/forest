import React from "react";
import './Tree.css'

export default class Tree extends React.Component<Props> {
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
