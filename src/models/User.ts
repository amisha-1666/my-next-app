import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
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
        password: {
        type: String,
        required: false,
    }

});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;