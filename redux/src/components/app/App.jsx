import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList, postsList, allComments } from '../../constants';
import { PostCard } from '../post-card/PostCard';
import { Dropdown } from '../dropdown/Dropdown';
import Panel from '../panel/Panel';
import PostPreview from '../post-preview/PostPreview';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

const sortingOptions = ['Sort By Default', 'Sort By Author'];
export default class App extends Component {
  state = {
    posts: [...postsList],
    selectedOption: sortingOptions[0]
  };

  onSort = (selectedOption) => {
    const [option1, option2] = sortingOptions;

    switch (selectedOption) {
      case option1:
        this.onSortByDefaultClick();
        this.setState({ selectedOption: option1 });
        break;

      case option2:
        this.onSortByAuthorClick();
        this.setState({ selectedOption: option2 });
        break;

      default:
        break;
    }
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
    const { posts, selectedOption } = this.state;

    return (
      <div className="App">
        <Header />
        <Footer />

        <Panel label={'Posts'}>
          <div className="d-flex justify-content-center">
            <p>Sorting:</p>
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
          <Dropdown
            onSelect={this.onSort}
            selectedOption={selectedOption}
            options={sortingOptions}
          />
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

        <Panel label={'Post Preview'}>
          <PostPreview posts={posts} />
        </Panel>
      </div>
    );
  }
}
