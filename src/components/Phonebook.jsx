import PropTypes from "prop-types";
import css from './Phonebook.module.css'
import {Component} from 'react'

class Phonebook extends Component {
    render() {
        const { contacts, name } = this.props;
        return (
            <header>
                <h2>Phonebook</h2>
                <form action="#">
                    <label htmlFor="inputForm">Name</label>
                    <input id="inputForm" type="text" />
                    <button type="submit">Add contact</button>
                </form>
            </header>
        )
    }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default Phonebook;