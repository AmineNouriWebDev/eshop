import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/Header";
import Navbar from "./header/Navbar";
import Carrousel from "./header/Carousel";





function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <Navbar />
      </div>
      <section>
      <Carrousel />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
