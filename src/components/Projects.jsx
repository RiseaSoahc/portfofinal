import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="#https://project1.com">Simple To-Do List App</a>
          <p>
            A basic web application that enables users to create, modify, and remove tasks. The app<br />
            features a task input field for creating new tasks, a list to display all created tasks,<br />
            checkboxes to mark tasks as completed, and a mechanism to delete completed or <br />unnecessary 
            tasks. Additionally, users can edit existing tasks. This project is suitable for <br />
            beginners as it involves fundamental HTML, CSS, and JavaScript concepts.
          </p>
        </li>
        <li className="centerS">
          <a href="#https://project2.com">E-commerce Product Catalog</a>
          <p>
            A simplified e-commerce product catalog application inspired by Shopify. This project <br />
            involves creating a user interface that displays a collection of products, allowing <br />
            users to filter, search, and view product details. Key features include a grid or list <br />
            view of products with images, titles, and prices, a page that shows detailed information <br />
            about a selected product, a search bar for filtering products based on keywords, options <br />
            to filter products by category, price range, or other attributes, and a basic cart <br />
            implementation for adding and removing products. This project is a great way to <br />
            practice React components, state management, and data fetching using APIs.
          </p>
        </li>
        <li>
          <a href="#https://project3.com">Network Topology Visualization Tool</a>
          <p>
            A web-based application that enables users to visualize and analyze network topologies. <br />
            This tool can be utilized by network engineers, IT professionals, and students to <br />
            comprehend network structures, pinpoint potential issues, and plan network configurations. <br />
            Key features include a drag-and-drop interface for creating network diagrams with <br />
            various device types, the ability to define link properties, network traffic <br />
            simulation and performance analysis, troubleshooting capabilities, and the option <br />
            to export and import network topologies.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;