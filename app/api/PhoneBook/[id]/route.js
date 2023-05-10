import { NextResponse } from "next/server";
import Phone from "@/app/models/PhoneBook"
import connectDb from "@/app/utility/connectDb";

export async function DELETE(req,{params}){
    
    await connectDb();
    const data = await Phone.find({"_id":params.id})
    await data.deleteOne()

    return NextResponse.json({data})

}