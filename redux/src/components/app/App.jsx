import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList, postsList, allComments } from '../../constants';
import { PostCard } from '../post-card/PostCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />

      <div className="posts-container d-flex">
        {postsList &&
          postsList.map((post, key) => {
            const odd = key % 2 !== 0;
            const user = usersList.find((item) => item.id === post.user_id);
            const author = `${user.first_name} ${user.last_name}`;

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

      <div className="posts-container d-flex">
        {usersList &&
          usersList.map((user, key) => {
            return <UserCard user={user} key={key} />;
          })}
      </div>
    </div>
  );
}

export default App;
