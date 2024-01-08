export const Total = ({exercises}) => (
  <div>
    <p>Number of exercises {exercises.reduce((total, current) => total + current)}</p>
  </div>
);

export default Total