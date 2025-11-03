import { useState } from "react";
import SmileCard from "./SmileCard.jsx";
import "./App.css";

export default function App() {
  const [smileList, setSmileList] = useState([
    { id: 1, icon: "😀", name: "Happy", votes: 0 },
    { id: 2, icon: "😂", name: "Laugh", votes: 0 },
    { id: 3, icon: "😭", name: "Cry", votes: 0 },
  ]);

  const [winner, setWinner] = useState(null);
  const [showVotes, setShowVotes] = useState(false);

  function addVote(smileId) {
    const updatedSmiles = smileList.map((smile) => {
      if (smile.id === smileId) {
        return { ...smile, votes: smile.votes + 1 };
      } else {
        return smile;
      }
    });
    setSmileList(updatedSmiles);
  }

  function showResults() {
    let maxVotes = 0;
    let topSmile = null;

    for (const smile of smileList) {
      if (smile.votes > maxVotes) {
        maxVotes = smile.votes;
        topSmile = smile;
      }
    }

    setWinner(topSmile);
    setShowVotes(true);
  }

  function renderWinner() {
    if (winner !== null) {
      return (
        <p className="winner">
          Winner: {winner.icon} ({winner.name}) — {winner.votes} votes
        </p>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <h2>Vote for the best smile</h2>

      <div className="smiles">
        {smileList.map((smile) => {
          return (
            <SmileCard
              key={smile.id}
              icon={smile.icon}
              name={smile.name}
              votes={smile.votes}
              showVotes={showVotes}
              onVote={() => addVote(smile.id)}
            />
          );
        })}
      </div>

      <button onClick={showResults}>Show Results</button>

      {renderWinner()}
    </div>
  );
}