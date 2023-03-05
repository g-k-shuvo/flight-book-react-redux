import "./App.css";
import FlightBook from "./components/FlightBook";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />;
      <FlightBook />
    </Provider>
  );
}

export default App;
