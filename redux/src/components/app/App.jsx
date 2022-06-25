import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList } from '../../constants';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      {usersList &&
        usersList.map((user, key) => {
          return <UserCard user={user} ket={key} />;
        })}
    </div>
  );
}

export default App;
