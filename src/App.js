import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import DetailPage from "./Pages/Detail/DetailPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Watchlist from "./Pages/Watchlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/watch-list" component={Watchlist} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
