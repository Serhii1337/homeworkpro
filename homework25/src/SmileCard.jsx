import "./SmileCard.css"

export default function SmileCard({ icon, name, votes, showVotes, onVote }) {
  function handleClick() {
    onVote();
  }

  if (showVotes) {
    return (
      <div className="smile" onClick={handleClick}>
        <span className="icon">{icon}</span>
        <p>{name}</p>
        <p>Votes: {votes}</p>
      </div>
    );
  } else {
    return (
      <div className="smile" onClick={handleClick}>
        <span className="icon">{icon}</span>
        <p>{name}</p>
      </div>
    );
  }
}