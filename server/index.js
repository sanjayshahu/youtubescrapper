const express = require('express');
const cors=require('cors');
require('./mongodata');
const appRoutes=require('./routes');
const app = express();
app.use(cors())

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(appRoutes);

app.listen(port, () => {
        console.log("sever is up at " + port)
    }

)