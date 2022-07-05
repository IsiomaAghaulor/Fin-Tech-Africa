import Routes from "./routes/routes";
import ErrorBoundry from "./error/ErrorBoundry";

function App() {
  return (
    <ErrorBoundry>
      <div className="App">
        <Routes />
      </div>
    </ErrorBoundry>
  );
}

export default App;
