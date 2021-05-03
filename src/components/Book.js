import dark_page_01 from '../pages/dark/page_01.svg';
import dark_page_02 from '../pages/dark/page_02.svg';
import dark_page_03 from '../pages/dark/page_03.svg';
import dark_page_04 from '../pages/dark/page_04.svg';
import dark_page_05 from '../pages/dark/page_05.svg';
import dark_page_06 from '../pages/dark/page_06.svg';
import dark_page_07 from '../pages/dark/page_07.svg';
import dark_page_08 from '../pages/dark/page_08.svg';
import dark_page_09 from '../pages/dark/page_09.svg';
import dark_page_10 from '../pages/dark/page_10.svg';
import dark_page_11 from '../pages/dark/page_11.svg';
import dark_page_12 from '../pages/dark/page_12.svg';
import dark_page_13 from '../pages/dark/page_13.svg';
import dark_page_14 from '../pages/dark/page_14.svg';

import bright_page_01 from '../pages/bright/page_01.png';
import bright_page_02 from '../pages/bright/page_02.png';
import bright_page_03 from '../pages/bright/page_03.png';
import bright_page_04 from '../pages/bright/page_04.png';
import bright_page_05 from '../pages/bright/page_05.png';
import bright_page_06 from '../pages/bright/page_06.png';
import bright_page_07 from '../pages/bright/page_07.png';
import bright_page_08 from '../pages/bright/page_08.png';
import bright_page_09 from '../pages/bright/page_09.png';
import bright_page_10 from '../pages/bright/page_10.png';
import bright_page_11 from '../pages/bright/page_11.png';
import bright_page_12 from '../pages/bright/page_12.png';
import bright_page_13 from '../pages/bright/page_13.png';
import bright_page_14 from '../pages/bright/page_14.png';

function Book({theme}) {
    return <div className="select-none mx-auto transition-all book-middle duration-500 z-50" id="book">
        <div className="border-nc3 border-2  my-page select-none" data-density="hard">
            {theme ? 
            <img src={dark_page_01} alt="PAGE" />
            :
            <img src={bright_page_01} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2  my-page select-none">
            {theme ? 
            <img src={dark_page_02} alt="PAGE" />
            :
            <img src={bright_page_02} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_03} alt="PAGE" />
            :
            <img src={bright_page_03} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_04} alt="PAGE" />
            :
            <img src={bright_page_04} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_05} alt="PAGE" />
            :
            <img src={bright_page_05} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_06} alt="PAGE" />
            :
            <img src={bright_page_06} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_07} alt="PAGE" />
            :
            <img src={bright_page_07} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
          {theme ? 
            <img src={dark_page_08} alt="PAGE" />
            :
            <img src={bright_page_08} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
          {theme ? 
            <img src={dark_page_09} alt="PAGE" />
            :
            <img src={bright_page_09} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
         {theme ? 
            <img src={dark_page_10} alt="PAGE" />
            :
            <img src={bright_page_10} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            {theme ? 
            <img src={dark_page_11} alt="PAGE" />
            :
            <img src={bright_page_11} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
          {theme ? 
            <img src={dark_page_12} alt="PAGE" />
            :
            <img src={bright_page_12} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
         {theme ? 
            <img src={dark_page_13} alt="PAGE" />
            :
            <img src={bright_page_13} alt="PAGE" />}
        </div>
        <div className="border-nc3 border-2 my-page select-none" data-density="hard">
            {theme ? 
            <img src={dark_page_14} alt="PAGE" />
            :
            <img src={bright_page_14} alt="PAGE" />}
        </div>
    </div>
}

export default Book;