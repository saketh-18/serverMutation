import mongoose from "mongoose";

const {Schema , model } = mongoose;
const UserSchema = new Schema ({
    firstName : {
        type : String ,
        required : true
    } ,
    lastName : {
        type : String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true
    } ,
    address : {
        type: String ,
        required : true
    }
})

const User = mongoose.models.User || model('User', UserSchema);
export default User;