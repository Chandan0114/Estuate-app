import Header1 from './Components/Header1';
import Tracksheet from './Components/Tracksheet';
import { Switch, Route } from 'react-router-dom';
import Dummy from './Components/Dummy';
// import Practise from './Components/Practise';

function App() {
  return (
    <div>
      <Header1 />
      <Switch>
        <Route exact path="/" component={Tracksheet} />
        <Route exact path="/dummy" component={Dummy} />
      </Switch>
      {/* <Tracksheet /> */}
    </div>
  );
}

export default App;
