import 'bootstrap';
import projectList from './components/projectList';
import techList from './components/techList';
import '../styles/main.scss';

const init = () => {
  projectList.buildProjectList();
  techList.buildTechList();
};

init();
