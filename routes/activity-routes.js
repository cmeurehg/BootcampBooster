'use strict';
//TODO::Make this look similar to skills.js
module.exports = (app, db) => {
  
<<<<<<< HEAD
  app.get('/activiti', (req, res) => {
    db.activity.findAll()
      .then(skills => {
        res.json(skills);
      });
  });

  app.get('/activity/:id', (req, res) => {
=======
  app.get('/activity', (req, res) => {
    db.activity.findAll()
      .then(activity => {
        res.json(activity);
      });
  });
   app.get('/activity/:id', (req, res) => {
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
    const id = req.params.id;
    db.activity.find({
      where: { id: id}
    })
<<<<<<< HEAD
      .then(skill => {
        res.json(skill);
      });
  });

  app.post('/activity', (req, res) => {
=======
      .then(activity => {
        res.json(activity);
      });
  });
   app.post('/activity', (req, res) => {
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
    console.log(' :) ', req.body)
    const name = req.body.name;
    const week_id = req.body.week_id; //AJAX call from the front, grabbing data from the request.body  make the call....
    const type = req.body.type;
    db.activity.create({
      name: name,
      week_id: week_id,
      type: type
    })
<<<<<<< HEAD
      .then(newSkill => {
      res.json(newSkill);
    });
  });

  app.patch('/activity/:id', (req, res) => {
=======
      .then(newActivity => {
      res.json(newActivity);
    });
  });
   app.patch('/activity/:id', (req, res) => {
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
    const id = req.params.id;
    const updates = req.body.updates;
    db.activity.find({
      where: { id: id }
    })
<<<<<<< HEAD
      .then(skill => {
        return skill.updateAttributes(updates);
      })
      .then(updatedSkill => {
        res.json(updatedSkill);
      });
  });

  app.delete('/skill/:id', (req, res) => {
=======
      .then(activity => {
        return activity.updateAttributes(updates);
      })
      .then(updatedActivity => {
        res.json(updatedActivity);
      });
  });
   app.delete('/activity/:id', (req, res) => {
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
    const id = req.params.id;
    db.activity.destroy({
      where: { id: id }
    })
<<<<<<< HEAD
      .then(deletedSkill => {
        res.json(deletedSkill);
      });
  });

};
=======
      .then(deletedActivity => {
        res.json(deletedActivity);
      });
  });
 }; 
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
