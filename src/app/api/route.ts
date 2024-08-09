import connect from '@/utils/startMongo'
import { ObjectId } from 'mongodb';
import { book } from '@/utils/types';
//Get request baby
export async function GET(request: Request) {
  const client = await connect
  const cursor = client.db("bookstore").collection("books").find();
  const greetings = await cursor.toArray()
  
  return Response.json(greetings)
  
}
//post baby
export async function POST(request: Request){
  const client = await connect;
  const body = await request.json()
  await client.db("bookstore").collection("books").insertOne({title: body.books, author: body.author, pages: body.pages, rating: body.rating});
  return Response.json({message: "successfully added to the document"})
}
//update stuff
export async function PUT(request: Request){
  const client = await connect;
  const body = await request.json()
  const id = new ObjectId(body.id)
  await client.db("bookstore").collection("books").updateOne({_id: id}, {$set: {rating: body.rating}})
  return Response.json({message: "successfully updated the document"})
}
//delete stuff
export async function DELETE(request: Request) {
  const client = await connect;
  const body = await request.json()
  const id = new ObjectId(body.id)
  await client.db("bookstore").collection("books").deleteOne({_id: id})
  return Response.json({message: "you have succefully deleted the book"})

}