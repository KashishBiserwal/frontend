import React from 'react'

export default function BrowseCategories() {
  return (
    <div className='category-card-container'>
        <h2>Browse Categories</h2>
        <div className='four-container'>
            <div className='category-card'>
                <img src='images/womens.jpg' alt='women'/>
                <p>WOMEN</p>
            </div>
            <div className='category-card'>
            <img src='images/mens.jpg' alt='men'/>
                <p>MEN</p>
            </div>
            <div className='category-card'>
            <img src='images/kids.jpg' alt='kids'/>
                <p>KIDS</p>
            </div>
            <div className='category-card'>
            <img src='images/figures.jpg' alt='figures'/>
                <p>DOLLS</p>
            </div>
        </div>
    </div>
  )
}
