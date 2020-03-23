const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bearerToken = require('express-bearer-token')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // buat nyimpan foto

const { db } = require('./connections/index');
const front = require('./connections/front')
const PORT = process.env.PORT || 2020;

// ROUTER
const { productRouters } = require('./routers')

// ngecek connect ke mysql apa gak? 
db.connect(err => {
    if (err) throw err;
    console.log('MySql connected...');
});

// ####################################################################################
// ROUTE
app.get('/', (req, res) => res.send(front))
app.use('/product', productRouters)


app.listen(PORT, console.log(`Server running on port : ${PORT}`));