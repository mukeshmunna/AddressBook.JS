const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("Harry", "Potter", "4A-Main Street", "Hydrabad", "Telengana", "675476", "9876543210", "Harry@example.com");
const contact2 = new Contact("Steve", "Smith", "41A-Sardar Colony", "Pune", "Maharastra", "987898", "9878987698", "Steve@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.displayContacts();
