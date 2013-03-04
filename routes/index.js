var Task = function(task, completed) {
  this.task = task;
  this.completed = completed || false;
  this.completed_to_string = function() {
    return this.completed ? "Completed" : "Not Completed";
  };
}

var tasks = [
  new Task("Start learning node.js", true),
  new Task("Start learning express.js", true),
  new Task("Start making todo.app with express.js")
];

exports.index = function(req, res){
  res.render('index', { tasks: tasks });
};

exports.create_task = function(req, res){
  console.log(req.body);
  var task = new Task(req.body.task);
  tasks.push(task);
  res.redirect('/');
};

exports.update_task = function(req, res){
  console.log(req.body);
  var task = tasks[req.params["id"]];
  task.completed = (req.body.completed == 'on') ? true : false;
  res.render('index', { tasks: tasks });
};
