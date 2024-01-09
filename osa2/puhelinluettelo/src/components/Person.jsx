export const Person = ({ person, handleRemove }) => (
  <p>{person.name} {person.number} <button onClick={() => handleRemove(person)}>delete</button></p>
);
