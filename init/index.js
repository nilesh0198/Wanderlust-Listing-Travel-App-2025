const mongoose =  require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL= "mongodb://127.0.0.1:27017/wnderlust";

main()
    .then((res)=>{
    console.log("connection success");
    })

    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async ()=>{
    await Listing.deleteMany({});
    data.data=data.data.map((obj)=>({
      ...obj,
      owner:"6851551d8b03753d23e7fe0f"
    }));
    
    await Listing.insertMany(data.data);
    console.log("DATABASE IS NOW FULL with large sample data")
}

initDB();