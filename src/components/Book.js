import page_01 from '../pages/page_01.svg';
import page_02 from '../pages/page_02.svg';
import page_03 from '../pages/page_03.svg';
import page_04 from '../pages/page_04.svg';
import page_05 from '../pages/page_05.svg';
import page_06 from '../pages/page_06.svg';
import page_07 from '../pages/page_07.svg';
import page_08 from '../pages/page_08.svg';
import page_09 from '../pages/page_09.svg';
import page_10 from '../pages/page_10.svg';
import page_11 from '../pages/page_11.svg';
import page_12 from '../pages/page_12.svg';
import page_13 from '../pages/page_13.svg';
import page_14 from '../pages/page_14.svg';

function Book() {
    return <div className="select-none mx-auto transition-all book-middle duration-500 z-50" id="book">
        <div className="border-nc3 border-2  my-page select-none" data-density="hard">
            <img src={page_01} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2  my-page select-none">
            <img src={page_02} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_03} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_04} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_05} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_06} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_07} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_08} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_09} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_10} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_11} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_12} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" >
            <img src={page_13} alt="PAGE" />
        </div>
        <div className="border-nc3 border-2 my-page select-none" data-density="hard">
            <img src={page_14} alt="PAGE" />
        </div>
    </div>
}

export default Book;