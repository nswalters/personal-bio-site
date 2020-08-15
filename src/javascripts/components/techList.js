import techCardMaker from './tech';
import techData from '../helpers/data/techData';
import utils from '../helpers/utils';

const buildTechList = () => {
  techData.getTech()
    .then((techs) => {
      let domString = `
        <div class="d-flex flex-wrap justify-content-center">
      `;

      techs.forEach((tech) => {
        domString += techCardMaker.techCardMaker(tech);
      });

      domString += '</div>';

      utils.printToDom('#techData', domString);
    })
    .catch((err) => console.error('Could not get tech to build list.', err));
};

export default {
  buildTechList,
};
