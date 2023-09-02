import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Group } from "@/lib/models/groupSchema";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try{
    const session = await getServerSession(authOptions);
    if(!session){
      return NextResponse.json(
        { Error: "not authenticated." },
        { status: 401 }
      );
    }
    await connectDB();
    const { name } = await req.json();
    if (!name) {
      return NextResponse.json(
        { Error: "name is required." },
        { status: 400 }
      );
    }

    const foundGroup = await Group.find({admin:session.user?.email, name:name})
    if(foundGroup.length>0){
      return NextResponse.json({Error:"Group with this name already Exists"},{status:400});
    }
    const group = new Group({ name, admin: session.user?.email });
    const savedGroup = await group.save();
    if (!savedGroup) {
      return NextResponse.json({ Error: "unable to save" }, { status: 400 });
    }
  
    return NextResponse.json(savedGroup, { status: 200 });
  } catch(err){
    return NextResponse.json(err,{status:500})
  }
};


