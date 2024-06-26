import React from 'react'
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";
import "./HomeList.css";

const BookList = () => {
  const {books} = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  return (
    <section className='Homelist'>
      <div className='container'>
        <div className='section-title'>
          <h2 style={{color:'#f8f9fa', textTransform:'none', textAlign:'left'}}>Do You Want To See . . .</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 8).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
export default BookList