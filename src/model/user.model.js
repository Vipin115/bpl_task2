
const bcrypt = require('bcrypt')

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: {type: String,required: true }
    },
    {
        versionKey: false,
        timeStamps:true
    }
)
userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

const User = mongoose.model("user", userSchema);



module.exports = User;
