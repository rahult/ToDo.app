var Task = function(task, completed) {
  this.task = task;
  this.completed = completed;
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

exports.post_task = function(req, res){
  console.log(req.body.task);
  var task = new Task(req.body.task);
  tasks.push(task);
  res.redirect('/');
};
