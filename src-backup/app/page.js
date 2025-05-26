import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Triumph AI Hub
        </h1>

        <p className={styles.description}>
          Your source of guides, and a place to share ideas.
        </p>

        {/* TODO: pull content from HowToGrid.md */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>AI Command Line Tools</h2>
            <p>Learn how to set up and use AI from the command line.</p>
          </div>

          <div className={styles.card}>
            <h2>Project-Based Memory</h2>
            <p>Add memory capabilities to your Cursor threads.</p>
          </div>

          <div className={styles.card}>
            <h2>RAG Applications</h2>
            <p>Create and fine-tune Retrieval-Augmented Generation applications.</p>
          </div>

          <div className={styles.card}>
            <h2>Prompt Engineering</h2>
            <p>Implement best practices for prompt engineering.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>AI Workflow Workshop © 2025</p>
      </footer>
    </div>
  )
}
