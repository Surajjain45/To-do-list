
var tasks = []
console.log(typeof(Array.from((tasks))))
get_data();
start();

function save_data(){
     localStorage.setItem('tasks',JSON.stringify(tasks));
   // localStorage.setItem('tasks','');
}

function get_data(){
    var storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}
function start(){
   

    var task_container = document.querySelector(".main_box")
    task_container.innerHTML = '<h3 class="task_heading">Tasks : </h3>';
    
    for(var i=0;i<tasks.length;i++){
            var task_text = tasks[i];

            var task = document.createElement("div");
            task.className = "box";

            var taskInput = document.createElement('input');
                taskInput.type = 'text';
                taskInput.value = task_text;
                taskInput.disabled = true;
                taskInput.className = "task_input";

                var editButton = document.createElement('i');
                editButton.className = "fa-solid fa-pen edit"
                editButton.title = "Edit this task"
                 editButton.setAttribute('data-index', i);
                 editButton.onclick = edittask;
               

                var deleteButton = document.createElement('i');
                deleteButton.className = "fa-solid fa-trash delete"
                deleteButton.title = "Delete this task"
                 deleteButton.setAttribute('data-index', i);
                deleteButton.onclick = deltask;

                task.appendChild(taskInput);
                task.appendChild(editButton);
                task.appendChild(deleteButton);

            task_container.appendChild(task)
   
}
 save_data();

}

function addnewtask(){
    console.log("ab yhi hoga")

    var input_task = document.querySelector(".new_item");
    
    if(input_task.value=="")
    return;

    let task_des = input_task.value;
    tasks = Array.from(tasks);
    tasks.push(task_des)
    console.log(task_des);

    input_task.value=""
    start();
    // save_data();

}

function edittask(){
    var index = parseInt(this.getAttribute('data-index'));
    var edit_btn = this;
    const input_box = this.parentNode.querySelector(".task_input")
    console.log(input_box)
    console.log(input_box.value)

     if(input_box.disabled){
         console.log("krna")
         input_box.disabled =false;
         input_box.focus()
         edit_btn.title = "Save this task";
         edit_btn.classList.remove("fa-pen")
         edit_btn.classList.add("fa-check")
         edit_btn.classList.add("save")
     }

     else{
         tasks[index] = input_box.value;
         input_box.disabled = true;
         edit_btn.title = "Edit this task";
         edit_btn.classList.remove("fa-check")
         edit_btn.classList.remove("save")
          edit_btn.classList.add("fa-pen")
          start()
     }
    
     
} 

function deltask(){
    var index = parseInt(this.getAttribute('data-index'));
    tasks.splice(index,1);
    start();
}



  







 





