import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [formData, setFormData] = useState({
    category: "",
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={(event) =>
            setFormData({ ...formData, text: event.target.value })
          }
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          {categories.map((category, index) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;