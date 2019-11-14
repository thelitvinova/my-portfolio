import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './welcome'
import projects from './projects';




class App extends React.Component {
  render() {
    return(
      <div>
      
          <Router>
            <div>
              <Route path='/' component={Welcome} exact/> 
              <Route path='/projects' component={projects}/>
            </div>
          </Router>

      </div>
    );
  }
}

export default App;
