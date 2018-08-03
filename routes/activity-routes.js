'use strict';
//TODO::Make this look similar to skills.js
module.exports = (app, db) => {
  
  app.get('/activiti', (req, res) => {
    db.activity.findAll()
      .then(skills => {
        res.json(skills);
      });
  });

  app.get('/activity/:id', (req, res) => {
    const id = req.params.id;
    db.activity.find({
      where: { id: id}
    })
      .then(skill => {
        res.json(skill);
      });
  });

  app.post('/activity', (req, res) => {
    console.log(' :) ', req.body)
    const name = req.body.name;
    const week_id = req.body.week_id; //AJAX call from the front, grabbing data from the request.body  make the call....
    const type = req.body.type;
    db.activity.create({
      name: name,
      week_id: week_id,
      type: type
    })
      .then(newSkill => {
      res.json(newSkill);
    });
  });

  app.patch('/activity/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.activity.find({
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
    db.activity.destroy({
      where: { id: id }
    })
      .then(deletedSkill => {
        res.json(deletedSkill);
      });
  });

};