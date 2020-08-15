const projectCardMaker = (project) => {
  let domString = `
  <div class="card projCard">
    <img class="card-img-top" src="${project.imageURL}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div class="d-flex flex-row justify-content-around projTech">`;

  project.technologies.forEach((tech) => {
    domString += `
      <p>${tech}</p>
    `;
  });

  domString += `
      </div>
      <a href="${project.demoURL}" target="_blank" class="btn btn-primary">Live Demo<i class="fas fa-external-link-alt pl-2"></i></a>
      <a href="${project.githubURL}" target="_blank" class="btn btn-view-source">View Source<i class="fab fa-github pl-2"></i></a>
    </div>
  </div>
  `;

  return domString;
};

export default {
  projectCardMaker,
};
