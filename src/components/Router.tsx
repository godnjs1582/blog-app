import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";
import PostDetail from "../pages/post/detail";
import PostNew from "../pages/post/new";
import PostEdit from "../pages/post/edit";
import Profile from "../pages/profile";
import Login from "../pages/login";
import SingUp from "../pages/signIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts" element={<Post />}></Route>
      <Route path="/posts/:id" element={<PostDetail />}></Route>
      <Route path="/posts/new" element={<PostNew />}></Route>
      <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SingUp />}></Route>
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  );
};

export default Router;
