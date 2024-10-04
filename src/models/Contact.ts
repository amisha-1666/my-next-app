import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Plaese provide a valid name']
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    message: {
        type: String,
        required: false,
    }

});

const Contact = mongoose.models.Contact || mongoose.model('Contact',ContactSchema);
export default Contact;