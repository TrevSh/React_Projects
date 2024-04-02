import propTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student?: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
//This will set default values for components with no prop data
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student