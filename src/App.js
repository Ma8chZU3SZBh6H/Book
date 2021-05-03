import React, { useState, useRef, useEffect } from 'react';
import { PageFlip } from 'page-flip';
import Nav from './components/Nav';
import Book from './components/Book';

window.onload = () => {
  const book = document.getElementById('book');
  const pageFlip = new PageFlip(book, {
    width: 2, // required parameter - base page width
    height: 3, // required parameter - base page height
    minWidth: 315,
    maxWidth: 600,
    maxShadowOpacity: 0.5,
    // minHeight: 50,
    // maxHeight: 200,
    showCover: true,
    size: "stretch",
    usePortrait: true,
    startZIndex: 100,
  });

  pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

  pageFlip.on("flip", (e) => {
    console.log(e);
    const current_page = document.querySelector(".page-current");
    current_page.innerText = e.data + 1;

    if (book.classList.contains("book-middle")) {
      book.classList.remove("book-middle");
    }
    if (book.classList.contains("book-middle-reverse")) {
      book.classList.remove("book-middle-reverse");
    }

    if (current_page.innerText === "1" && !book.classList.contains("book-middle")) {
      book.classList.add("book-middle");
    }
    if (current_page.innerText == total_pages && !book.classList.contains("book-middle")) {
      book.classList.add("book-middle-reverse");
    }
  });

  const total_pages = pageFlip.getPageCount();
  document.querySelector(".page-total").innerText = total_pages;

  pageFlip.on('changeState', (e) => {
    //console.log(e);

    // const current_page = document.querySelector(".page-current");
    // if (book.classList.contains("book-middle")) {
    //   //console.log("TWO", current_page.innerText !== "1", book.classList.contains("book-middle"));
    //   book.classList.remove("book-middle");
    // }
    // if (book.classList.contains("book-middle-reverse")) {
    //   //console.log("TWO", current_page.innerText !== "1", book.classList.contains("book-middle"));
    //   book.classList.remove("book-middle-reverse");
    // }

    //console.log(current_page.innerText, total_pages);
    // if (current_page.innerText === "1" && e.data === "read" && !book.classList.contains("book-middle")) {
    //   book.classList.add("book-middle");
    // }
    // if (current_page.innerText == total_pages && e.data === "read" && !book.classList.contains("book-middle")) {
    //   book.classList.add("book-middle-reverse");
    // }
  });

  // book.addEventListener("mousedown", () => {
  //   if (book.classList.contains("book-middle")) {
  //     book.classList.remove("book-middle");
  //   }
  // });

  document.querySelector(".btn-prev").addEventListener("click", () => {
    pageFlip.flipPrev(); // Turn to the previous page (with animation)
  });

  document.querySelector(".btn-next").addEventListener("click", () => {
    pageFlip.flipNext(); // Turn to the next page (with animation)
  });




}


function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className="overflow-hidden h-screen">
      <div className={`absolute ${theme ? 'bg-mc1' : 'bg-gradient-to-b from-nc1 to-mc1'} h-full w-full overflow-hidden`}>
        <div className=" relative  mx-auto " style={{width: "2000px"}}>
          <div id="stars"></div>
          <div id="stars1"></div>
          <div id="stars2"></div>
        </div>
      </div>
      <div className="z-10 relative">
        <Nav setTheme={setTheme} theme={theme} />
        <div className="px-2 md:px-10">
          <Book theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
