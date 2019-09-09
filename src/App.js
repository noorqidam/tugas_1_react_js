import React, {Component} from 'react';
import MenuKontak from "./Page/MenuKontak";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Ini Halaman Untuk Header</h2>
        <MenuKontak />
        <MenuProduct />
        <MenuTentangKami />
        <MenuUtama />
        <h2>Ini Halaman Untuk Footer</h2>
      </div>
    );
  }
}

export default App;
