import propTypes from 'prop-types'

function List(props){

    const itemList = props.items;
    const catagory = props.catagory;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>)
    return(<>
        <h3>{catagory}</h3>
        <ul>{listItems}</ul>
    </>);
}
List.propTypes ={
    id: propTypes.number,
    name: propTypes.string,
    calories:propTypes.number,
    items: propTypes.arrayOf(propTypes.shape({id:propTypes.number,
                                            name:propTypes.string,
                                            calories:propTypes.number}))
}
List.defaultProps = {
    id: 0,
    name:"Tim",
    calories:0,
    items: []
}
export default List