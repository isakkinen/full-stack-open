export const Filter = ({ value, handleChange }) => {
  return (
    <div>
      filter shown with <input value={value} onChange={handleChange} />
    </div>
  );
};
