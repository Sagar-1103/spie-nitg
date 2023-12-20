// app/api/uploads/[filename]/route.ts
import { connectToDb } from "@/lib/mongo";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  // 1. get GridFS bucket
  const { bucket,client } = await connectToDb();
  // const files = await bucket.find({filename}).toArray();
  // console.log(files);
  
  const data = await req.json();
  // console.log(data);
  
  
  // files.map((item)=>{
  //   console.log(item.filename);
  // });
  return NextResponse.json({ success: true });
}
