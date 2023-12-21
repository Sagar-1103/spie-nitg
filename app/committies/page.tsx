import Card from "@/components/Card"
import * as React from 'react';
import ComForm from "@/components/ComForm"
// import Image from "next/image";

const getImages = async()=>{
  try {
    const host:string = "https://spie-nitg.vercel.app";
      const res = await fetch(`${host}/api/getCommittiesImages`,{
          cache:"no-store",
      });
      // if (!res.ok) {
      //     throw new Error("Failed to fetch topics.");
      // }
      return await res.json();
  } catch (error) {
      console.log("Error loading topics in getImages",error);
  }
}

export default async function Committies() {
  const images = await getImages();
    return (
      <div className="mx-auto">
      <div>Committies</div>
      <div className="container mx-auto justify-center flex flex-wrap">
      {images && images.map((img:any) =>(
        <div className="my-5 mx-16" key={img._id}>
          
                  <Card filename={img.filename}/>
                </div>
            ))}
      </div>
      <div className="mx-auto">
      <ComForm/>
      </div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      <div>Committies</div>
      </div>
    )
  }
  