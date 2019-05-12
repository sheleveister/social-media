import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import User from '../User';

const Layout = () => (
  <BrowserRouter>
    <User />
  </BrowserRouter>
);

export default Layout;