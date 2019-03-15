const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.listen(app.get('port'), () => {
  console.log(`App is running on http://localhost:${app.get('port')}.`)
});

app.get('/api/v1/states', (req, res) => {
  database('states').select()
    .then(states => res.status(200).json(states))
    .catch(error => res.status(500).json({ error }));
});

app.get('/api/v1/areas', (req, res) => {
  database('areas').select()
    .then(areas => res.status(200).json(areas))
    .catch(error => res.status(500).json({ error }));
});

app.get('/api/v1/states/:id', (req, res) => {
  const { id } = req.params;
  database('states').where('id', id).select()
    .then(states => {
      states.length ? res.status(200).json(states) :
        res.status(404).json({
          error: `Could not find state with id ${id}`
        });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get('/api/v1/areas/:id', (req, res) => {
  const { id } = req.params;
  database('areas').where('id', id).select()
    .then(areas => {
      areas.length ? res.status(200).json(areas) :
        res.status(404).json({
          error: `Could not find area with id ${id}`
        });
    })
    .catch(error => res.status(500).json({ error }));
});

app.post('/api/v1/states', (req, res) => {
  const state = req.body;

  for (let requiredParameter of ['state', 'state_total', 'state_percentage']) {
    if (!state[requiredParameter]) {
      return res.status(422).send({
        error:
          `You are missing a "${requiredParameter}" property for this state. 
          The expected format: { 
            state: <String>, state_total: <Integer>, state_percentage: <Float> 
          }.`
      });
    }
  }
  database('states').insert(state, 'id')
    .then(state => {
      res.status(201).json({ id: state[0] })
    })
    .catch(error => {
      res.status(500).json({ error })
    });
});

app.post('/api/v1/areas', (req, res) => {
  const area = req.body;
  
  for (let requiredParameter of ['area', 'state', 'best_season', 'total_boulders', 'area_percentage', 'nearest_city']) {
    if (!area[requiredParameter]) {
      return res.status(422).send({
        error:
          `You are missing a "${requiredParameter}" property for this area. 
          The expected format: { 
            area: <String>, state: <String>, best_season: <String>, total_boulders: <Integer>, area_percentage: <Float>, nearest_city: <String> 
          }.`
      });
    }
  }
  
  database('areas').insert(area, 'id')
    .then(area => {
      res.status(201).json({ id: area[0] })
    })
    .catch(error => {
      res.status(500).json({ error })
    });
});

app.delete('/api/v1/states/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let stateFound = false;

  database('states').select()
    .then(states => {
      states.forEach(state => {
        if (state.id === id) {
          stateFound = true;
        }
      });
      if (!stateFound) {
        return res.status(404).json({
          error: `Sorry, the state with the id ${id} does not exist.`
        });
      } else {
        database('states').where('id', id).del()
          .then(() => {
            res.status(202).json(`You've successfully deleted the state with the id ${id}.`);
          })
          .catch(error => res.status(500).json({ error }))
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete('/api/v1/areas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let areaFound = false;
  database('areas').select()
    .then(areas => {
      areas.forEach(state => {
        if (state.id === id) {
          areaFound = true;
        }
      });
      if (!areaFound) {
        return res.status(404).json({
          error: `Sorry, the state with the id ${id} does not exist.`
        });
      } else {
        database('areas').where('id', id).del()
          .then(() => {
            res.status(202).json(`You've successfully deleted the state with the id ${id}.`);
          })
          .catch(error => res.status(500).json({ error }))
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = app;