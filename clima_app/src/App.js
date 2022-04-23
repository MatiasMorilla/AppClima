import AppRouter from './AppRouter/AppRouter';
import WeatherContext, { WeatherProvider } from './Context/weatherContext';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AppRouter />
      </WeatherProvider>
    </div>
  );
}

export default App;
