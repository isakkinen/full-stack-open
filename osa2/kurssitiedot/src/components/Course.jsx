import { Total } from "./Total";
import { Content } from "./Content";
import { Header } from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part => part.exercises)} />
    </div>
  );
};

export default Course