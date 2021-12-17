import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import View from './View';
import Logout from './Logout';

import PrivateRoute from './PrivateRoute';

const App = () => {
	return (
		<Router>
			<AppContainer>
				<BloomHeader />
				<Header />
				<RouteContainer>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/login">
						<Redirect to="/" />
					</Route>
					<PrivateRoute exact path="/view" component={View} />
					<Route exact path="/logout">
						<Logout />
					</Route>
				</RouteContainer>
			</AppContainer>
		</Router>
	);
};

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'

const AppContainer = styled.div`
	height: 100%;
`;
const RouteContainer = styled.div`
	display: flex;
	height: 85%;
	align-items: center;
	flex-direction: column;
`;
