import CommentsContainer from 'containers/CommentsContainer';
import MessagesContainer from 'containers/MessagesContainer';
import CommentContainer from 'containers/CommentContainer';
import Counter from 'components/Counter';

export default [
  {
    path: '/',
    exact: true,
    component: Counter
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsContainer
  },
  {
    path: '/comments/:id',
    exact: true,
    component: CommentContainer
  },
  {
    path: '/messages',
    exact: true,
    component: MessagesContainer
  }
]