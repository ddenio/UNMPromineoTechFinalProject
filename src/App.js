import React, { Component } from 'react';
import { CharacterList } from './components/CharacterList';
import Home from './components/Home';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
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
            <div className='btn btn-dark border border-light m-2'>
              {/* Links route between different views, will change the URL, routes will read the changed URL and change the view based upon said URL */}
              <Link to='/' className='text-decoration-none text-warning'>Home</Link>
            </div>
            <div className='btn btn-dark border border-light m-2'>
              <Link to='/characters' className='text-decoration-none text-warning'>Characters</Link>
            </div>
            <div className='btn btn-dark border border-light m-2'>
              <Link to='/about' className='text-decoration-none text-warning'>About</Link>
            </div>
          </div><br></br><br></br>

          {/* Routes will render different components based upon the URL we are currently viewing in the browser */}
          <Switch>
            {/* so if we are on posts url this is where we put what we want to render for posts */}
            <Route path='/characters'>
              {/* passing the data we created up top into our props for our Posts component */}
              <div className='container m-0'>
                  <h1 className='text-center text-danger m-4'>Your Team of 3</h1><br></br>
                <div className='card-columns'>

                  <CharacterList />

                </div>
              </div>
            </Route>
            <Route path='/about'>
                <About />
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

// function Home() {
//   return (
//     <div className='container'>
//       <div className='card'>
//         <div className='card-img-top' src="/images/skull-crossbones-solid.svg"></div>
//       </div>
//     </div>
//   )
// }

export default App;
