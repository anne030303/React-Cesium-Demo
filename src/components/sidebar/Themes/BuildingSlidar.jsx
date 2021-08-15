import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function BuildingSlidar() {
    const value = (useSelector(state => state.valueOfBuildingThreshold));
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        dispatch({
            type: 'ADJUSTTHRESHOLD',
            value: newValue
        });
    };

    return (
        <ListItem style={{ height: "80px" }}>
            <div className={classes.root}>
                <Typography id="continuous-slider" gutterBottom>
                    樓層數分界
                </Typography>
                <Slider
                    value={value}
                    min={0}
                    max={20}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="continuous-slider" />
            </div>
        </ListItem>
    )

}
export default BuildingSlidar;