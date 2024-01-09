import { Person } from "./Person";

export const Persons = ({ persons, filter, handleRemove }) => (
  persons
    .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map(person => <Person key={person.name} person={person} handleRemove={handleRemove} />)
);
