const person = {
    firstName : "John",
    lastName : "Doe",
    age : 22,
    id : 2023,
    counrty : "USA",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person)