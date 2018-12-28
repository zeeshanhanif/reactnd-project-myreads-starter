import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './book'

class Search extends React.Component {

    state = {
        query:'',
        //searchedBookList:[]
    }

    
    /*
    handleClick() {
        console.log("props",this.props);
        this.props.history.replace("/")
    }
    */

    updateQuery(query) {
        this.setState(()=>({
            query: query
        }));
        
        this.props.serachBooks(query);
        
    }
    /*
    searchBook(){
        BooksAPI.update(book,shelf)
        .then(data=>{
            console.log("book update> ",data);
            this.setState((prevState)=> ({
                booksList : prevState.booksList.map(b=> {
                    if(b.id === book.id){
                        b.shelf = shelf;
                    }
                    return b;
                })
            }));
        });
    }*/

    render() {
        const { query } = this.state;
        const { searchedBookList} = this.props;
        return (
            <div className="search-books">
            
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.props.onBackPress() }>Close</button>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" 
                            value={query} 
                            onChange={(event)=> {
                                this.updateQuery(event.target.value)
                            }}
                    />
                    </div>
                </div>
                
                <div className="search-books-results">
                {JSON.stringify(this.state.query)}
                    <ol className="books-grid">
                    
                        { searchedBookList.map((book,index) => {
                            return <Book key={index} book={book}  onUpdateShelf={this.props.onUpdateShelf}/>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
