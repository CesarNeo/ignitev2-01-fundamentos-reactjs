import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Cesar Emmanuel"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sapiente, amet voluptatibus officia distinctio mollitia repellat illo rem, tempore labore dignissimos dolor? Recusandae corporis tempora excepturi nam nihil iure dolor."
          />

          <Post
            author="Cesar Emmanuel"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sapiente, amet voluptatibus officia distinctio mollitia repellat illo rem, tempore labore dignissimos dolor? Recusandae corporis tempora excepturi nam nihil iure dolor."
          />
        </main>
      </div>
    </>
  )
}

export default App
