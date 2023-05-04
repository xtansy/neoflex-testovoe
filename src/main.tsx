import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./scss/normalize.scss";
import "./scss/variables.scss";
import "./scss/style.scss";

import { store } from '@redux/instance';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
)
