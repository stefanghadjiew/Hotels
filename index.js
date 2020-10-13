const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hbr14I0gL9dBjcHGT4wiYN3Ms85LogwPqBMAgXUayArSUYWORyxpCQvpDuSX9ZRwRxDTPxQjzCGnrbeqdmwQSdN0036VBgD5T');
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(cors());

app.post('/checkout', async (req,res) => {
    try {
        const {finalPrice,token} = req.body
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const idempotency_key=uuidv4()
        const charge = await stripe.charges.create({
            amount : finalPrice * 100,
            currency : "usd",
            customer : customer.id,
            email : token.email,
            address : {
                line1:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                postal_code:token.card.address_postal_code
            }
        },{idempotency_key})
        res.status(200)
    } catch (err) {
        res.json(err)
    }
   
})

app.listen(PORT , () => {
    console.log(`Server listening on PORT : ${PORT}`)
});