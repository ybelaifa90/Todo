package com.yb.toDoApp.service;

import java.util.List;
import com.yb.toDoApp.Entity.Task;
import com.yb.toDoApp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService 
{


    @Autowired
    private TaskRepository taskRepository ;


    // ADD TASK
    public void addTask(Task task)
    {
        taskRepository.addTask(task);
    }
    // GET BY ID
    public Task getTaskByID(int id)
    {
        return taskRepository.getTaskByID(id);
    }
    //GET ALL
    public List<Task> getAll()
    {
        return taskRepository.getAll();
    }
    // UPDATE
    public void  updateTask(int id,Task task)
    {
        taskRepository.updateTask( task,id);
    }
    //UPDATE TASK STATUS
    public void  updateTaskStatus(int id,Task task)
    {
        taskRepository.updateTaskStatus(task, id);
    }
    // DELETE
    public void deleteTask(int taskID)
    {
        taskRepository.deleteTask(taskID);
    }
  





}
