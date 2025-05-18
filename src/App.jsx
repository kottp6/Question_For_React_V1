import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css"
import { useState } from 'react';
import { Questions } from './data';

function App() {

  const[selectedId, setSelectedId]  = useState(null);
  
  function handleClick(id){
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <>
     <div className='flashcard'>
      <h1>Questions & Answers For React <br />But you search about this questions</h1>
      {Questions.map((question) => {
        return (
          <div key={question.id} className={selectedId === question.id ? "selected" : ""}
          onClick={() => handleClick(question.id)}>
            <p>{question.id === selectedId ? question.answer : question.question}</p>
          </div>
        )
      })}
     </div>
    </>
  )
}

export default App
