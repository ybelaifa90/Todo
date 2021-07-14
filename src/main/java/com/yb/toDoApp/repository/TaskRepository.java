
package com.yb.toDoApp.repository;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.yb.toDoApp.Entity.Task;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public class TaskRepository
{


    @Autowired
    private JdbcTemplate jdbcTemp;


    public TaskRepository() throws SQLException 
    {

    }

    // ADD TASK
    public void addTask(@RequestBody Task task )
    {
        String title = task.getTitle();
        String description = task.getDescription();
        boolean finished = task.isFinished();
		String category = task.getCategory();
        final String sql = "insert into Task(TaskID, title, description, finished, category) values (null,?,?,?,?)";
        jdbcTemp.update(sql,title,description,finished,category);
    }
    // GET BY ID 
    public Task getTaskByID(int id)
    {
        Task task;
        final String sql = "SELECT * FROM Task WHERE TaskID = ?";
        task= jdbcTemp.queryForObject(sql, new TaskMapper(), id);
        return task;
    }
    // GET ALL 
    public List<Task> getAll()
    {
        final String sql = "SELECT * FROM Task";
        List<Task> taskList = new ArrayList<>();
        taskList = jdbcTemp.query(sql, new TaskMapper());
         return taskList;
    }
    // UPDATE 
    public void updateTask(Task task, int id)
    {
            
            if(task.getTitle() != null)
            {
            
                final String sql = "update task set title = ?  where taskID = ?";
                int i =  jdbcTemp.update(sql, task.getTitle() ,id);
                System.out.println("feedback "+i);
               
            }
            if(task.getDescription() != null)
            {
                final String sql = "update Task set description = ?  where TaskID = ?";
                jdbcTemp.update(sql,task.getDescription(),id);
            }
            if(task.getCategory()!= null)
            {
                final String sql = "update Task set category= ?  where TaskID = ?";
                jdbcTemp.update(sql,task.getCategory(),id);
            }
    }
    // DELETE 
    public void deleteTask(int taskID)
    {
        final String sql = "DELETE FROM Task WHERE taskID=?";
        jdbcTemp.update(sql, taskID);
    }
    /* MAPPER  CLASS*/
    private class TaskMapper implements RowMapper<Task>
    {

        @Override
        public Task mapRow(ResultSet rs, int arg1) throws SQLException 
        {
            Task task = new Task(

            rs.getInt("TaskID"),
            rs.getString("title"),
            rs.getString("description"),
            rs.getString("category"),
            rs.getBoolean("finished")
	        );
            return task;
        }

    }
  


}






