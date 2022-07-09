import Routes from "./routes/routes";
import ErrorBoundry from "./error/ErrorBoundry";
import { ToastProvider } from 'react-toast-notifications';


function App() {
  return (
    <ToastProvider>
    <ErrorBoundry>
      <div className="App">
        <Routes />
      </div>
    </ErrorBoundry>
    </ToastProvider>
  );
}

export default App;
