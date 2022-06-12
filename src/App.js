import React, { Component } from 'react';
import { CharacterList } from './components/CharacterList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <div className='btn btn-dark m-1 border-light'>
              {/* Links route between different views, will change the URL, routes will read the changed URL and change the view based upon said URL */}
              <Link to='/' className='text-decoration-none text-white'>Home</Link>
            </div>
            <div className='btn btn-dark m-1 border-light'>
              <Link to='/friends' className='text-decoration-none text-white'>Friends</Link>
            </div>
            <div className='btn btn-dark m-1 border-light'>
              <Link to='/characters' className='text-decoration-none text-white'>Characters</Link>
            </div>
          </div>

          {/* Routes will render different components based upon the URL we are currently viewing in the browser */}
          <Switch>
            {/* so if we are on posts url this is where we put what we want to render for posts */}
            <Route path='/characters'>
              {/* passing the data we created up top into our props for our Posts component */}
              <div className='container m-0 d-flex justify-content-start'>
                <div className='card-columns'>

                  <CharacterList />

                </div>
              </div>
            </Route>
            <Route path='/friends'>

            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      // <div className='container m-0 d-flex justify-content-start'>
      //   <div className='card-columns'>

      //     <CharacterList />

      //   </div>
      // </div>
    );
  }
}

function Home() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-img-top' src="/images/skull-crossbones-solid.svg"></div>
      </div>
    </div>
  )
}

export default App;
