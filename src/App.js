import React, { Suspense, lazy } from 'react';
// import TimeTable from './components/timetable'
// import Quran from './components/quran'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TimeTable = lazy(() => import('./components/timetable'));
const NewTimeTable = lazy(() => import('./components/newTimeTable'));
const Quran = lazy(() => import('./components/newQuran'));
const Todays = lazy(() => import('./components/newTodays'));
const Dua = lazy(() => import('./components/newDua'));

function App() {
  return (
    <div >
      <BrowserRouter>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black' }}>
          <div>Loading...</div>
        </div>
        }>
          <Switch>
            <Route path='/' exact component={NewTimeTable} />
            <Route path='/quran' component={Quran} />
            <Route path='/todays/:date' component={Todays} />
            <Route path='/dua' component={Dua} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
