//Import mongoose module
const mongoose=require('mongoose');

//Connect to MongoDB database 'play'
mongoose.connect('mongodb://localhost:27017/play', { useNewUrlParser: true } )
.then(() => console.log("connected to mongodb"))
.catch((err) => console.log("Error: Unable to connect MongoDB"))