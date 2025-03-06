class Exercise3Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

// Create an instance of the Exercise3Customer class
const customer1 = new Exercise3Customer("John", "Doe");

// Call the greeter method using the correct variable name
customer1.greeter();
