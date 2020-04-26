projects = [{
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "This project is archived",
    screenshot: "",
    description: "Testing the availability!",
    technologiesUsed: "Javascript!",
    available: false,
    url: "www.google.com",
    githubUrl: "www.yahoo.com"
  },
  {
    title: "This project is NOT archived",
    screenshot: "",
    description: "Testing the availability!",
    technologiesUsed: "Javascript!",
    available: true,
    url: "www.reddit.com",
    githubUrl: "www.cnn.com"
  }
]

const buildCard = (title, screenshot, description, technologiesUsed, url, githubURL, altText = 'Screenshot of project') => {
  domString = `
<div class="card">
  <div class="card-body">
    <div class="card-header">
      <h2>${title}</h2>
    </div>
    <div class="card-image">
      <img src="${screenshot}" alt="${altText}">
    </div>
    <div class="card-content">
      <p>${description}</p>
      <p>${technologiesUsed}</p>
    </div>
    <div class="card-footer">
      <p>${url}</p>
      <p>${githubURL}</p>
    </div>
  </div>
</div>`;

  return domString;
};

const printToDom = (selector, domString) => {

  const selectedDiv = document.querySelector(selector)
  selectedDiv.innerHTML = domString;
}

const createProjectCards = (projectsArray) => {
  let domString = '';

  for (let index = 0; index < projectsArray.length; index++) {
    const project = projectsArray[index];

    if (project.available === false) {
      continue
    };

    let title = project.title
    let sshot = project.screenshot
    let desc = project.description
    let tech = project.technologiesUsed
    let url = project.url
    let github = project.githubUrl

    domString += buildCard(title, sshot, desc, tech, url, github);

    printToDom('#projectsPage', domString);

  }
};

const init = () => {
  createProjectCards(projects);
};

init();