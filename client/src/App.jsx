import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", queryDescription)
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
      </form>
    </main>
  )
}

export default App
