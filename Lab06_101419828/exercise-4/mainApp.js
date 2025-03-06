"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customerClass_1 = require("./customerClass");
var customer = new customerClass_1.Customer("Alice", "Johnson", 25);
console.log(customer.greeter());
customer.getAge();
