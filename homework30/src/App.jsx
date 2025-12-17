import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchSwapi } from "./actions";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const [endpoint, setEndpoint] = useState("people/1");

  const { loading, data, error } = useSelector((state) => state);

  const handleGet = () => {
    dispatch(fetchSwapi(endpoint));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>SWAPI</h1>

      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />

      <button onClick={handleGet}>Get info</button>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <pre style={{ background: "#eee", padding: "10px" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
