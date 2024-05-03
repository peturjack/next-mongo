import { ObjectId } from "mongodb";

export type book = {
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