import { useState } from "react";

function Project({ valuePr, setvaluePr, projects, setProjects }) {
  const [isExpanded, setisExpanded] = useState(false);

  function handleAdd() {
    setisExpanded(!isExpanded);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setProjects([...projects, valuePr]);
    setisExpanded(!isExpanded);
    // setvaluePr({ project: "", link: "", github: "", des: "" });
  }

  function handleChange(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setvaluePr({ ...valuePr, [id]: newVal }); //id used as the key to the appropriate value
  }

  function handleCancel() {
    setisExpanded(false);
  }
  return (
    <>
      <h1>Projects</h1>
      {!isExpanded && <button onClick={handleAdd}>+ Add Project</button>}
      {/* {projects.map((project) => (
        <div>{project}</div>
      ))} */}
      {isExpanded && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="project">Project Name*</label>
          <input
            type="text"
            id="project"
            value={valuePr.project}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="link">URL</label>
          <input
            type="url"
            id="link"
            value={valuePr.link}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="github">GitHub Link*</label>
          <input
            type="url"
            id="github"
            value={valuePr.github}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="des">Brief Description</label>
          <textarea
            id="des"
            cols="30"
            rows="3"
            value={valuePr.des}
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit">Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </>
  );
}

export default Project;
