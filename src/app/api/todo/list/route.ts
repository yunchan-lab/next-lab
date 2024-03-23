import prisma from "~/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const todoList = await prisma.todo.findMany()
    return NextResponse.json({ items: todoList }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ msg: "Failed Fetch Wiki List" }, { status: 500 })
  }
}
