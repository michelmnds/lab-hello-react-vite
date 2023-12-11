import "./App.css";
import logo from "./assets/logo.png";
import drop from "./assets/dorp.png";
import img1 from "./assets/img-1.png";
import img2 from "./assets/img-2.png";
import img3 from "./assets/img-3.png";
import img4 from "./assets/img-4.png";

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <div className="imgContainer">
          <img className="logo" src={logo} alt="" />
          <img className="drop" src={drop} alt="" />
        </div>

        <div className="headerTxt">
          <h1>
            Say hello to <br /> ReactJS
          </h1>

          <span>
            You will learn how to use <br />
            the most popular frontend library, <br /> and become a super Ninja
            developer.
          </span>

          <button>Awesome!</button>
        </div>
      </header>

      <main className="mainContainer">
        <div className="card">
          <img src={img1} alt="" />
          <span className="cardTitle">Declarative</span>
          <span className="cardDescription">
            React makes it painless to create interactive UIs.
          </span>
        </div>

        <div className="card">
          <img src={img2} alt="" />
          <span className="cardTitle">Components</span>
          <span className="cardDescription">
            Build encapsulated components that manage their state.
          </span>
        </div>

        <div className="card">
          <img src={img3} alt="" />
          <span className="cardTitle">Single-Way</span>
          <span className="cardDescription">
            A set of immutable values are passed to the component's.
          </span>
        </div>

        <div className="card">
          <img src={img4} alt="" />
          <span className="cardTitle">JSX</span>
          <span className="cardDescription">
            Statically-typed, designed to run on modern browsers.
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
