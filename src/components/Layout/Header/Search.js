import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate()
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        }else{
            navigate('/products')
        }
    };

  return (
    <div className='search'>
        <form onSubmit={searchSubmitHandler}>
            <div className="search-container">
                <input placeholder="Search..." className="search-input" type="text" onChange={(e) => setKeyword(e.target.value)}/>
                <div className="search-icon">
                    <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth="32" strokeMiterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                        <path d="M338.29 338.29L448 448" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" stroke="currentColor" fill="none"></path>
                    </svg>
                </div>
            </div>
        </form>
    </div>
  )
}
