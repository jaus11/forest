import React from 'react';
import PropTypes from 'prop-types';
import './Tree.css';

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'a',
    };
  }

  render() {
    const { post } = this.props;
    const { user_id: userID, text, posted_at: postedAt } = post;
    return (
      <tr>
        <td>
          <p className="user_id">{userID}</p>
          <p className="tree_text">{text}</p>
          <p className="posted_at">{postedAt}</p>
        </td>
      </tr>
    );
  }
}

Tree.propTypes = {
  post: PropTypes.shape({
    user_id: PropTypes.string,
    text: PropTypes.string,
    posted_at: PropTypes.string,
  }),
};

Tree.defaultProps = {
  post: {
    user_id: 'loading',
    text: 'loading',
    posted_at: 'loading',
  },
};
