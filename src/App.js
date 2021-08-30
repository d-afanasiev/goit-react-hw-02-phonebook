import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Phonebook from "./components/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className="App">
        <Phonebook contacts={this.state.contacts} name={this.state.name} />
      </div>
    );
  }
}

export default App;
