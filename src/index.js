import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
import './index.css';
import App from './components/App';
// import {Route} from 'react-router-dom';
// import login from './components/Login';
// import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>

    <App/>
    {/* <Router>
      {
          if(<Route path='/' component={App}/>){

          }else if(<Route path='/login' component={login}/>)
      }
       
       </Route>
       <Route path='/register' component={Register}></Route>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

