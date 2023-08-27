import { useState } from "react";

function EduInfo({ valueEd, setvalueEd }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const id = e.target.id;
    const newVal = e.target.value;
    setvalueEd({ ...valueEd, [id]: newVal }); //id used as the key to the appropriate value
    // setvalueEd([...valueEd, { [id]: newVal }]);
  }
  return (
    <>
      <h1>Educational Information</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="school">High-School Name *</label>
        <input
          type="text"
          id="school"
          value={valueEd.school}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="exam">Passing Exam Name</label>
        <input
          type="text"
          id="exam"
          value={valueEd.exam}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="passingYear">Year of Passing</label>
        <input
          type="number"
          id="passingYear"
          value={valueEd.passingYear}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="score">Score</label>
        <input
          type="number"
          id="score"
          value={valueEd.score}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="college">College Name</label>
        <input
          type="text"
          id="college"
          value={valueEd.college}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          value={valueEd.degree}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="admYear">Admission Year</label>
        <input
          type="number"
          id="admYear"
          value={valueEd.admYear}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="passingYearColl">Year of Passing</label>
        <input
          type="number"
          id="passingYearColl"
          value={valueEd.passingYearColl}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="cgpa">CGPA</label>
        <input
          type="number"
          id="cgpa"
          value={valueEd.cgpa}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default EduInfo;
