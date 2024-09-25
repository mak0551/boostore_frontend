import Booksinglecard from "./Booksinglecard";
function Bookscard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <Booksinglecard item={item} key={item._id} />
      ))}
    </div>
  );
}

export default Bookscard;
