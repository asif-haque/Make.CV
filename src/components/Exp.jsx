import { useState } from "react";
import ExpEdit from "./ExpEdit";

function Exp({ valueExp, setValueExp, exp, setExp }) {
  const [isExpanded, setisExpanded] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  function handleChange(e) {
    const newVal = e.target.value;
    const id = e.target.id;
    setValueExp({ ...valueExp, [id]: newVal });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Checking if the project name is empty, no input will be taken
    valueExp.co.trim() === ""
      ? setExp([...exp])
      : setExp([
          ...exp,
          {
            expInfo: valueExp,
            id: crypto.randomUUID(),
          },
        ]);
    setValueExp({ co: "", pos: "", join: "", end: "", loc: "", des: "" });
  }

  return (
    <div>
      <h1>Work Experience</h1>
      {isExpanded && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="co">Company Name</label>
          <input
            type="text"
            id="co"
            value={valueExp.co}
            onChange={handleChange}
          />
          <label htmlFor="pos">Position</label>
          <input
            type="text"
            id="pos"
            value={valueExp.pos}
            onChange={handleChange}
          />
          <label htmlFor="join">Joining Date</label>
          <input
            type="date"
            id="join"
            value={valueExp.join}
            onChange={handleChange}
          />
          <label htmlFor="end">End Date(Optional)</label>
          <input
            type="date"
            id="end"
            value={valueExp.end}
            onChange={handleChange}
          />
          <label htmlFor="loc">Locaton</label>
          <input
            type="text"
            id="loc"
            value={valueExp.loc}
            onChange={handleChange}
          />
          <label htmlFor="des">Description</label>
          <textarea
            id="des"
            cols="30"
            rows="3"
            value={valueExp.des}
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit">Save</button>
        </form>
      )}
      <button onClick={() => setisExpanded(!isExpanded)}>
        {isExpanded ? "Cancel" : "Add"}
      </button>
      {/* Edit Info */}
      {exp.length !== 0 && (
        <button onClick={() => setShowEditForm(!showEditForm)}>
          {showEditForm ? "Hide" : "Edit"}
        </button>
      )}
      {exp.length !== 0 &&
        showEditForm &&
        exp.map((item, index) => {
          return (
            <div key={item.id}>
              {/* Edit form */}
              <>
                <h3>Project {index + 1}</h3>
                <ExpEdit item={item} exp={exp} setExp={setExp} />
              </>
            </div>
          );
        })}
    </div>
  );
}

export default Exp;
