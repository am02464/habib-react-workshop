export default function Todo({todo, index}){
    return <div>{`Todo ${index+1}: ${todo.title}`}</div>
}