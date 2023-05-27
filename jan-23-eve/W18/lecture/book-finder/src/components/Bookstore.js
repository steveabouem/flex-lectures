import { useEffect, useState } from "react";
import CustomMouse from "./CustomMouse";
import axios from 'axios';

const Bookstore = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searcTerm, setSearcTerm] = useState('');

  useEffect(() => {
    if (searcTerm.length > 3) {
      axios.get(`https:/www.googleapis.com/books/v1/volumes?q=${searcTerm}`)
        .then(({data}) => {
          setLoading(false);
          setBooks(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [searcTerm]);

  const handleInputeChange = (e) => {
    setSearcTerm(e.target.value);
  }

  return (
    <div>
      {/* //component using my custom hook */}
      <CustomMouse />
      My Library
      <input onChange={handleInputeChange} />
      {
        loading ? <div>Loading ...</div> : (
          <ul>
            <li>Sample book</li>
            {books?.items.map((book, index) => (
              <li key={index}>Title: {book.volumeInfo.title}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default Bookstore;