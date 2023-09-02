import mongoose, { Document, Model, Schema, Types } from "mongoose";

interface IUser extends Document{
  email: string
  name: string,
  img: string
  groups: Types.ObjectId[]
  assignments: Types.ObjectId[]
  submitted_assignments: Types.ObjectId[]
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  img:{
    type: String
  },
  groups: [
    {
      type: Types.ObjectId,
      ref: 'Group'
    },
  ],
  assignments:[
    {
      type: Types.ObjectId,
      ref:'Teacher_Assignment'
    }
  ],
  submitted_assignments:[
    {
      type: Types.ObjectId,
      ref:'Student_Assignment'
    }
  ],
});


export const UserSchema: Model<IUser> = mongoose.models.user || mongoose.model<IUser>("user", userSchema);