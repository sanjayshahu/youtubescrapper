var mongoose = require('mongoose');

// var connectionUrldb = "mongodb://127.0.0.1:27017/VideoDb";
mongoose.connect(
    "mongodb://127.0.0.1:27017/VideoDb",{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});