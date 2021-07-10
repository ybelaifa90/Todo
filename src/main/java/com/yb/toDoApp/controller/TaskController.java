package com.yb.toDoApp.controller;

import com.yb.toDoApp.Entity.Task;

import java.util.List;
import com.yb.toDoApp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class TaskController
{

    @Autowired
    private TaskService taskService;

    // GET ALL 
    @GetMapping("/todo")
    public List<Task> getAll()
    {
        return taskService.getAll();
    }
    // ADD TASK
    @PostMapping("/todo")
    public void addTask(@RequestBody Task task)
    {
        taskService.addTask(task);
    }
    // GET BY ID
    @GetMapping("/todo/{id}")
    public Task getTaskByID(@PathVariable int id)
    {
        return taskService.getTaskByID(id);
    }
     // delete 
     @DeleteMapping("/todo/{id}")
     public void deleteTask(@PathVariable int id)
     {
         taskService.deleteTask(id);
     }
    // update
   @PutMapping("/todo/{id}")
   public void updateTask(@PathVariable int id, String title, String description, String category)
    {
        taskService.updateTask(id, title, description, category);
    }

   





}