import React from 'react';
import Header from './Header';
import Slidebar from './Slidebar';
import Recommendation from'./Recommendation';
import Searchpage from './Searchpage';
import'./App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router> 
         <Switch> 
          <Route path="/search/:searchTerm">
            <Header />
            <div className='app_page'>
            <Slidebar />
            <Searchpage />
            </div>
          </Route>
          <Route path="/">
          <Header />
            <div className='app_page'>
              <Slidebar />
              <Recommendation />
            </div>
          </Route>         
      </Switch>
      </Router>
    </div>
  );
}

export default App;
