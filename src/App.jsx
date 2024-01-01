import { useEffect, useState } from "react"
import axios from "axios"
import Posts from "./components/Posts"
import Pagination from "./components/Pagination"


function App() {

  const [posts, setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
      setLoading(false)
    }

    fetchData()
  }, [])
  
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  const Paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }


  return (
    <div className="container">
      <h1 className="text-primary mt-4">Hello World</h1>
      <Posts loading={loading} posts={currentPost} />
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} Paginate={Paginate}/>
    </div>
    
  )
}

export default App
