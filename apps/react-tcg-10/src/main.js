import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { AuthContextProvider } from './store/auth-context';
ReactDOM.render(
    <StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </StrictMode>,
    document.getElementById('app')
);
