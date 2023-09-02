import mongoose, { Schema, Document, Model,Types } from "mongoose";

interface IGroup extends Document {
  name: string;
  admin: string;
  members: Types.ObjectId[];
  members_count: number;
  assignments_count: number;
}

const groupSchema: Schema<IGroup> = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  admin: {
    required: true,
    type: String,
    ref: "User",
  },
  members: [
    {
      type: Types.ObjectId,
      ref: "User", 
    },
  ],
  members_count: {
    type: Number,
    default: 0,
  },
  assignments_count: {
    type: Number,
    default: 0,
  },
});

export const Group: Model<IGroup> = mongoose.model<IGroup>("Group", groupSchema);

