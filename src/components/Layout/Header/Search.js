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
            <div className="input-wrapper">
               <input placeholder="search.." className="search-input" name="text" type="text"  onChange={(e) => setKeyword(e.target.value)} />
            </div>  
        </form>
    </div>
  )
}
