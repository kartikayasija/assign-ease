
import connectDB from '../../../db';
import Group from '../../../lib/models/group';
import {NextResponse} from 'next/server'



const POST= async (req) => {
    const{name,admin} = await req.json()
if (!name||!admin) {
    return  NextResponse.json({ Error: "Both name and admin are required." }, { status: 400 });
  }
      const group = new Group({  name, admin });
     
      const savedGroup = await group.save()
      if(!savedGroup){return NextResponse.json({ Error: "unable to save" }, { status: 400 })};
       
      return NextResponse.json(savedGroup, { status: 200 })
     
}
export default POST;
