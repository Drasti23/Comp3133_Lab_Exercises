export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }

    getAge(): number {
        console.log(`Age: ${this.age}`);
        return this.age;
    }
}
