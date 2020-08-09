import 'bootstrap';
import projectList from './components/projectList';
import '../styles/main.scss';

const init = () => {
  projectList.buildProjectList();
};

init();
