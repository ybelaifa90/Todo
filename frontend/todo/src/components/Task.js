import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button';
import BeenhereIcon from '@material-ui/icons/Beenhere';


class TestComponent extends Component
{
    
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            data: []
        }
    }


    // DELETE TASK
    deleteTask(id)
    {
        var api_url = "http://localhost:8080/todo/" + id;
        fetch(api_url, {
                method: "DELETE",
            }).then(window.alert("deleted")).then(window.location.href = "/todo");
    }
    // ALWAYS DISPLAY TASK LIST ON MOUNTED COMPONENT 
    componentDidMount() 
    {
        var api_url = "http://localhost:8080/todo";
        fetch(api_url).then(response => response.json()).then(data => {
            this.setState({data: data})
            this.state.data.map((task) => (

                console.log("component mounted ==> "+task)

    
            ))
            this.setElementColor();
        })
    }
    // CHANGE COLOR  OF ELEMENT ACCORDINGLY
    setElementColor()
    {
        for (let i = 0; i < this.state.data.length; i++) 
        {
            if(this.state.data[i].finished == true) // if isFinished() == true
            {
                console.log("id found " +this.state.data[i].id+ " finished ? "+ this.state.data[i].finished);
                document.getElementsByClassName(this.state.data[i].id)[3].style.color = 'rgb(10, 240, 29)'; // txt color 
                document.getElementsByClassName(this.state.data[i].id)[3].innerHTML = 'Mark as Uncompleted';

                document.getElementsByClassName(this.state.data[i].id)[4].style.color = 'rgb(10, 240, 29)'; // icon color 
            }
            else // if isFinished() == false
            {
                console.log("id found "+"finished ? "+ this.state.data[i].finished);
                document.getElementsByClassName(this.state.data[i].id)[3].style.color = 'orange'; // txt color
                document.getElementsByClassName(this.state.data[i].id)[3].innerHTML = 'Mark as completed';
                document.getElementsByClassName(this.state.data[i].id)[4].style.color = 'orange';// icon color

            }
        }
    }
    // UPDATE TASK
    editTask(id)
    {
        
        var newTitle =   document.getElementsByClassName(id)[0].innerHTML;
        var newCat =   document.getElementsByClassName(id)[1].innerHTML;
        var newDesc =  document.getElementsByClassName(id)[2].innerHTML;

        var api_url = "http://localhost:8080/todo/" + id;
        fetch(api_url , 
            {   method:"PUT",
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify ({
                    title: newTitle,
                    category: newCat,
                   description: newDesc,
                })
                
            }).then(window.location.href = "/todo#"+id);
          
    }
    
    // UPDATE TASK STATUS     
    updateTaskStatus(id)
    {
      
        this.state.data.map((task) => (

            console.log("id(test) == "+task.id + "  isfinsihed =="+task.finished)
        ))
        /** set task as complete */
        if(document.getElementsByClassName(id)[3].style.color == 'orange')
        {
            console.log("setting task finished to true");
            var api_url = "http://localhost:8080/todo/status/" + id;
            fetch(api_url , 
            {   method:"PUT",
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify ({
                    finished:true,
                })
            }).then(window.location.href = "/todo#"+id);
            document.getElementsByClassName(id)[3].style.color = 'rgb(10, 240, 29)';
            document.getElementsByClassName(id)[3].innerHTML = 'Mark as Uncompleted';
            document.getElementsByClassName(id)[4].style.color = 'rgb(10, 240, 29)';


        }
        /* set task as incomplete */
        else if(document.getElementsByClassName(id)[3].style.color == 'rgb(10, 240, 29)') 
        {
            console.log("setting task finished to false");
            var api_url = "http://localhost:8080/todo/status/" + id;
            fetch(api_url , 
            {   method:"PUT",
                headers:{
                        'content-type':'application/json'
                },
                body:JSON.stringify ({
                    finished:false,
                })
            }).then(window.location.href = "/todo#"+id);

            document.getElementsByClassName(id)[3].style.color = 'orange';
            document.getElementsByClassName(id)[4].style.color = 'orange';
            document.getElementsByClassName(id)[3].innerHTML = 'Mark as completed';

        }
      
    }
  
    /* RENDER */
    render()
    {
      return (
           
        <div id="task-list-container">
            {/* display data*/}
            {this.state.data.map((task) => (
            <div id = "task-container" >
                <div class = "title"><p  class = {task.id}  style={{outline:"none"}}  contenteditable="true">{task.title}</p></div>
                <div class = "cat"> <p class = {task.id}  style={{outline:"none"}}  contenteditable="true" >{task.category} </p></div>
                <div class = "description"><p class =  {task.id}  style={{outline:"none"}}  contenteditable="true">{task.description} </p></div>
                <DeleteIcon id = "delete-icon" onClick={() => this.deleteTask(task.id)}></DeleteIcon>
                <Button id = "save-button" color="primary" onClick ={()=> {this.editTask(task.id)}} >save changes</Button>
                <p class = {task.id} style={{color:"orange", cursor:"pointer"}}  onClick ={()=> {this.updateTaskStatus(task.id)}}> Mark as completed</p><i class="fas fa-check"></i>
                <BeenhereIcon className = {task.id} style = {{color:"orange"}} ></BeenhereIcon>
            </div>
            ))}
        </div>
      )
      
    }
}

export default TestComponent
