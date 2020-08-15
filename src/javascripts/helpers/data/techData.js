import axios from 'axios';

const getTech = () => new Promise((resolve, reject) => {
  axios.get('https://nwalters-portfolio.firebaseio.com/tech.json')
    .then((response) => {
      const techObjects = response.data;
      const tech = [];

      if (techObjects) {
        Object.keys(techObjects).forEach((techId) => {
          techObjects[techId].id = techId;
          tech.push(techObjects[techId]);
        });
      }

      resolve(tech);
    })
    .catch((err) => reject(err));
});

export default {
  getTech,
};
