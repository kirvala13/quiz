import {Route,BrowserRouter as Router, Switch} from 'react-router-dom' ;
import Quiz from './quize/quize';
import Home from "./home/Home"
import History from './history/history';
function Main(){
  return(
      <>
       <Router>
           <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/quiz"   component={Quiz}/>
            <Route path="/history"   component={History}/>
           </Switch>
       </Router>
      </>
  )
}

export default Main