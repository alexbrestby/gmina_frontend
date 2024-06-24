import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../components/App/App';
import classes from './routes.module.css';

const Home = lazy(() => import('../pages/Home'));
const Archive = lazy(() => import('../pages/Archive'));
const Blog = lazy(() => import('../pages/Blog'));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div className={classes.fallback}>Loading...</div>}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archive />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;

