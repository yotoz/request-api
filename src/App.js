import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/details/monkey">
                Monkey Details
              </Link>
            </li>
            <li>
              <Link to="/details/beer">Beer Details</Link>
            </li>
            <li>
              <Link to="/details/bee">Bee Details</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details/:target">
            <Details />
          </Route>
          <Route path="/details">
            <Redirect to="/details/nothing" />
          </Route>
          <Route>
            <div>아시방 선택하쇼</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
