import PropTypes from "prop-types";
import css from "./ContactList.module.css";

function ContactList({ getVisibleContacts }) {
  return (
    <ul className={css.listContacts}>
      {getVisibleContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  getVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
