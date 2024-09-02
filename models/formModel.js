const mongoose = require('mongoose');

// Email validation function (if you choose to keep it)
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

// Schema Definition
const FormSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    eMail: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        // Alternatively, you can use just this match property:
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobile: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Adjust if you want internationalization
            },
            message: props => `${props.value} is not a valid mobile number!`
        },
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model("contactData", FormSchema);

// Uncomment the code below to drop the unique index if needed
// mongoose.connection.collection('contactdatas').dropIndex('eMail_1', function(err, result) {
//     if (err) {
//         console.log('Error in dropping index:', err);
//     } else {
//         console.log('Unique index on `eMail` field dropped successfully');
//     }
// });
