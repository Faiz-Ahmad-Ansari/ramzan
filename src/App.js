import React, { Suspense, lazy } from 'react';
// import TimeTable from './components/timetable'
// import Quran from './components/quran'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TimeTable = lazy(() => import('./components/timetable'));
const Quran = lazy(() => import('./components/quran'));
const Todays = lazy(() => import('./components/todays'));

function App() {
  return (
    <div >
      <BrowserRouter>
        <Suspense fallback={ <div  className=" d-flex loader  align-items-center justify-content-center">
               <div class="dizzy-gillespie"></div>
            </div>
            }>
          <Switch>
            <Route path='/' exact component={TimeTable} />
            <Route path='/quran' component={Quran} />
            <Route path='/todays' component={Todays} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
