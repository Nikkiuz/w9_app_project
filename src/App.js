import "./App.css";

//allego il foglio bootstrap al progetto
import "bootstrap/dist/css/bootstrap.min.css";

// allego l'elemento Navbar per poi appenderlo nell'header
import CustomNavbar from "./components/CustomNavbar";

// importo il footer
import CustomFooter from "./components/CustomFooter";

// importo l'alert
import CustomWelcome from "./components/CustomWelcome";

//importo le card Fantasy
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <CustomWelcome />
        <AllTheBooks />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
