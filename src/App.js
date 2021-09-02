import "./App.css";
import PropTypes from "prop-types";
import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  filterList = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      this.setState((prevState) => ({
        filter: e.target.value,
        contacts: prevState.contacts.filter((item) =>
          item.name.toLowerCase().includes(this.state.filter)
        ),
      }));
    } else {
      this.setState({
        contacts: [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
        filter: "",
      });
    }
  };

  formSubmitHandler = (data) => {
    this.setState((prevState) => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />
        <h1 className="titleContacts">Contacts</h1>

        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          className="inputFilter"
          onChange={this.filterList}
          value={filter}
        />

        <ul className="listContacts">
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default App;
