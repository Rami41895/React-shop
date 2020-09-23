import React from "react";
import data from "./data.json";
import Filter from "./Components/filter";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
    };
  }

  openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  filterProducts = (e) => {
    console.log(data.products);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: data.products });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={this.openMenu}>&#9776;</button>
            <a href="index.html">shop</a>
          </div>
          <div className="header-links">
            <a href="Cart.html">Cart</a>{" "}
            <a href="signin.html">Sign in</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>shopping Categories</h3>
          <button className="sidebar-close-button" onClick={this.closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              filterProducts={this.filterProducts}
            />
            <ul className="products">
              {this.state.products.map((product) => (
                <li key={Math.random(10)}>
                  <div className="product">
                    <img
                      className="product-image"
                      src={product.image}
                      alt="product"
                    />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} Stars</div>
                  </div>
                  <button className="button primary">Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    );
  }
}
export default App;
