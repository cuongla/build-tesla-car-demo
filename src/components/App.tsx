import React, { Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Loader from './Loader';

const HomePage = React.lazy(() => import('../pages/Home'));
const DesignPage = React.lazy(() => import('../pages/Design'));


const App = () => {
  const isDarkMode = localStorage.getItem('darkMode');
  const body = document.body;

  useEffect(() => {
    isDarkMode === 'true'
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [isDarkMode, body]);

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/design" component={DesignPage} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App
