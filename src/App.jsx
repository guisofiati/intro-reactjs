import { Post } from "./Post"
import { Header } from "./components/Header";

import './global.css';

function App() {
  return (
    <>
      <Header />
      <Post
        author="Jose"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      <Post
        author="Gabriel"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
    </>
  )
}

export default App
