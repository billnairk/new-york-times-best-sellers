import { Suspense } from "react";
import BookList from "../../../components/bookList";

export default async function Home() {
  const BOOKLIST_API = "https://books-api.nomadcoders.workers.dev/lists";
  return (
    <div>
      <Suspense fallback="loading...">
        <BookList />
      </Suspense>
    </div>
  );
}
