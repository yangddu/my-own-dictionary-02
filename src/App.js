import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AddWord from './components/AddWord';
import ListWord from './components/ListWord';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/addword"><AddWord /></Route>
        <Route path="/listword"><ListWord /></Route>
        <Route><NotFound /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
