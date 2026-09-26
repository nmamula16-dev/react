import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card-container">
      <div className="badge">React + Vite</div>
      <h1>მოგესალმებით თქვენს React პროექტში! 🚀</h1>
      <p className="subtitle">
        პროექტი წარმატებით შეიქმნა. შეგიძლიათ დაიწყოთ კოდის წერა!
      </p>

      <div className="counter-card">
        <button onClick={() => setCount((count) => count + 1)}>
          დაწკაპუნების რაოდენობა: {count}
        </button>
        <p>
          შეცვალეთ <code>src/App.jsx</code> ფაილი და შეინახეთ HMR-ის შესამოწმებლად.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <h3>⚡ Vite-ის სიჩქარე</h3>
          <p>მყისიერი Hot Module Replacement (HMR) და სწრაფი build სისტემა.</p>
        </div>
        <div className="feature-item">
          <h3>⚛️ React 18</h3>
          <p>თანამედროვე კომპონენტური არქიტექტურა და React Hooks.</p>
        </div>
        <div className="feature-item">
          <h3>🛠️ მზა სტრუქტურა</h3>
          <p>მზადაა თქვენი იდეების და ახალი კომპონენტების დასამატებლად.</p>
        </div>
      </div>
    </div>
  )
}

export default App
