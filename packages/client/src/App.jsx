import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useQuery, gql } from '@apollo/client';


const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
        }
      }
    }
  }
`;


function DisplayBlogPosts() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.blogPosts.data.map(({ id, attributes }) => (
    <div key={id}>
      <h3>{attributes.Title}</h3>
      <b>Published at: {attributes.DatetimePublished}</b>
      <p>{attributes.Body}</p>
      <br />
    </div>
  ));
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <DisplayBlogPosts />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
