import "./App.css";
import Header from "./components/header";
import Mainpage from "./components/mainPage";
import SidePage from "./components/sidePage";

const App = () => {
  return (
    <>
      <div className="card">
        <section>
          <Header />
          <Mainpage />
          <SidePage/>
        </section>
      </div>
    </>
  );
};

export default App;
