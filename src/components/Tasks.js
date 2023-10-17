// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day : 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at school',
//         day : 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Grocery Shopping',
//         day : 'Feb 5th at 2:30pm',
//         reminder: false,
//     }
// ]

// how can we loop through these and output something.
// by using map,filter etc

//want this to be part of component
// hook -> usestate used inside a function

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task)=>(
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks