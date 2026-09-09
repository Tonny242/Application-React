import { projects } from './data';
import ProjectCard from './components/ProjectCard';

export default function App() {
  return (
    <main className="wrap">
      <h1>Nos projets</h1>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
