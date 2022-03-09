import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
  //catch props
    return (
    <>
      {tasks.map((task, index) => (
      <Task
       key={index}
        task={task} 
      onDelete={onDelete} 
      onToggle={onToggle} />
      ))}
    </>
    // looping through the tasks outputing a component and then passing the tasks in as a prop
  )
}

export default Tasks
