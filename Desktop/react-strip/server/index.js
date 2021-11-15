const express = require ("express")
const app = express ()
require ("dotenv").config()
const stripe = require ("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req,res)=>{
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:"USD",
            description:"Spatula company",
            payment_method: id,
            confrim: true
        })

        console.log("Payment", payment)
            res.json({
                message:"payment successful",
                success: true
            })

    } catch (error) {
        consol.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
})