import "./App.css";

import books from "./data/fantasy.json";

//allego il foglio bootstrap al progetto
import "bootstrap/dist/css/bootstrap.min.css";

// allego l'elemento Navbar per poi appenderlo nell'header
import CustomNavbar from "./components/CustomNavbar";

// importo il footer
import CustomFooter from "./components/CustomFooter";

// importo l'alert
import CustomWelcome from "./components/CustomWelcome";

import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main className="bg-dark">
        <CustomWelcome />

        <BookList FantasyBooks={books} />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
