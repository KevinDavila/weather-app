const array = ["gato", "perro", "pajaro"];
const list = array.map((value, idx) => {
  console.log(value, idx);
    return <p>{value}</p>;
});
//initialized function
const Card = () => {
  return <div>{list}</div>;
};

export default Card;
