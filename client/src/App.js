import About from "./component/About/About";
import component from "./component/CreateComponent/component";
import edit from "./component/EditComponent/EditComponent"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/create' component={component} />
        <Route exact path='/edit' component={edit} />
       </Switch>
     </BrowserRouter>
  );
}

export default App;