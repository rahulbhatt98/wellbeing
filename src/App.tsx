import MainPage from './pages/Main';
import ResultPage from './pages/Result';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/result/:industryValue">
            <ResultPage/>
          </Route>
          <Route exact path="/">
            <MainPage/>
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
