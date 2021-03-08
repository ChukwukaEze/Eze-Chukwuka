import React, {useState, Fragment} from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import { Squeeze as Hamburger } from 'hamburger-react'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [Darkmode, setDarkmode] = useState(false)

  return (
    <div className={Darkmode ? 'dark-mode' : 'App'}>
            <div>
                <div className="mobile-header">
                    <nav>
                        <div><p className="mode-switch" onClick={() => setDarkmode(!Darkmode)}></p></div>
                        
                    </nav>
                    <Fragment>
                          <Header/>
                    </Fragment>
                </div>
                <div className="full-body">
                    <About/>
                    <Portfolio/>
                    
                </div>
                <Contact/>
                <Footer/>
            </div>
    </div>
  );
}

export default App;
