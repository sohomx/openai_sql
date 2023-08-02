import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const sqlQuery = await generateQuery()
    setSqlQuery(generateQuery)
  }

  const generateQuery = async() => {
    const response = await fetch ("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription})
    })

    const data = await response.json()
    return data.response.trim()
  }
   
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>generate SQL with AI</h3>

      {/* input box for the user */}
      <form onSubmit={onSubmit}>
        <input
        type='text'
        name="query-description"
        placeholder='describe your query'
        onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="generate query"/>
        <pre>{sqlQuery}</pre>
      </form>
    </main>
  )
}

export default App
