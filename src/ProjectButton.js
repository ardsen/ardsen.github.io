function ProjectButton({ children, b, setIsModalOpen }) {
  return (<a href={b} target="_blank" rel="noreferrer"> <button>{children}</button></a>);
}

export default ProjectButton;
