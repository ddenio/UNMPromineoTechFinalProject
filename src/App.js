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
          <div className='border border-secondary rounded m-2 p-1' id='navback'>
            <div className='btn btn-dark btn-lg m-2 border border-secondary' id='navi1'>
              {/* Links route between different views, will change the URL, routes will read the changed URL and change the view based upon said URL */}
              <Link to='/' className='text-decoration-none text-warning font-weight-light'>Home</Link>
            </div>
            <div className='btn btn-dark btn-lg m-2 border border-secondary' id='navi2'>
              <Link to='/characters' className='text-decoration-none text-warning font-weight-light'>Characters</Link>
            </div>
            <div className='btn btn-dark btn-lg m-2 border border-secondary'  id='navi3'>
              <Link to='/about' className='text-decoration-none text-warning font-weight-light'>About</Link>
            </div>
          </div><br></br><br></br>

          {/* Routes will render different components based upon the URL we are currently viewing in the browser */}
          <Switch>
            {/* so if we are on posts url this is where we put what we want to render for posts */}
            <Route path='/characters'>
              {/* passing the data we created up top into our props for our Posts component */}
              <div className='container m-0'>
                  <h1 className='text-center text-warning m-4 p-2 bg-black rounded border border-secondary font-weight-light' id='head1'>Your Team of 3</h1><br></br>
                <div className='card-columns'>

                  <CharacterList />

                </div>
                <h6 className='text-light text-left'>&copy; Derin DeNio 2022</h6>
              </div>
            </Route>
            <Route path='/about'>
              <div className='container m-0'>
                  <h1 className='text-center text-warning m-4 p-2 bg-black rounded border border-secondary font-weight-light' id='head2'>About Elden Ring</h1><br></br>
                <About />
              </div>
            </Route>
            <Route path='/'>
            <div className='container m-0'>
                  <h1 className='text-center text-warning m-4 p-2 bg-black rounded border border-secondary font-weight-light' id='head3'>Home</h1><br></br>
                <Home />
              </div>
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
