import React, { useState, useMemo } from "react";
import { DevProjects } from "../profile/projectslist";

function Search() {
  const { devProjects, myStacks } = DevProjects();
  const [filterValues, setFilterValues] = useState("");

  const filteredProjects = useMemo(() => {
    const loweredInput = filterValues.toLowerCase();
    return devProjects.filter(
      (project) =>
        project.project.toLowerCase().includes(loweredInput) ||
        project.projectDes.toLowerCase().includes(loweredInput) ||
        project.stack.toLowerCase().includes(loweredInput)
    );
  }, [devProjects, filterValues]);

  function SearchField() {
    return (
      <div className="search_fie">
        <input
          type="text"
          name="filterValues"
          value={filterValues}
          onChange={(e) => setFilterValues(e.target.value)}
          placeholder="Search for a Project"
        />
      </div>
    );
  }

  return { SearchField, projects: filteredProjects, myStacks };
}

export default Search;
