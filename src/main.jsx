import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from '@/styles/globalStyle';
import Root from '@/routes/root';
import AllLocsPage from '@/pages/AllLocsPage';
// import PinnedLocsPage from '@/pages/PinnedLocsPage';
import ErrorPage from '@/pages/ErrorPage';
import { Provider } from 'react-redux';
import store from './store';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// errorElement: <ErrorPage />
	},
	{
		path: '/allLocations',
		element: <AllLocsPage />,
	},
	// {
	// 	path: '/pinnedLocations',
	// 	element: <PinnedLocsPage />,
	// },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
