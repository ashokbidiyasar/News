import "./App.css";

import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState ,useEffect} from "react";
import News from "./component/News";

function App(props) {
  let page=20;
  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log("API Key:", process.env.REACT_APP_NEWS_API);

  const [progress, setProgress] = useState(0);
  const [query ,setquery] = useState('');
  
  const ClearQueryOnNavigate = ({ setquery }) => {
    const location = useLocation();

    useEffect(() => {
      // Clear search query when route changes
      setquery("");
    }, [location.pathname, setquery]);

    return null;
  };

  return (
    <Router>
      <ClearQueryOnNavigate setquery={setquery} />
      <NavBar onSearchSubmit={setquery} />
      <div>
        <LoadingBar color="#f11946" progress={progress} height={3} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="home"
              country="us"
              pagesize={page}
              category="general"
              query={query}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              country="us"
              pagesize={page}
              category="business"
              query={query}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              country="us"
              pagesize={page}
              category="entertainment"
              query={query}
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="us"
              pagesize={page}
              category="general"
              query={query}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              country="us"
              pagesize={page}
              category="science"
              query={query}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              country="us"
              pagesize={page}
              category="sports"
              query={query}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              country="us"
              pagesize={page}
              category="technology"
              query={query}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              country="us"
              pagesize={page}
              category="health"
              query={query}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
