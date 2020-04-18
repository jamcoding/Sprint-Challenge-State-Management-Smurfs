import React from 'react';
import { connect } from 'react-redux';
import { smurfData } from '../actions/index';

const SmurfList = props => {
    return (
        <div>
            {props.isLoading ? (
                <div className="center">data loading</div>
            ) : (
                <div>
                    <button onClick={() => props.smurfData()}>get smurfs!</button>
                    {props.smurf.map(smurfs => {
                        return(
                            <div key={smurfs.id}>
                                <p>{smurfs.name}</p>
                                <p>{smurfs.age}</p>
                                <p>{smurfs.height}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
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
    { smurfData }
)(SmurfList);