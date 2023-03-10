import React, { useState } from "react";
import uuid from "uuid-random";
import "./App.css";
import { Books } from "./components/Books";
import { Form } from "./components/Form";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title, description) {
    const book = {
      id: uuid(),
      title,
      description,
      votes: 0,
    };

    setBooks((prevBooks) => [...prevBooks, book]);
  }

  return (
    <div className="App">
      <Form createBook={createBook} />
      <Books books={books} />
    </div>
  );
}

export default App;