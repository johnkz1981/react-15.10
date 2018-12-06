import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Menu from 'components/Menu';
import Container from 'components/Container';
import List from 'components/List';
import Counter from 'components/Counter';
import CommentForm from 'components/CommentForm';
import CommentsContainer from 'containers/CommentsContainer';

import routes from './routes';
import store from './store';

const items = [
  {href: '/', title: 'Home'},
  {href: '/comments', title: 'Comments'},
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isModal: false,
      activePath: '/'
    }
  }

  handleOpen = (e) => {
    this.setState({isModal: !this.state.isModal});
  }

  handleComment = (comment) => {
    this.setState((prevState) => ({
      ...prevState,
      comments: prevState.comments.concat([comment]),
    }));
    console.log(comment);
  };

  handleActiveMenuItemChange = (e) => {

    this.setState({
      activePath: e.target.dataset.href
    });
    e.preventDefault();
  };

  render() {
    const {comments, isModal, activePath} = this.state;

    return (
        <div className="box">
          <Menu items={items} activePath={activePath} onChange={this.handleActiveMenuItemChange}/>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
          </Switch>
        </div>
    )
  }
}

ReactDom.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root')
);