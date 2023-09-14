// addressBook.js
class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      
      const isDuplicate = this.contacts.some((existingContact) => {
        return (
          existingContact.firstName === contact.firstName &&
          existingContact.lastName === contact.lastName
        );
      });
  
      if (isDuplicate) {
        console.log("Duplicate entry. Contact not added.");
      } else {
        this.contacts.push(contact);
        console.log("Contact Added");
      }
    }
  
    displayContacts() {
      this.contacts.forEach((contact) => {
        console.log(`First Name: ${contact.firstName}`);
        console.log(`Last Name: ${contact.lastName}`);
        console.log(`Address: ${contact.address}`);
        console.log(`City: ${contact.city}`);
        console.log(`State: ${contact.state}`);
        console.log(`Zip Code: ${contact.zip}`);
        console.log(`Phone Number: ${contact.phoneNumber}`);
        console.log(`Email: ${contact.email}`);
        console.log("-------------");
      });
    }
    findContactByName(firstName, lastName) {
      const foundContactIndex = this.contacts.findIndex((contact) => {
        return contact.firstName === firstName && contact.lastName === lastName;
      });
  
      if (foundContactIndex !== -1) {
        return this.contacts[foundContactIndex];
      } else {
        return null;
      }
    }
  
    editContact(firstName, lastName, updatedContactInfo) {
      const foundContactIndex = this.contacts.findIndex((contact) => {
        return contact.firstName === firstName && contact.lastName === lastName;
      });
  
      if (foundContactIndex !== -1) {
        this.contacts[foundContactIndex] = {
          ...this.contacts[foundContactIndex],
          ...updatedContactInfo,
        };
        return true;
      } else {
        return false;
      }
    }
    deleteContactByName(firstName, lastName) {
      const foundContactIndex = this.contacts.findIndex((contact) => {
        return contact.firstName === firstName && contact.lastName === lastName;
      });
  
      if (foundContactIndex !== -1) {
       
        this.contacts.splice(foundContactIndex, 1);
        console.log("Contact Deleted");
        return true;
      } else {
        console.log("Contact not found. Deletion failed.");
        return false;
      }
    }
    getContactCount() {
      
      return this.contacts.reduce((count, contact) => count + 1, 0);
    }
    
      findAndDisplayContactsByCity(city) {
          const filteredContacts = this.contacts.filter(contact => contact.city === city);
  
          if (filteredContacts.length === 0) {
              console.log(`No contacts found in ${city}`);
          } else {
              console.log(`Contacts in ${city}:`);
              filteredContacts.forEach(contact => {
                  this.displayContact(contact);
              });
          }
      }
  
      
      findAndDisplayContactsByState(state) {
          const filteredContacts = this.contacts.filter(contact => contact.state === state);
  
          if (filteredContacts.length === 0) {
              console.log(`No contacts found in ${state}`);
          } else {
              console.log(`Contacts in ${state}:`);
              filteredContacts.forEach(contact => {
                  this.displayContact(contact);
              });
          }
      }
       
       displayContact(contact) {
          console.log(`First Name: ${contact.firstName}`);
          console.log(`Last Name: ${contact.lastName}`);
          console.log(`Address: ${contact.address}`);
          console.log(`City: ${contact.city}`);
          console.log(`State: ${contact.state}`);
          console.log(`Zip Code: ${contact.zip}`);
          console.log(`Phone Number: ${contact.phoneNumber}`);
          console.log(`Email: ${contact.email}`);
          console.log("-------------"); 
      }
  
  }
  module.exports = AddressBook;
  