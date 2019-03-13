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
    .catch(error => res.status(500).json({ error }))
});

app.get('/api/v1/areas', (req, res) => {
  database('areas').select()
    .then(areas => res.status(200).json(areas))
    .catch(error => res.status(500).json({ error }))
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

module.exports = app;