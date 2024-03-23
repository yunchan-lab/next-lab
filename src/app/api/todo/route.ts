import prisma from "~/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const todo = await prisma.todo.create({
      data: {
        task: body.task,
      },
    })

    return NextResponse.json({ todo }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ msg: "Failed Fetch Wiki List" }, { status: 500 })
  }
}
