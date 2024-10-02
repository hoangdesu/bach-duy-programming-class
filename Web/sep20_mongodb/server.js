console.log('hi')

// const mongoose = require('mongoose');
import mongoose, { connect } from "mongoose"

const connectionString = 'mongodb+srv://bachduy25102004:7G792YeuEAxBHAlg@cluster0.1fc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

await mongoose.connect(connectionString);

console.log('connected to MongoDB!');

// Car:
const carSchema = mongoose.Schema({
    name: String,
    price: Number,
});

const Car = mongoose.model('Car', carSchema); // model, class, collection

// class Car {
//     public String name;
//     public double price;
// }

const firstCar = new Car({ name: 'Maybach', price: 256_000 }); // created an instance, only temporarily in memory

console.log(firstCar);

// CRUD:

// Create
// await firstCar.save();

// console.log('saved ' + firstCar.name + ' into DB!');

// Read:
const allCars = await Car.find();

console.log('all cars: ', allCars);

const lambo = await Car.findById('66edabaefd62b8641c02b112');
console.log('My Lambo:', lambo);

// const maybachs = await Car.find({ name: 'Maybach' });
const maybachs = await Car.find({ _id: '66edabc02108f8d399439b29' })
console.log('Anh có ' + maybachs.length + ' Maybach:' + maybachs);

await Car.findByIdAndUpdate('66edac262afe9c7d2d72ac8a', { name: 'Pagani', price: 3_000_000 });

// Cho anh 1 endpoint vd 
// GET /food
