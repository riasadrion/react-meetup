import './App.css'
import { Switch, Route } from 'react-router-dom'

import MainNavigation from './components/layout/MainNavigation'
import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups/>
        </Route>
        <Route path="/new-meetup">
          <NewMeetup/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
