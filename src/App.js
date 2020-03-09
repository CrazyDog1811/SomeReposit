import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile state={props.State.profilePage}/>} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.State.dialogsPage}/>} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
