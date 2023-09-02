import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'


export default async function ProtectedRoute({ children }: { children: React.ReactNode }){
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/auth')
  }
  
  return <>{children}</>
}