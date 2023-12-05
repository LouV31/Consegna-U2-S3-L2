class User {
    constructor(firstName, lastName, age, location) {
        (this.firstName = firstName), (this.lastName = lastName), (this.age = age), (this.location = location);
    }

    older(otherUser) {
        if (parseInt(this.age) > parseInt(otherUser.age)) {
            return `${this.firstName} è più grande di ${otherUser.firstName}.`;
        } else if (parseInt(this.age) < parseInt(otherUser.age)) {
            return `${this.firstName} è più piccolo di ${otherUser.firstName}.`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
        }
    }
}

const user1 = new User("Giovanni", "Simone", "24", "Burundi");
const user2 = new User("Francesco", "Brescia", "21", "Molise");
const user3 = new User("Gilberta", "DeFilippi", "24", "CapeTown");
const user4 = new User("Gennaro", "Esposito", "26", "New York");
const user5 = new User("Nonpippo", "Pluto", "99", "Malesia");
console.log(user1.older(user3));
console.log(user2.older(user5));
console.log(user4.older(user2));
