import "./App.css";
import Header from "./components/Header";
import Currently from "./components/Currently";
import TabBar from "./components/TabBar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Currently />
          <Profile />
        </div>
        <TabBar />
      </div>
    </>
  );
}

export default App;
