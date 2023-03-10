import React from 'react'

export function Book(props) {
  const { title, description, votes } = props;
  return (
    <div className="book" data-testid="book">
      <h2 className="book-title">{title}</h2>
      <span data-testid="votes">votes: {votes}</span>
      <p>{description}</p>
    </div>
  );
}