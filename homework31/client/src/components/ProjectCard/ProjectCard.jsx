import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './ProjectCard.css';

export default function ProjectCard({ id, title, description, priority, onClick, onDelete }) {
  const handleClick = () => {
    onClick && onClick(id);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete && onDelete(id);
  }

  return (
    <div className='ProjectCard' onClick={handleClick}>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description}
      </p>
      <button className="ProjectCard-delete" onClick={handleDelete}>Delete</button>
    </div>
  )
}