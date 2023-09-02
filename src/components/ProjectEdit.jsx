import { useState } from "react";

function ProjectEdit({ item, projects, setProjects }) {
  const [editedVal, setEditedVal] = useState(item.projectInfo);

  function handleChangeEdit(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setEditedVal({ ...editedVal, [id]: newVal });
  }
  function handleEditForm(e) {
    e.preventDefault();
    // MAP the new edited item in the projects array by iterating to its ID
    editedVal.project.trim() === ""
      ? setProjects([...projects])
      : setProjects(
          projects.map((mapItem) =>
            mapItem.id === item.id
              ? {
                  ...mapItem,
                  projectInfo: editedVal,
                }
              : mapItem
          )
        );
  }

  return (
    <>
      <form action="" onSubmit={handleEditForm}>
        <label htmlFor="project">Project Name</label>
        <input
          type="text"
          id="project"
          value={editedVal.project}
          onChange={handleChangeEdit}
        />
        <br />
        <label htmlFor="link">URL</label>
        <input
          type="url"
          id="link"
          value={editedVal.link}
          onChange={handleChangeEdit}
        />
        <br />
        <label htmlFor="github">GitHub Link</label>
        <input
          type="url"
          id="github"
          value={editedVal.github}
          onChange={handleChangeEdit}
        />
        <br />
        <label htmlFor="des">Brief Description</label>
        <textarea
          id="des"
          cols="30"
          rows="3"
          value={editedVal.des}
          onChange={handleChangeEdit}
        ></textarea>
        <br />
        <button type="submit">Apply Changes</button>
      </form>
    </>
  );
}

export default ProjectEdit;
