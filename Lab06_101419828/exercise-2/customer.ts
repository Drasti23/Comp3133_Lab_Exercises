class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

const customer = new Customer("Jane", "Doe");
console.log(customer.greeter());
