import React, {useState, Fragment, useViewport} from 'react'
import Profile from './Profile'
import ErrorProfile from './ErrorProfile'
import './styles/profile.css'


function App() {

  return (
    <Fragment>
        <div className="profile-page">
            <Profile/>
        </div>
        <div className="error-profile">
            <ErrorProfile/>
        </div>
    </Fragment>
  );
}

export default App;
