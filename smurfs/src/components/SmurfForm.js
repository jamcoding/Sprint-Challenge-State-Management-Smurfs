import React, { useState } from 'react';
import { connect } from 'react-redux';
import { smurfData, postSmurfData } from '../actions/index';

const SmurfForm = props => {
    const [name, setName] = useState("");
    const handleChangeName = e => {
      e.preventDefault();
      setName(e.target.value);
    };
    
    const [age, setAge] = useState(null);
    const handleChangeAge = e => {
      e.preventDefault();
      setAge(e.target.value);
    };

    const [height, setHeight] = useState("");
    const handleChangeHeight = e => {
      e.preventDefault();
      setHeight(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      props.postSmurfData({ name: name, age: age, height: height, id: Date.now() });
      props.smurfData();
    };

    return(
        <form>
            <input 
                type="text"
                placeholder="Name"
                id="name"
                value={props.name}
                onChange={handleChangeName}
            />
            <input 
                type="text"
                placeholder="Age"
                id="age"
                value={props.age}
                onChange={handleChangeAge}
            />
            <input 
                type="text"
                placeholder="Height"
                id="height"
                value={props.height}
                onChange={handleChangeHeight}
            />
            <br />
            <button onClick={handleSubmit}>ADD SMURF!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { smurfData, postSmurfData }
)(SmurfForm);