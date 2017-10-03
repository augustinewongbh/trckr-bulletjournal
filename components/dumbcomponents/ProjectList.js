import React, { Component } from "react";
import PropTypes from "prop-types";
import Project from "./Project";

const ProjectList = ({ all, projects, onEditClick, onDelete, onLinkClick }) => (
  <ul style={{ listStyle: "none" }}>
    {projects &&
      projects.map((project, idx) => (
        <li key={project.id}>
          <Project
            project={project}
            onEditClick={onEditClick}
            onDelete={onDelete}
            onLinkClick={onLinkClick}
          />
        </li>
      ))}
  </ul>
);

export default ProjectList;
