import React from 'react';
import Products from './Components/Products';
//feature 1
import data from './data.json';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
    render(){
    return (
      <div>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Card</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products product = {this.state.products} />
              </div>
              <div className="sidebar">
                sidebar
              </div>
            </div>
          </main>
          <footer>
            All right reserve
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
