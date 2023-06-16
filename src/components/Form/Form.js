import { Component } from 'react';
import css from '../Phonebook/Phonebook.module.css';
const initialState = {
  name: '',
  number: '',
};
class Form extends Component {
  state = { ...initialState };

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...initialState });
  };
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={this.onHandleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
