import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse JSON body
    const { name, email, message } = await req.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Create a new contact instance
    const newContact = new Contact({ name, email, message });

    // Save the contact to the database
    await newContact.save();

    // Return success response
    return NextResponse.json(
      { message: "Contact saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Handle errors and return error response
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { message: "Error saving contact" },
      { status: 500 }
    );
  }
}
