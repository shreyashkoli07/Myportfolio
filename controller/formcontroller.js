const Form = require("../models/formModel");





// post for client form
const sendData = async (req, res, next) => {
    const { fName, lName, eMail, mobile, message } = req.body;

    // // Check if all required fields are filled
    if (!fName || !lName || !eMail || !mobile || !message) {
        return res.status(400).json({ message: "Please fill all required fields." });
    }

    let data;
    try {
        // Create a new Form instance with the data
        data = new Form({
            fName,
            lName,
            eMail,
            mobile,
            message,
        });

        // Save the data to the database
        await data.save();

        // Return a success response
        return res.status(201).json(data);
    } catch (e) {
        console.log(`Error is ${e}`)
    }
    if (!data) {
        return res.status(404).json({ message: "Fill all Fields" })
    } else {
        return res.status(201).json(data)
    }
};





exports.sendData = sendData;
