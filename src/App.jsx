import './global.css';
import styles from './App.module.css';

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jose"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </>
  )
}

export default App
