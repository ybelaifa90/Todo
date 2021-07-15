import React, {Component} from 'react';
//import DeleteIcon from '@material-ui/icons/Delete';
//import EditIcon from '@material-ui/icons/Edit';
//import ClassIcon from '@material-ui/icons/Class';  
//import { Link } from 'react-router-dom'


class TaskForm extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            data: []
        }
    }
    // ADD TASK
    addTask(e)
    {
        e.preventDefault(); //keeping prevent default will require refresh to see list instead of seeing it dynamically 
        console.log("add");
        var title = document.getElementById("task-Title-input").value;
        if(title == null)
        {
            window.alert("title is required to create task");
        }
        else
        {
            var description = document.getElementById("task-description-input").value;
            var category = document.getElementById("task-category-input").value;
            var api_url = "http://localhost:8080/todo";
            fetch(api_url , {
                method:"POST",
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify({
                            title: title,
                            category: category,
                            description: description,
                        })
            })
            .then(response =>
                {
                    console.log(response);
                }).then(window.location.href = "/todo");// end of then   
            }
        }

    
  
    render()
    {
      return ( 
      <div>
        
        <h1>To do </h1>
           
           {/* add task form*/} 
            <form id="form" >
                <label>
                    <input type="text"  id="task-Title-input" placeholder="Title"/><br></br><br></br>
                    <input type="text"  id="task-category-input"  placeholder="Category"/><br></br>
                    <br></br>
                   <textarea id="task-description-input" rows="15" cols="50" placeholder="Description"></textarea>
                    <br></br>
                </label>
                <button  onClick = {this.addTask} >add task</button>
            </form>
           
                

      </div>
      )
      
     
    }

}

export default TaskForm