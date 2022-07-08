import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Switch
} from 'react-router-dom';
import HomePage from './components/app/HomePage';
import UsersList from './components/users-list/UsersList';
import PostPreview from './components/post-preview/PostPreview';
import PostsMenuList from './components/post-preview/PostsMenuList';
import { links, postsList, usersList } from './constants/index';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import UserPage from './components/user-page/UserPage';

export default function App() {
  return (
    //   <Router>
    <div>
      <Header />
      <Footer />
      <Routes>
        {/* {links.map((link) => {
                return (
                  <Route key={link.path} path={link.path} element={link.element} />
                );
              })} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserPage users={usersList} />} />
        <Route path="/posts" element={<PostsMenuList posts={postsList} />} />
        <Route
          path="/post-preview"
          element={<PostPreview posts={postsList} />}
        />
      </Routes>
    </div>
  );
}
