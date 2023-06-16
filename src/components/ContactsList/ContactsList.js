import css from './ContactList.module.css';

const ContactsList = ({ contact, ondeleteContact }) => (
  <ul className={css.phoneList}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={css.ContactsList}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
          onClick={() => ondeleteContact(id)}
          className={css.button}
          type="button"
        >
          Del
        </button>
      </li>
    ))}
  </ul>
);
export default ContactsList;
