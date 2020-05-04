import React, { Suspense, lazy } from 'react';
// import TimeTable from './components/timetable'
// import Quran from './components/quran'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TimeTable = lazy(() => import('./components/timetable'));
const Quran = lazy(() => import('./components/quran'));
function App() {
  return (
    <div >
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' exact component={TimeTable} />
            <Route path='/quran' component={Quran} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
