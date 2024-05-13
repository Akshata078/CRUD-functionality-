// // Task: CRUD Functionality
// // Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// // Implement the following functionalities:
// // Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
// // Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// // Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// // Delete a contact: Allow users to delete a contact by entering their name.




// let phoneBook = [];


// function newContact(name,phoneNumber,email){
//       this.name = name;
//       this.phoneNumber = phoneNumber;
//       this.email = email;
// }



// function searchContact(contactName){
//     let found = false;
// for (let i=0; i<phoneBook.length; i++){
//     if (phoneBook[i].name == contactName){
//         for (let keys in phoneBook[i]){
//             console.log(keys,phoneBook[i][keys]);
//         }
//         found = true;
//         break;
//     }
// }  
// if (found != true){
//     console.log(`${contactName} is not exist in the phonebook`);
// }
// }



// function updateContact(name,phoneNumber,email){
//     let contFound = false;
//     for (let i=0; i<phoneBook.length; i++){
//         if (phoneBook[i].name == name &&  phoneBook[i].phoneNumber == phoneNumber && phoneBook[i].email == email){
//             phoneBook[i].name = "Akshu";
//             phoneBook[i].phoneNumber = 8459811111;
//             phoneBook[i].email = "akshata@gmail.com";

//             console.log(phoneBook[i]);
//             contFound = true;
//             break;
//             }   
//         }
//         if (contFound != true){
//             console.log("Contact does not exist in phonebook.");
//         }
//     } 



// function deleteContact(name){
//     for (let i=0; i<phoneBook.length; i++){
//         if (phoneBook[i].name == name){
//            phoneBook.splice(i,1);
//             break;
//         }
//     }
// }


// let newCont1 = new newContact("Akshata", 123456789, "akshuu@gmail.com");
// let newCont2 = new newContact("Shweta", 506860504, "shw@gmail.com")
// phoneBook.push(newCont1,newCont2);
// console.log(phoneBook);


// searchContact("Akshuu");

// updateContact("Akshata", 123456789, "akshuu@gmail.com");

// deleteContact("Shweta");

// console.log(phoneBook);