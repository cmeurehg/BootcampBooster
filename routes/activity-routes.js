'use strict';
//TODO::Make this look similar to skills.js
module.exports = (app, db) => {
  
  app.get('/activity', (req, res) => {
    db.activity.findAll()
      .then(activity => {
        res.json(activity);
      });
  });
   app.get('/activity/:id', (req, res) => {
    const id = req.params.id;
    db.activity.find({
      where: { id: id}
    })
      .then(activity => {
        res.json(activity);
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
      .then(newActivity => {
      res.json(newActivity);
    });
  });
   app.patch('/activity/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.activity.find({
      where: { id: id }
    })
      .then(activity => {
        return activity.updateAttributes(updates);
      })
      .then(updatedActivity => {
        res.json(updatedActivity);
      });
  });
   app.delete('/activity/:id', (req, res) => {
    const id = req.params.id;
    db.activity.destroy({
      where: { id: id }
    })
      .then(deletedActivity => {
        res.json(deletedActivity);
      });
  });
 }; 