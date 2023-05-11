import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
  
    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
   // const buffer = Buffer.from(bytes);
  
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    //   const filePath = `/tmp/${file.name}`
    //console.log(process.cwd()); // directory actualy 
    const filePath = path.join(process.cwd(), "public", file.name);
   // await writeFile(filePath, buffer);
    console.log(`open ${filePath} to see the uploaded file`);
  
    return NextResponse.json({ success: true });
   
    // return new Response(JSON.stringify({
    //     message: "after fetch in the server Backend Simulation"
    // }))
}