import './Shelves.css';
import Quotes from './Quotes';

export default function Content(){

    return(<>
        <div className="book-container1">
            
        <h2 className="casetitle">Books Showcase</h2>

        <div className="shelf1">
                <p>this is book shelf1</p>
            </div>
            <div className="shelf2">
                <p>this is book shelf2</p>
            </div>
            <div>
                <div className="genre-shelves">
                    <ul>  <li><div className="gshelf1">coding</div></li>
                    <li><div className="gshelf2">fiction</div></li>
                    <li><div className="gshelf3">philosophy</div></li>
                   <li> <div className="gshelf4">psychologie</div></li></ul>
                  

                </div>
            </div>
        <Quotes/>
            
        </div>

        </>
    );
}