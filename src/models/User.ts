import {Schema , model} from 'mongoose'
import { userType } from '../contracts/user.interface.js'

const UserSchema = new Schema<userType>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
}, { timestamps: true }
);

const User = model<userType>('User', UserSchema);
export default User;