import React, { Component } from "react";
import css from 'components/App.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
state = {
contacts: [
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter: '',
};

componentDidMount() {
const contacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contacts);
if (parsedContacts) {
this.setState({ contacts: parsedContacts });
}
}

componentDidUpdate(prevProps, prevState) {
if (this.state.contacts !== prevState.contacts) {
localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}
}

formSubmitHandler = contact => {
if (
!this.state.contacts.find(
({ name }) => name.toLowerCase() === contact.name.toLowerCase()
)
) {
this.setState(prevState => ({
contacts: [...prevState.contacts, contact],
}));
} else {
alert(`${contact.name} is already in contacts.`);
}
};

filterContacts = () => {
return this.state.contacts.filter(contact =>
contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
);
};

findContact = ({ target }) => {
this.setState({ filter: target.value });
};

deleteContact = contactId => {
this.setState(prevState => ({
contacts: prevState.contacts.filter(({ id }) => id !== contactId),
}));
};

render() {
return (
<div
style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontSize: 16,
color: '#010101',
}}
>
<div>
<h1 className={css.title}>Phonebook</h1>
<ContactForm onSubmit={this.formSubmitHandler} />
<h2 className={css.title}>Contacts</h2>
<Filter
         value={this.state.filter}
         onChange={this.findContact}
       />
{this.state.contacts.length === 0 ? (
<p className={css.messageUser}>There are no contacts in the Phonebook</p>
) : (
<ContactList
           contacts={this.filterContacts()}
           onDeleteContact={this.deleteContact}
         />
)}
</div>
</div>
);
}
}

export default App;