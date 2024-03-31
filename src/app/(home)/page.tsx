import { Suspense } from "react";
import BookList from "../../../components/bookList";

export default async function Home() {
  return (
    <div>
      <Suspense fallback="loading...">
        <BookList />
      </Suspense>
    </div>
  );
}
