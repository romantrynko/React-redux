import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/app/HomePage';
import UsersList from './components/users-list/UsersList';
import {PostPreview} from './components/post-preview/PostPreview';
import { usersList } from './constants/index';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import UserPage from './components/user-page/UserPage';
import PostDetailsPage from './components/posts-details-page/PostDetailsPage';
import { PostsList } from './components/posts-list/PostsList';
import TodoPage from './components/todo-page/TodoPage';
import { useSelector, useDispatch } from 'react-redux';
import { NotFoundPage } from './components/not-found-page/NotFoundPage';
import { getPosts } from './actions/posts.action';

export default function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [posts, dispatch]);

  return (
    <div>
      <Header />
      <Footer />

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="users" element={<UsersList />} />
        <Route path="users/:userId" element={<UserPage />} />
        <Route path="posts" element={<PostsList/>} />
        <Route path="posts/:postId" element={<PostDetailsPage />} />
        <Route path="post-preview" element={<PostPreview/>} />
        <Route path="todo-page" element={<TodoPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}
