import projectsData from '../../data/projectsData';

function ProjectSwitcher() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div>
      <img src={projectsData[selectedProject].image.src} alt={projectsData[selectedProject].image.alt} />
      <h3>{projectsData[selectedProject].title}</h3>
    </div>
  );
}

export default ProjectSwitcher;
