import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList, postsList } from '../../constants';
import { PostCard } from '../post-card/PostCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="posts-container d-flex">
        {usersList &&
          usersList.map((user, key) => {
            return <UserCard user={user} key={key} />;
          })}
      </div>

      <div className="posts-container d-flex">
        {postsList &&
          postsList.map((post, key) => {
            const odd = key % 2 !== 0;

            return <PostCard post={post} key={key} hasImage={odd} />;
          })}
      </div>

      <PostCard post={postsList[0]} />
    </div>
  );
}

export default App;
