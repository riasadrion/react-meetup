import './App.css'
import { Switch, Route } from 'react-router-dom'

import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import MainLayout from './components/layouts/MainLayout'
function App() {
  return (
    <div className="App">
      <MainLayout>
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
      </MainLayout>
    </div>
  );
}

export default App;
