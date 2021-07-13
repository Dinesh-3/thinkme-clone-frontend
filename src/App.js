import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/home';
import NotFound from './Components/NotFound/NotFound';
import Page from './Components/Page/Page';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/page/:id' component={Page} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
