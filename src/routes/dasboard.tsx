import { Layout } from '@layouts/index';
import { Page } from '@pages/index';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function Dashboard(): React.ReactElement {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route
					path="/"
					element={<Layout.App />}
				>
					<Route
						path="/dashboard"
						element={<Page.Dashboard />}
					/>
					<Route
						path="/balance"
						element={<Page.Dashboard />}
					/>
					<Route
						path="/transactions"
						element={<Page.Dashboard />}
					/>
					<Route
						path="/support"
						element={<Page.Dashboard />}
					/>
					<Route
						path="/settings"
						element={<Page.Dashboard />}
					/>
				</Route>
			</Routes>
		</React.Suspense>
	);
}
