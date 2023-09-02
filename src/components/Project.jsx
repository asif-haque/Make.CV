import { useState } from "react";
import ProjectEdit from "./ProjectEdit";

function Project({ valuePr, setvaluePr, projects, setProjects }) {
  const [isExpanded, setisExpanded] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  function handleAdd() {
    setisExpanded(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Checking if the project name is empty, no input will be taken
    valuePr.project.trim() === ""
      ? setProjects([...projects])
      : setProjects([
          ...projects,
          {
            // projectInfo: {
            //   projectArr: valuePr.project,
            //   linkArr: valuePr.link,
            //   githubArr: valuePr.github,
            //   desArr: valuePr.des,
            // },
            projectInfo: valuePr,
            id: crypto.randomUUID(),
          },
        ]);
    setisExpanded(false);
    setvaluePr({ project: "", link: "", github: "", des: "" });
  }

  function handleChange(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setvaluePr({ ...valuePr, [id]: newVal }); //id used as the key to the appropriate value
  }

  function handleHide() {
    setisExpanded(false);
  }
  function handleEdit() {
    // should open a form same as before to let you edit
    setShowEditForm(true);
  }

  return (
    <>
      <h1>Projects</h1>
      {!isExpanded && <button onClick={handleAdd}>+ Add Project</button>}
      {isExpanded && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="project">Project Name</label>
          <input
            type="text"
            id="project"
            value={valuePr.project}
            onChange={handleChange}
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
          <label htmlFor="github">GitHub Link</label>
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
          <button onClick={handleHide}>Hide</button>
        </form>
      )}
      {/* Edit option --- mapping the projects array in this area */}
      {!showEditForm && projects.length !== 0 && (
        <button onClick={handleEdit}>Edit Projects</button>
      )}
      {projects.length !== 0 && showEditForm && (
        <button onClick={() => setShowEditForm(false)}>Hide</button>
      )}
      {projects.length !== 0 &&
        showEditForm &&
        projects.map((item, index) => {
          return (
            <div key={item.id}>
              {/* Edit form */}
              {
                <>
                  <h3>Project {index + 1}</h3>
                  <ProjectEdit
                    item={item}
                    projects={projects}
                    setProjects={setProjects}
                  />
                </>
              }
            </div>
          );
        })}
    </>
  );
}

export default Project;
