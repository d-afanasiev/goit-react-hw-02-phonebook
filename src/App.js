import "./App.css";
import PropTypes from "prop-types";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let idFullName = uuidv4();
    const totalState = {
      id: idFullName,
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [totalState, ...prevState.contacts],
    }));

    this.reset();
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

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      filter: "",
      name: "",
      number: "",
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <div className="App">
        <header>
          <h1 className="titlePhonebook">Phonebook</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <label htmlFor="sendName" className="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
              className="inputName"
              id="sendName"
            />
            <label htmlFor="sendTel">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              className="inputTel"
              onChange={this.handleChange}
              value={number}
              id="sendTel"
            />
            <button type="submit" className="submitName">
              Add contact
            </button>
          </form>

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
        </header>
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
