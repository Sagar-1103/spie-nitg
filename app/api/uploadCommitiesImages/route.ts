// app/api/upload
import { connectToDb, fileExists } from "@/lib/mongo";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
  const { bucket } = await connectToDb();
  // get the form data
  const data = await req.formData();
  let fileName;

  // map through all the entries
  for (const entry of Array.from(data.entries())) {
    const [key, value] = entry;
    // FormDataEntryValue can either be type `Blob` or `string`
    // if its type is object then it's a Blob
    
    const isFile = typeof value == "object";

    if (isFile) {
      const blob = value as Blob;
      let fileName = value.name;
      let fileNameWithoutExtension = fileName.split('.')[0];
      const filename = fileNameWithoutExtension;
      fileName = filename;
      const existing = await fileExists(filename);
      if (existing) {
        // If file already exists, let's skip it.
        // If you want a different behavior such as override, modify this part.
        continue;
      }

      //conver the blob to stream
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);

      const uploadStream = bucket.openUploadStream(filename, {
        // make sure to add content type so that it will be easier to set later.
        contentType: blob.type,
        metadata: {
          "name":"",
          "post":""
        }, //add your metadata here if any
      });

      // pipe the readable stream to a writeable stream to save it to the database
       stream.pipe(uploadStream);
    }
  }

  // return the response after all the entries have been processed.
  return NextResponse.json({ success: "true" });
}
