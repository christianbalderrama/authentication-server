import axios from "axios";
import {Button} from "react-bootstrap";

export default function App() {
  async function handleClick() {
    console.log("I'm clicked!");
    const result = await axios.get(process.env.REACT_APP_API_URL);

    console.log("RESULT >>> ", result);
  }

  return (
    <>
      <h1>{"Hello, World!"}</h1>
      <Button bsSize="sm" onClick={() => handleClick()}>
        {"Test"}
      </Button>
    </>
  );
}
