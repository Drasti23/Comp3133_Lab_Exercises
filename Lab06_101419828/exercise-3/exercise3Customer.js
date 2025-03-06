var Exercise3Customer = /** @class */ (function () {
    function Exercise3Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Exercise3Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Exercise3Customer;
}());
// Create an instance of the Exercise3Customer class
var customer1 = new Exercise3Customer("John", "Doe");
// Call the greeter method using the correct variable name
customer1.greeter();
