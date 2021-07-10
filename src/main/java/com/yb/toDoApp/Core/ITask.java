package com.yb.toDoApp.Core;

public interface ITask 
{

    public int getID();
    public String getTitle();
    public void setTitle(String title);
    public void setDescription(String description);
    public String getDescription();
    public String getCategory();
    public void setCategory(String category);
    public boolean isFinished();
    public void setFinished(boolean finished);
    
}
