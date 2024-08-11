import PropTypes from "prop-types";

export const TodoCard = ({todo}) => {
    const handleChange = () => {
        todo.completed = !todo.completed;
    }
    return (
        <div>
            <span>Title: {todo.title}</span>
            <input type="checkbox" value={todo.completed} onChange={handleChange}/>
        </div>
    )
}

TodoCard.propTypes = {
    todo: {
        title: PropTypes.string,
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool,
    }
};