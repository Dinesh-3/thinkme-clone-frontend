import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home/home';
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />

					<Redirect to='/'></Redirect>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
