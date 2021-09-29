import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/common/Header';
import AddWord from './components/AddWord';
import ListWord from './components/ListWord';
import NotFound from './components/NotFound';
import Footer from './components/common/Footer';


function App() {

  const [word, setWord] = useState([
    {
        id: 0,
        word: 'ㅎ1ㅎ1',
        description: '히히를 변형한 단어',
        example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1'
    },
    {
        id: 1,
        word: 'ㅎ2ㅎ2',
        description: '하이하이를 표현한 단어',
        example: '야 반갑다. ㅎ2ㅎ2'
    },
]);
console.log(word);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/addword"><AddWord setWord={setWord}/></Route>
        <Route path="/listword"><ListWord word={word}/></Route>
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
