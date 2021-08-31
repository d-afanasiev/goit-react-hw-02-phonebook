import PropTypes from "prop-types";
import css from "./Phonebook.module.css";
import { Component } from "react";

class Phonebook extends Component {
  render() {
    const { contacts, name } = this.props;
    return (
      <header>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <form action="#" className={css.form}>
          <label htmlFor="sendName" className={css.name}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={css.inputName}
            id="sendName"
          />
          <button type="submit" className={css.submitName}>
            Add contact
          </button>
        </form>

        <h1 className={css.titleContacts}>Contacts</h1>
        <ul className={css.listContacts}>
          <li></li>
        </ul>
      </header>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default Phonebook;
