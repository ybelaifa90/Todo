package com.yb.toDoApp.Entity;

import com.yb.toDoApp.Core.ITask;

public class Task implements ITask
{


    private int taskID;
    private String title;
    private String description;
    private boolean finished = false;
	private String category; 

	public Task(int id, String title, String description,String category, boolean finished) // constructor 
    {
        this.taskID = id;
        this.title = title;
        this.description = description;
		this.category = category;
		this.finished = finished;
    }
	/* getters/ setters */
	@Override
	public int getID() 
	{
		return this.taskID;
	}
	public void setTaskID(int taskID) 
    {
		
	}
	@Override
	public boolean isFinished() 
    {
		return this.finished;
	}
	@Override
	public void setFinished(boolean finished) 
    {
		this.finished = finished;
	}

	
	@Override
	public void setDescription(String description) 
	{
		this.description = description;	
	}
	@Override
	public String getDescription() 
	{
		return this.description;
	}

	@Override
	public String getCategory() 
	{
		return this.category;
	}

	@Override
	public void setCategory(String category) 
	{
		 this.category = category;		
	}

	@Override
	public String getTitle() 
	{
		return this.title;
	}

	@Override
	public void setTitle(String title) 
	{
		this.title = title;		
	}








}