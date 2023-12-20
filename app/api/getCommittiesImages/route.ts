// app/api/uploads/[filename]/route.ts
import { connectToDb } from "@/lib/mongo";
import { NextResponse } from "next/server";

type Params = {
  params: { filename: string };
};

export async function GET(req: Request, { params }: Params) {
  // 1. get GridFS bucket
  const { bucket,client } = await connectToDb();
//   const names = bucket.find({});
        // const value = bucket;
        // const item = bucket.openUploadStream("JJK_Sunset") as unknown as ReadableStream;
        // console.log()
  const files = await bucket.find({}).toArray();
  // files.map((item)=>{
  //   console.log(item.filename);
  // });
  return NextResponse.json(files);
}
