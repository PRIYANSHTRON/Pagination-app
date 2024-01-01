import React from 'react'
import Loader from './Loader'

function Posts({ loading, posts }) {
    if (loading) {
        return <Loader />
    }
    else {
        return (

            <div>
                <ul className='list-group'>
                    {
                        posts.map((post) => {
                            return <li key={post.id} className='list-group-item'>{post.title}</li>
                        })
                    }
                </ul>
            </div>

        )
    }

}

export default Posts