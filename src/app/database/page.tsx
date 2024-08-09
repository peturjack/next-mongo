import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("environment variable MONGO_URI is not defined");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
type book = {
  _id: ObjectId;
  title: string;
  author: string;
  rating: number;
  pages: number;
  genres: string[];
  review: {
    name: string;
    body: string;
  }[];
};
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Querying our database
    const cursor = await client.db("bookstore").collection("books").find();
    const array: book[] = (await cursor.toArray()) as book[];
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export default async function Back() {
  const baseUrl = process.env.HOST;
  const response = await fetch(`${baseUrl}/api`);
  const books: book[] = await response.json();
  return (
    <>
      {books.map((booksObj) => (
        <div>
          <h1 key={booksObj._id.toString()}>{booksObj.author}</h1>
          <p>{booksObj.title}</p>
          <p>{booksObj.genres}</p>
        </div>
      ))}
    </>
  );
}
