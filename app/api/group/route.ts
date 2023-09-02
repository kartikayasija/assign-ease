import { connectDB } from "@/lib/db";
import { Group } from "@/lib/models/group";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try{
    await connectDB();
    const { name, admin } = await req.json();
    if (!name || !admin) {
      return NextResponse.json(
        { Error: "Both name and admin are required." },
        { status: 400 }
      );
    }
    const group = new Group({ name, admin });
    const savedGroup = await group.save();
    if (!savedGroup) {
      return NextResponse.json({ Error: "unable to save" }, { status: 400 });
    }
  
    return NextResponse.json(savedGroup, { status: 200 });
  } catch(err){
    return NextResponse.json(err,{status:500})
  }
};


