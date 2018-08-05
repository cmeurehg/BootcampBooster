<<<<<<< HEAD
=======
'use strict';

module.exports = (app, db) => {
  
  app.get('/skills/:id?', (req, res) => {
   if(!req.params.id){
     db.skills.findAll()
      .then(skills => {
        res.json(skills);
      });
 
    }else{
    const id = req.params.id;
    db.skills.find({
      where: { id: id}
    })
      .then(skills => {
        res.json(skills);
      });
    }
  });

  app.post('/skills', (req, res) => {
    //TODO::Change week_id to actitivty_id (Week->activities->skills)
    // console.log(req.body);
    console.log(' :) ', req.body)
    

    const name = req.body.name;
    const week_id = req.body.week_id; //AJAX call from the front, grabbing data from the request.body  make the call....
    const type = req.body.type;
    db.skills.create({
      name: name,
      week_id: week_id,
      type: type
    })
      .then(newSkill => {
      res.json(newSkill);
    });

  });

  app.patch('/skills/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.skills.find({
      where: { id: id }
    })
      .then(skills => {
        return skills.updateAttributes(updates);
      })
      .then(updatedSkill => {
        res.json(updatedSkill);
      });
  });

  app.delete('/skills/:id', (req, res) => {
    const id = req.params.id;
    db.skills.destroy({
      where: { id: id }
    })
      .then(deletedSkill => {
        res.json(deletedSkill);
      });
  });

  app.get('skills/:id/activity',(req,res) => {
    //TODO::Get all the activites for the given skill




  });  

};
>>>>>>> ce3f05bb3ff083801bde21bd8cfecea738703e11
