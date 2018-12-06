import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import CommentsList from 'components/CommentsList';
import {load} from 'actions/comments';

class CommentsContainer extends Component {

  handleScroll = () => {
    const {loadComments} = this.props;

    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight  && !this.props.loading) {
      loadComments();
    }
  };

  componentDidMount() {
    const {loadComments} = this.props;

    loadComments();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {loading, comments} = this.props;

    return (
        <Fragment>
          <CommentsList comments={comments}/>
          {loading ? 'loading' : ''}
        </Fragment>
    )
  }
}

function mapStateToProps(state, props) {

  return {
    ...props,
    comments: state.comments.entities,
    loading: state.comments.loading
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadComments: () => dispatch(load())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);