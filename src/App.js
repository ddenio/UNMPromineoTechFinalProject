import React, { Component } from 'react';
import { CharacterList } from './components/CharacterList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ItemList } from './components/ItemList';
import { WeaponList } from './components/WeaponList';
import { ShieldList } from './components/ShieldList';

// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Alert from 'react-bootstrap/Alert';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import { eldenApi } from '../src/components/EldenAPI';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from 'react-router-dom';
// import { CharacterList } from './components/CharacterList';
// import ItemList from './components/Items';


class App extends Component  {
  render() {
  return (
    <>
     <CharacterList />
    </>
  );
}
}

export default App;
