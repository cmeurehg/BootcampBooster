'use strict';

module.exports = (app, db) => {

  // GET all weeks
  app.get('/weeks', (req, res) => {
    db.weeks.findAll()
      .then(weeks => {
        res.json(weeks);
      });
  });

  // GET one week by id
  app.get('/week/:id', (req, res) => {
    const id = req.params.id;
    db.owners.find({
      where: { id: id}
    })
      .then(week => {
        res.json(week);
      });
  });

  // POST single week
  app.post('/week', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.weeks.create({
      name: name,
      gitlab_link: add
    })
      .then(newWeek => {
        res.json(newWeek);
      })
  });

  // PATCH single week
  app.patch('/week/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.weeks.find({
      where: { id: id }
    })
      .then(week => {
        return week.updateAttributes(updates)
      })
      .then(updatedWeek => {
        res.json(updatedWeek);
      });
  });

  // DELETE single week
  app.delete('/week/:id', (req, res) => {
    const id = req.params.id;
    db.weeks.destroy({
      where: { id: id }
    })
      .then(deletedWeek => {
        res.json(deletedWeek);
      });
  });
};