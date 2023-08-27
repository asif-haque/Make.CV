// Have to make an array containing projects

import { useState } from "react";

function Project() {
  //   const [projects, setProjects] = useState([]);
  const [value, setvalue] = useState({
    project: "",
    link: "",
    github: "",
    des: "",
  });
  const [isExpanded, setisExpanded] = useState(false);

  function handleAdd() {
    setisExpanded(!isExpanded);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setvalue({ ...value, [id]: newVal }); //id used as the key to the appropriate value
  }
  return (
    <>
      <h1>Projects</h1>
      <button onClick={handleAdd}>+ Add Project</button>
      {/* {projects.map((project) => (
        <div>{project}</div>
      ))} */}
      {isExpanded && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="project">Project Name*</label>
          <input
            type="text"
            id="project"
            value={value.project}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="link">URL</label>
          <input
            type="url"
            id="link"
            value={value.link}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="github">GitHub Link*</label>
          <input
            type="url"
            id="github"
            value={value.github}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="des">Brief Description</label>
          <textarea
            id="des"
            cols="30"
            rows="3"
            value={value.des}
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit">Save</button>
        </form>
      )}
    </>
  );
}

export default Project;
