import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/home';
import NotFound from './Components/NotFound/NotFound';
import Page from './Components/Page/Page';
import Creation from './Components/Creation/creation';
import PublicPage from './Components/PublicPage/PublicPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/create' component={Creation} />
					<Route exact path='/page' render={(props) => <PublicPage {...props} />} />
					<Route exact path='/page/:id' render={(props) => <Page {...props} />} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
