import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList, postsList, allComments } from '../../constants';
import { PostCard } from '../post-card/PostCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Panel from '../panel/Panel';

export default class App extends Component {
  state = {
    posts: [...postsList]
  };

  onSortByDefaultClick = () => {
    this.setState({ posts: [...postsList] });
  };

  onSortByAuthorClick = () => {
    const res = [...this.state.posts];

    const sorted = res.sort((a, b) => {
      const authorA = usersList.find((item) => item.id === a.user_id);
      const authorB = usersList.find((item) => item.id === b.user_id);

      if (authorA.first_name > authorB.first_name) return 1;
      if (authorA.first_name < authorB.first_name) return -1;
      return 0;
    });

    this.setState({ posts: sorted });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Header />
        <Footer />

        <Panel label={'Posts'}>
          <div className="d-flex justify-content-center">
            <p>
            Sorting:
            </p>
            <button
              className="btn btn-primary m-1"
              onClick={this.onSortByAuthorClick}
            >
              By author
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={this.onSortByDefaultClick}
            >
              By default
            </button>
          </div>
          {
            <div className="posts-container d-flex">
              {posts &&
                posts.map((post, key) => {
                  const odd = key % 2 !== 0;
                  const user = usersList.find(
                    (item) => item.id === post.user_id
                  );
                  const author = user
                    ? `${user.first_name} ${user.last_name}`
                    : '';

                  const comments = allComments.filter(
                    (item) => item.post_id === post.id
                  );

                  return (
                    <PostCard
                      post={post}
                      key={key}
                      hasImage={odd}
                      author={author}
                      comments={comments}
                    />
                  );
                })}
            </div>
          }
        </Panel>

        <Panel label={'Users'}>
          <div className="posts-container d-flex">
            {usersList &&
              usersList.map((user, key) => {
                return <UserCard user={user} key={key} />;
              })}
          </div>
        </Panel>
      </div>
    );
  }
}
