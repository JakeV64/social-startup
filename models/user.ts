import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts: IThought[];
    friends: IUser[];
}

const UserSchema = new Schema<IUser>( 
    {
        username:{type : String, required: true, unique: true, trim: true},
        email:{type : String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address']},
        thoughts:[{type: Schema.Types.ObjectId, ref: 'Thought'}],
        friends:[{type: Schema.Types.ObjectId, ref: 'User'}],
    },