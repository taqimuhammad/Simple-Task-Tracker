// import React from "react"; --> not needed anymore
import PropTypes from 'prop-types'
import Button from "./Button";

// can also call props in this way
// const header = (props) and add props.title in h1. title because we named it title when passing in App.js
const Header = ({ title }) =>{

    const onClick = () => {
        console.log('clicked');
    }
    
    return (
        // <header>
        //     <h1>Task Tracker</h1>
        // </header>

        // props way.
        // can also create a button component
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>

        // simple button added ^ component can be reused.
        // <header className="header">
        //     <h1>{title}</h1>
        //     <button className="btn">Add</button>
        // </header>

        // // CSS styles inline
        // <header>
        //     <h1 style={{color:'red',backgroundColor:'black'}}>{title}</h1>
        // </header>

        // if you dont wanna do it inline
        // <header>
        //     <h1 style={headingstyle}>{title}</h1>
        // </header>

    )
}

// default props
Header.defaultProps = {
    title: 'Task Tracker',
}

// can also create propTypes. cannot pass any other datatype,only string will work 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingstyle = {
//     color:'red',
//     backgroundColor:'black'
// }


export default Header;
// now import this component into App.js

