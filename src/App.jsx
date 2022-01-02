import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CounterContextProvider from './contexts/CounterContext';
import ExplorerView from './pages/ExplorerView';
import DashboardView from './pages/DashboardView';
import CpoHqForumView from './pages/CpoHqForumView';
import CpoHqPollsView from './pages/CpoHqPollsView';
import HeaderContentLayout from './layout/HeaderContentLayout';
import routes from './routes';

const pages = [
  { exact: true, path: routes.dashboard, component: DashboardView },
  { exact: true, path: routes.explorer, component: ExplorerView },
  { exact: true, path: routes.cpoHqForum, component: CpoHqForumView },
  { exact: true, path: routes.cpoHqPolls, component: CpoHqPollsView }
];

const App = () => (
  <div className="page-wrapper" style={{ backgroundColor: 'ghostwhite' }}>
    <CounterContextProvider>
      <HeaderContentLayout>
        <Switch>
          {pages.map(({ exact, path, component: Component }) => (
            <Route key={path} exact={exact} path={path} render={() => <Component />} />
          ))}
          <Redirect to={routes.dashboard} />
        </Switch>
      </HeaderContentLayout>
    </CounterContextProvider>
  </div>
);

export default App;
