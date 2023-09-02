import mongoose, { Schema, Document, Model,Types } from "mongoose";
interface IAssignment extends Document {
    name: string;
link:String;
group_id:Number;
deadline:Date;
admin_email:String,
responses: [Number]}
const assignmentSchema: Schema<IAssignment> = new Schema<IAssignment>({

    name:{
        type: String,
        required: true, 
      },
    
    link:{
        type:String,
        required:true
    },
    group_id:{type:Number,
        required:true},
	admin_email:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    deadline:Date,
	responses: [Number],
	timestamp:true,
	marks:Number

});
export const Assignment: Model<IAssignment> = mongoose.model<IAssignment>("Assignment", assignmentSchema);