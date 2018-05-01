class Person {
    constructor(firstname, lastname, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }
    fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person1 = new Person('Gorer','Lorarona', 1);
person1.fullName();
let contacts = [person1];

class Address {
    constructor(city, street, building, home ) {
        this.city = city;
        this.street = street;
        this.building = building;
        this.home = home;

    }

}
let address1 = new Address( 'Yerevan', 'Komitas',  14, 64  );

class Contact {
    constructor(fullname, phonenumber, emailaddress, address) {
        this.fullname = fullname();
        this.phonenumber = phonenumber;
        this.emailaddress = emailaddress;
        this.address = address;
    }
}
let contact1 = new Contact( person1.fullName(), '111-222-333', 'coll.email@email.com', address1);

class Phonebook {
    constructor(fullname, phonenumber, address) {
        this.contaacts = [];
        this.fullname = fullname;
        this.phonenumber = phonenumber;
        this.address = address;
    }
}
let firstcontact = new Phonebook( person1.fullName(), '111-222-333', Object.values(address1));
//console.log(firstcontact);

let add = function (firstname, lastname, phonenumber, email, id) {
    let newContact = {
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        email: email,
        id: id
    }
    contacts[contacts.length]=newContact;
}
add('barbara','baryan','11-22-33','hkhk@gmail.com', 2);
//console.log(contacts);
let get = function(){
    return contacts;
}
//console.log(get());
//console.log(contacts[1]);
