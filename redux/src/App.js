import React, { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/app/HomePage';
import UsersList from './components/users-list/UsersList';
import PostPreview from './components/post-preview/PostPreview';
import PostsMenuList from './components/post-preview/PostsMenuList';
import { postsList, usersList } from './constants/index';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import UserPage from './components/user-page/UserPage';
import PostDetailsPage from './components/posts-details-page/PostDetailsPage';
import {PostsList} from './components/posts-list/PostsList';

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState('Jesse Hall');
  return (
    <div>
      <Header />
      <Footer />

      <UserContext.Provider value={user}>
        <Routes>
          {/* {links.map((link) => {
                return (
                  <Route key={link.path} path={link.path} element={link.element} />
                );
              })} */}
          <Route path="home" element={<HomePage />} />
          <Route path="users" element={<UsersList />} />
          <Route
            path="users/:userId"
            element={<UserPage users={usersList} />}
          />
          <Route path="posts" element={<PostsList posts={postsList} />} />
          <Route
            path="posts/:postId"
            element={<PostDetailsPage posts={postsList} />}
          />
          <Route
            path="post-preview"
            element={<PostPreview posts={postsList} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export const NotFoundPage = () => {
  return <div>Page not found!</div>;
};
