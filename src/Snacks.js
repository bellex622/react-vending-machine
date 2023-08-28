import { useParams } from "react-router-dom";

function Snacks() {
  const { name } = useParams();
  return (
    <div>
      <h1>You must like {name}.</h1>
    </div>
  );
}
export default Snacks;