import React from 'react'
import { Book } from '../Book'

export function Books({ books }) {
  return (
    <div className="books">
      {!!books && books.length > 0 ? books.map(({ id, title, description, votes }) => {
        return (
          <Book
            key={id}
            title={title}
            description={description}
            votes={votes}
          />
        )
      }) : <p>No books created!</p>}
    </div>
  )
}