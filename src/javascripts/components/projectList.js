import projectCardMaker from './project';
import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const buildProjectList = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';

      projects.forEach((project) => {
        domString += projectCardMaker.projectCardMaker(project);
      });

      utils.printToDom('#projectData', domString);
    })
    .catch((err) => console.error('Could not get projects to build list.', err));
};

export default {
  buildProjectList,
};
