const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("Harry", "Potter", "4A-Main Street", "Hydrabad", "Telengana", "675476", "9876543210", "harry@example.com");
const contact2 = new Contact("Steve", "Smith", "41A-Sardar Colony", "Pune", "Maharastra", "987898", "9878987698", "steve@example.com");
const contact3 = new Contact("John", "Son", "xcdsvdsvsd", "ndsddvssjdjk", "hdhuiu", "667774", "9878873658", "fhgfd@example.com");
const contact4 = new Contact("Prasad", "Kumar", "98-s njjv", "hiiheloo", "rtyhgfdrtg", "7565778", "9098789879", "prasad@example.com");
const contact5 = new Contact("Pavan", "Kalyan", "65h-hhdh colony", "pomnukihj", "ghfdhfyh", "887887", "8987673658", "pavan@example.com");
const contact6 = new Contact("Kalyan", "Pavan", "ygdsdfghj", "gygfdyuytd", "ftyfdtytg", "567876", "9988776655", "fhgfd@example.com");


addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact4);
addressBook.addContact(contact5);
addressBook.addContact(contact6);


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

console.log("Search display");
console.log("Contacts in Hydrabad:");
const contactsInNY = addressBook.findContactsByCity('Hydrabad');
contactsInNY.forEach(contact => {
    console.log(`${contact.firstName} ${contact.lastName}`);
});

console.log("Contacts in Pune:");
const contactsInCA = addressBook.findContactsByState('Pune');
contactsInCA.forEach(contact => {
    console.log(`${contact.firstName} ${contact.lastName}`);
});
    
console.log("Final display");
console.log("Persons in Hydrabad:");
const personsInNY = addressBook.viewPersonsByCity('Hydrabad');
personsInNY.forEach(contact => {
    console.log(`${contact.firstName} ${contact.lastName}`);
});

console.log("Persons in Pune:");
const personsInCA = addressBook.viewPersonsByState('Pune');
personsInCA.forEach(contact => {
    console.log(`${contact.firstName} ${contact.lastName}`);
});
console.log("Final display");

const countInNewYork = addressBook.getCountByCity('Hydrabad');
console.log("Count in Hydrabad:", countInNewYork);

const countInNY = addressBook.getCountByState('hiiheloo');
console.log("Count in hiiheloo:", countInNY);