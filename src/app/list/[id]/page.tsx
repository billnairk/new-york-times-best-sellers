import BookCategory from "../../../../components/bookCategory";

export default function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const id = decodeURIComponent(props.params.id);
  return (
    <div>
      <BookCategory id={id} />
    </div>
  );
}
