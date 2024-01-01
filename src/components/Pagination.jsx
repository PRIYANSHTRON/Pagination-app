import React from 'react'

function Pagination({ postPerPage, totalPosts,Paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
      <ul className='pagination mt-2'>
          {pageNumbers.map((number) => {
              return <li key={number} className='page-item'>
                  <a href="!#" className='page-link' onClick={()=>{Paginate(number)}}>
                      {number}
                  </a>
              </li>
          })}
    </ul>
  )
}

export default Pagination