import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p className="tech">{project.tech}</p>
      {open && <p className="desc">{project.description}</p>}
      <button onClick={() => setOpen(!open)}>{open ? 'Masquer' : 'Voir plus'}</button>
    </div>
  );
}
