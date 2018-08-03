'use strict';

module.exports = (app, db) => {
  
  app.get('/skills', (req, res) => {
    db.skills.findAll()
      .then(skills => {
        res.json(skills);
      });
  });

  app.get('/skill/:id', (req, res) => {
    const id = req.params.id;
    db.skills.find({
      where: { id: id}
    })
      .then(skill => {
        res.json(skill);
      });
  });

  app.post('api/skill', (req, res) => {
    // console.log(req.body);
    console.log(req.body.name)
    console.log(req.body.week_id)

    const name = req.body.name;
    const week_id = req.body.week_id; //AJAX call from the front, grabbing data from the request.body  make the call....
 
    db.skills.create({
      name: name,
      week_id: week_id
    })
      .then(newSkill => {
      res.json(newSkill);
    });

  });

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
