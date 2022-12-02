// @ts-nocheck
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import { Provider, ErrorBoundary } from '@rollbar/react'; // <-- Provider imports 'rollbar' for us

const rollbarConfig = {
	accessToken: 'POST_CLIENT_ITEM_ACCESS_TOKEN',
	environment: 'production',
	server: {
		root: "http://example.com/",
		branch: "main"
	},
	code_version: "0.13.7",
	person: {
		id: 117,
		email: "chief@unsc.gov",
		username: "john-halo"
	}
}

 function App ()
{
	window.matchMedia = null;
	const darkMode = useDarkMode( true );

	return (

		<Provider config={ rollbarConfig }>
			<ErrorBoundary>
				<AppContext.Provider value={ { darkMode } }>

					<ThemeProvider theme={ darkMode.value ? darkTheme : lightTheme }>
						<GlobalStyles />
						<div className="App">
							<BrowserRouter>
								<MainApp />
							</BrowserRouter>
						</div>
					</ThemeProvider>

				</AppContext.Provider>
				</ErrorBoundary>
			</Provider>
				)
	}

export default App
;
