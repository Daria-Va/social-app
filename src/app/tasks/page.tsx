"use client"
async function TasksPage() {

    const responce = await fetch('http://localhost:3000/api/tasks')
    const tasks = await responce.json()
    return (
        <>TasksPage</>
    )
}
export default TasksPage