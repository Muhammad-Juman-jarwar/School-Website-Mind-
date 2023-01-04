import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;