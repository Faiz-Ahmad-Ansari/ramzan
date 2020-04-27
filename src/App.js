import React from 'react';
import TimeTable from './components/timetable'
import Quran from './components/quran'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
       <Switch>
         <Route path='/' exact component = {TimeTable} />
         <Route path='/quran'  component = {Quran} />
          {/* <TimeTable />
          <Quran /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
