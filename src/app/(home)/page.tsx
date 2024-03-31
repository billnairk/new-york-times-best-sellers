import { Suspense } from "react";
import BookList from "../../../components/bookList";

export const BOOKLIST_API = "https://books-api.nomadcoders.workers.dev/lists";
export const BOOK_API = "https://books-api.nomadcoders.workers.dev/list?name=";

export default async function Home() {
  return (
    <div>
      <Suspense fallback="loading...">
        <BookList />
      </Suspense>
    </div>
  );
}
