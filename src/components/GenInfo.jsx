import { useState } from "react";

function GenInfo({ valueGen, setvalueGen }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setvalueGen({ ...valueGen, [id]: newVal }); //id used as the key to the appropriate value
  }
  return (
    <div className="form-parts">
      <h1>General Information</h1>
      <form action="" onSubmit={handleSubmit} className="gen-info">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          value={valueGen.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email ID </label>
        <input
          type="email"
          id="email"
          value={valueGen.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone">Contact No. </label>
        <input
          type="tel"
          id="phone"
          value={valueGen.phone}
          onChange={handleChange}
        />
        <br />
      </form>
    </div>
  );
}

export default GenInfo;
