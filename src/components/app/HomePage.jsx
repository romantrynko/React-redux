import React, { Component } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList, postsList, allComments } from '../../constants';
import { PostCard } from '../post-card/PostCard';
import { Dropdown } from '../dropdown/Dropdown';
import Panel from '../panel/Panel';
import { PostPreview } from '../post-preview/PostPreview';
import uniqid from 'uniqid';

import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.css';
import AddPostForm from '../post-form/AddPostForm';
import UsersList from '../users-list/UsersList';
import AddUserForm from '../user-form/AddUserForm';
import { dec, inc, reset } from '../../actions/counter.action';
import { connect } from 'react-redux';

const sortingOptions = ['Sort By Default', 'Sort By Author'];
class HomePage extends Component {
  state = {
    posts: [...postsList],
    selectedOption: sortingOptions[0]
    // users: usersList
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

  onAddPost = (newPost) => {
    this.setState((prevState, props) => {
      return {
        posts: [{ ...newPost, id: uniqid() }, ...prevState.posts]
      };
    });
  };

  onInc = () => {
    const { increment } = this.props;
    increment();
  };

  onDec = () => {
    const { decrement } = this.props;
    decrement();
  };

  render() {
    const { count, users } = this.props;
    const { posts, selectedOption } = this.state;

    return (
      <div className="App">
        <div className="d-flex justify-content-center">Count: {count}</div>
        <button className="btn btn-outline-danger m-2" onClick={this.onDec}>
          Dec -
        </button>
        <button className="btn btn-outline-success m-2" onClick={this.onInc}>
          Inc +
        </button>
        <button className="btn btn-light m-2" onClick={this.props.reset}>
          Reset
        </button>

        <Panel label={'Users-list'}>
          <AddUserForm />
          <UsersList users={users} routeUser />
        </Panel>

        <Panel label={'Posts'}>
          <div className="d-flex justify-content-center m-2">
            <div className="d-flex align-items-center m-2">
              <span>Sorting:</span>
            </div>
            <button
              className="btn btn-outline-secondary m-1"
              onClick={this.onSortByAuthorClick}
            >
              By author
            </button>
            <button
              className="btn btn-outline-secondary m-1"
              onClick={this.onSortByDefaultClick}
            >
              By default
            </button>
          </div>
          <hr />
          <Dropdown
            onSelect={this.onSort}
            selectedOption={selectedOption}
            options={sortingOptions}
          />
          <hr />

          {
            <div className="posts-container d-flex">
              <div className="w-100">
                <AddPostForm users={users} onAddPost={this.onAddPost} />
              </div>

              {posts &&
                posts.map((post, key) => {
                  const odd = key % 2 !== 0;
                  const user = users.find((item) => item.id === post.user_id);
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
            {users &&
              users.map((user, key) => {
                return <UserCard user={user} key={key} routeUser />;
              })}
          </div>
        </Panel>

        <Panel label={'Post Preview'}>
          <PostPreview posts={posts} />
        </Panel>

        <div style={{ height: '100px' }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    counterReducer: { count },
    userReducer: { users }
  } = state;

  return { count, users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(inc()),
    decrement: () => dispatch(dec()),
    reset: () => dispatch(reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
