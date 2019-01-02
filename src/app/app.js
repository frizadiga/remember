import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

// Components
import HomePage from '../home-page';
import MenuPage from '../menu-page';
import BottomBar from '../bottom-bar';

const App = () => {
  const [ loading, setLoading ] = useState(true);
  
  setTimeout(() => setLoading(false), 0);

  if (loading) return null;
  
  return (
    <React.Fragment>
      <main className="app">
        <Router>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/menu" component={MenuPage} exact/>
            </Switch>
            <BottomBar />
          </div>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
