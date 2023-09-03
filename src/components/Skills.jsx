import { useState } from "react";

function Skills({ valueSkill, setValueSkill, skills, setSkills }) {
  const [isExpanded, setisExpanded] = useState(false);
  const [edit, setEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    valueSkill.trim() === ""
      ? setSkills([...skills])
      : setSkills([
          ...skills,
          { skill: valueSkill.trim(), id: crypto.randomUUID() },
        ]);
    setValueSkill("");
  }
  function handleDelete(id) {
    setSkills(skills.filter((filterItem) => filterItem.id !== id));
  }

  return (
    <div className="form-parts">
      <h1>Skills</h1>
      {isExpanded && (
        <>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              id="skill"
              placeholder="Add Skill"
              value={valueSkill}
              onChange={(e) => setValueSkill(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </>
      )}
      <button onClick={() => setisExpanded(!isExpanded)}>
        {isExpanded ? "Cancel" : "Add"}
      </button>
      {skills.length !== 0 && (
        <button onClick={() => setEdit(!edit)}>
          {edit ? "Cancel" : "Edit"}
        </button>
      )}
      {edit &&
        skills.map((item) => (
          <>
            <div>
              {item.skill}
              <button onClick={() => handleDelete(item.id)}>Delete</button>{" "}
            </div>
          </>
        ))}
    </div>
  );
}

export default Skills;
