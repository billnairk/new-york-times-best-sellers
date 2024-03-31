import { BOOK_API } from "@/app/constans";
import style from "../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";

interface IBookCategory {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  book_image_width: number;
  book_image_height: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
}

async function getCategoryBestSellers(id: string) {
  return (await fetch(`${BOOK_API}${id}`)).json();
}

export default async function BookCategory({ id }: { id: string }) {
  const categoryBestSellers = await getCategoryBestSellers(id);
  return (
    <div>
      {categoryBestSellers.results.books.map((a: IBookCategory) => (
        <div className={style.card} key={a.title}>
          <img src={a.book_image} />
          <p>{a.author}</p>
          <p>{a.title}</p>
          <Link href={`${a.amazon_product_url}`}>
            <div>buy Now</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
