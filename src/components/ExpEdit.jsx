import { useState } from "react";

function ExpEdit({ item, exp, setExp }) {
  const [editedVal, setEditedVal] = useState(item.expInfo);

  function setEditedValEdit(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setEditedVal({ ...editedVal, [id]: newVal });
  }
  function handleEditForm(e) {
    e.preventDefault();
    // MAP the new edited item in the exp array by iterating to its ID
    editedVal.co.trim() === ""
      ? setExp([...exp])
      : setExp(
          exp.map((mapItem) =>
            mapItem.id === item.id
              ? {
                  ...mapItem,
                  expInfo: editedVal,
                }
              : mapItem
          )
        );
  }
  function handleDelete() {
    setExp(exp.filter((filterItem) => filterItem.id !== item.id));
  }

  return (
    <>
      <form action="" onSubmit={handleEditForm}>
        <label htmlFor="co">Company Name</label>
        <input
          type="text"
          id="co"
          value={editedVal.co}
          onChange={setEditedValEdit}
        />
        <label htmlFor="pos">Position</label>
        <input
          type="text"
          id="pos"
          value={editedVal.pos}
          onChange={setEditedValEdit}
        />
        <label htmlFor="join">Joining Date</label>
        <input
          type="date"
          id="join"
          value={editedVal.join}
          onChange={setEditedValEdit}
        />
        <label htmlFor="end">End Date(Optional)</label>
        <input
          type="date"
          id="end"
          value={editedVal.end}
          onChange={setEditedValEdit}
        />
        <label htmlFor="loc">Locaton</label>
        <input
          type="text"
          id="loc"
          value={editedVal.loc}
          onChange={setEditedValEdit}
        />
        <label htmlFor="des">Description (Optional)</label>
        <textarea
          id="des"
          cols="30"
          rows="3"
          value={editedVal.des}
          onChange={setEditedValEdit}
        ></textarea>
        <br />
        <button type="submit">Apply Changes</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
}

export default ExpEdit;
