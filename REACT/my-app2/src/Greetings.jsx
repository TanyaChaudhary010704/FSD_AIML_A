const Greetings = ({ name = "XYZ", age = 18 }) => {
  return (
    <div>
      <h1>{name} age is {age}</h1>
    </div>
  );
}
export default Greetings;