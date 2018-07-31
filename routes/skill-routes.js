'use strict';

module.exports = (app, db) => {
  // GET all skills
  app.get('/skills', (req, res) => {
    db.skill.findAll()
      .then(skills => {
        res.json(skills);
      });
  });

  // GET one  by id
  app.get('/skill/:id', (req, res) => {
    const id = req.params.id;
    db.skills.find({
      where: { id: id}
    })
      .then(skill => {
        res.json(skill);
      });
  });

  // POST single skill
  app.post('/skill', (req, res) => {
    console.log(' :) ', req.body)
    const name = req.body.name;
    const week_id = req.body.week_id; //AJAX call from the front, grabbing data from the request.body  make the call....
    const type = req.body.type;
    db.skill.create({
      name: name,
      week_id: week_id,
      type: type
    })
      .then(newSkill => {
      res.json(newSkill);
    });
  });

  // PATCH single skill
  app.patch('/skill/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.skills.find({
      where: { id: id }
    })
      .then(skill => {
        return skill.updateAttributes(updates);
      })
      .then(updatedSkill => {
        res.json(updatedSkill);
      });
  });

  app.delete('/skill/:id', (req, res) => {
    const id = req.params.id;
    db.skills.destroy({
      where: { id: id }
    })
      .then(deletedSkill => {
        res.json(deletedSkill);
      });
  });

};
