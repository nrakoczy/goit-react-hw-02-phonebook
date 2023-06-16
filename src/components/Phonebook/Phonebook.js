import { Component } from 'react';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';
import css from './Phonebook.module.css';
import { v4 as uuidv4 } from 'uuid';
import FilterList from '../FilterList/FilterList';
class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: uuidv4() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getFilteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }
  onFilterHandleChange = filter => {
    this.setState({ filter });
  };
  render() {
    const visibleContacts = this.getFilteredContacts();
    const { filter } = this.state;
    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <FilterList
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />

        <ContactsList
          contact={visibleContacts}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default Phonebook;
