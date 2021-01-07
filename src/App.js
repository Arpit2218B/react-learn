import logo from './logo.svg';
import './App.css';
import Pagea from './contextApp/Pagea';
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import projects from './constants';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            {
              projects.map(data => (
                <Route path={data.link} component={data.component} />
              ))
            }
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;