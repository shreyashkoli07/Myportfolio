const mongoose = require('mongoose');

// // Email validation function
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

mongoose.connection.collection('contactdatas').dropIndex('eMail_1', function(err, result) {
    if (err) {
        console.log('Error in dropping index:', err);
    } else {
        console.log('Unique index on `eMail` field dropped successfully');
    }
});
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
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobile: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Assuming mobile numbers are 10 digits
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

module.exports = mongoose.model("contactData", FormSchema);
