import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "200px", margin: "40px auto", textAlign: "center" }}>
      <h1>Value: {value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
}
