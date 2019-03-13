const states = require('../../../data/states');
const areas = require('../../../data/areas');

const createState = (knex, state) => {
  return knex('states').insert({
    state: state.state,
    state_total: state.stateTotal,
    state_percentage: state.statePercentage
  }, 'id')
    .then(stateId => {
      let areaPromises = [];

      const matchingAreas = areas.filter(area => area.state === state.state);
      matchingAreas.forEach(area => {
        areaPromises.push(
          createArea(knex, {
            area: area.area,
            state: area.state,
            best_season: area.bestSeason,
            total_boulders: area.totalBoulders,
            area_percentage: area.areaPercentage,
            nearest_city: area.nearestCity,
            state_id: stateId[0]
          })
        )
      });
      return Promise.all(areaPromises);
    })
};

const createArea = (knex, area) => {
  return knex('areas').insert(area);
};

exports.seed = function (knex, Promise) {
  return knex('areas').del()
    .then(() => knex('states').del())
    .then(() => {
      let statePromises = [];

      states.forEach(state => {
        statePromises.push(createState(knex, state));
      });

      return Promise.all(statePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
