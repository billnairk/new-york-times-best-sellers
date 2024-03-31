import { BOOKLIST_API, BOOK_API } from "@/app/(home)/page";
import Link from "next/link";

interface IBookList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getBookList() {
  return (await fetch(`${BOOKLIST_API}`)).json();
}

export default async function BookList() {
  const bookResponse = await getBookList();
  return (
    <div>
      {bookResponse.results.map((a: IBookList) => (
        <Link href={`list/${a.list_name}`} key={a.list_name}>
          <div>{a.list_name}</div>
        </Link>
      ))}
    </div>
  );
}
