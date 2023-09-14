const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("Harry", "Potter", "4A-Main Street", "Hydrabad", "Telengana", "675476", "9876543210", "harry@example.com");
const contact2 = new Contact("Steve", "Smith", "41A-Sardar Colony", "Pune", "Maharastra", "987898", "9878987698", "steve@example.com");
const contact3 = new Contact("John", "Son", "xcdsvdsvsd", "ndsddvssjdjk", "hdhuiu", "667774", "9878873658", "fhgfd@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);


addressBook.displayContacts();

const foundContact = addressBook.findContactByName("Rohit", "sharma");

if (foundContact) {
   
    const updatedInfo = {
        address: "345 ftcf dfg",
        city: "kjhgfddfghj",
        state: "jcxsrthfd",
        zip: "097890",
        phoneNumber: "0987654321",
        email: "updated.email@example.com",
    };
    const success = addressBook.editContact("Rohit", "Sharma", updatedInfo);
    if (success) {
        console.log("Contact updated successfully!");
    } else {
        console.log("Contact not found.");
    }
}
else {
    console.log("Contact not found.");
}
addressBook.displayContacts();
addressBook.deleteContactByName("steve", "Smith");
console.log("Final display");
addressBook.displayContacts();

const contactCount = addressBook.getContactCount();
console.log(`Number of Contacts: ${contactCount}`);

addressBook.addContact(contact4);