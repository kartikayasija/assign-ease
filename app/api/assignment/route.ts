import { connectDB } from "@/lib/db";
import { Assignment } from "@/lib/models/assignmentSchema";

import { NextResponse } from "next/server";



export const POST= async (req:Request) => {
    try{
        await connectDB();
    const{name,link,deadline,group_id} = await req.json()
if (!name||!link||!group_id) {
    return  NextResponse.json({ Error: "Missing required fields." }, { status: 400 });
  }
      const assignment = new Assignment({  name,link,deadline,group_id });
     
      const givenAssignment = await assignment.save()
      if(!givenAssignment){return NextResponse.json({ Error: "unable to save" }, { status: 400 })};
       
      return NextResponse.json(givenAssignment, { status: 200 })
     
}catch(err){
    return NextResponse.json(err,{status:500})}};