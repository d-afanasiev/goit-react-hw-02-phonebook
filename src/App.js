import "./App.css";
import PropTypes from "prop-types";
import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  filterList = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  formSubmitHandler = (data) => {
    const findContacts = this.state.contacts.find(
      (contact) => contact.name === data.name
    );

    !findContacts
      ? this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contacts.`);
  };

  getVisibleList = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = (data) => {
    return this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== data.id),
    }));
  };

  render() {
    const { filter } = this.state;

    const getVisibleContacts = this.getVisibleList();

    return (
      <div className="App">
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <h1 className="titleContacts">Contacts</h1>
        <Filter filter={filter} filterList={this.filterList} />
        <ContactList
          getVisibleContacts={getVisibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default App;
