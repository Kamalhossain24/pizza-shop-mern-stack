const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDB = require("./config/config")
const Pizza =require("./model/pizzaModel")
const pizzas=require("./data/pizza-data")
dotenv.config();
connectDB();

const importData = async()=>{
    try {
        await Pizza.deleteMany()
        const sampleData =pizzas.map(pizza=>{return {...pizza}})
        await Pizza.insertMany(sampleData)
        console.log(`data imported`.bgGreen);
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgRed);
        process.exit(1);
    }
}
const dataDisttroy=()=>{}
if (process.argv[2]==="-d") {
    dataDisttroy()
}else{
    importData();
}