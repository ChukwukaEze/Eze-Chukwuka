import React, {useState, Fragment, useViewport} from 'react'
import Profile from './Profile'
import ErrorProfile from './ErrorProfile'
import './styles/profile.css'
import './profile/styles/styles.css'
import NewProfile from './profile/newProfile'


function App() {

  return (
    <Fragment>
        <NewProfile/>
    </Fragment>
  );
}

export default App;
