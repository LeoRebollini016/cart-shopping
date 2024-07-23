import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Container>
            <AppRouter />
          </Container>
          <Footer />
        </div>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
