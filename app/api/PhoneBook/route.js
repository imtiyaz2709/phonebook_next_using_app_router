import connectDb from "@/app/utility/connectDb";
import { NextResponse } from "next/server";
import Phone from "@/app/models/PhoneBook"

// for get Api //
export async function GET(req){
    try{
        await connectDb();
        const data = await Phone.find()
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"error":e})
}

}

// for Post Api //

export async function POST(req){
    try{
        await connectDb();
        const records = await req.json();
        const data = await Phone.create(records)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
}

// for Delete Api  //

