const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    address: {
        type: String,
        required: false,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });

    userSchema.pre('save', function(next) {
        if (this.isModified('password')) {
            this.password = bcrypt.hashSync(this.password, 10);
        }
        next();
    });


const User = mongoose.model('User', userSchema);
module.exports = User;

    
        
