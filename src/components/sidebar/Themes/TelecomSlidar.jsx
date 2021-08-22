import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { ListItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    root: {
        width: 180,
    },
});

function TelecomSlidar() {
    const { day: day, time: time } = (useSelector(state => state.valueOfTelecom));
    const dispatch = useDispatch();
    const classes = useStyles();
    const marks = [
        {
            value: 0,
            label: '上午',
        },
        {
            value: 1,
            label: '下午',
        },
        {
            value: 2,
            label: '夜間',
        }
    ];
    const handleWeekChange = (event) => {
        dispatch({
            type: 'ADJUSTDAY',
            day: event.target.value
        });
    };
    const handleTimeChange = (event, newValue) => {
        dispatch({
            type: 'ADJUSTTIME',
            time: marks.find(x => x.value === newValue).label
        });
    };

    return (
        <ListItem style={{ height: "200px" }}>
            <div className={classes.root}>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="day" name="day" value={day} onChange={handleWeekChange}>
                        <FormControlLabel value="weekday" control={<Radio color="primary" />} label="平日" />
                        <FormControlLabel value="weekend" control={<Radio color="primary" />} label="假日" />
                    </RadioGroup>
                </FormControl>
                <Typography id="discrete-slider" gutterBottom>
                    時間軸
                </Typography>
                <Slider
                    value={marks.find(x => x.label === time).value}
                    min={0}
                    max={2}
                    onChange={handleTimeChange}
                    aria-labelledby="discrete-slider"
                    marks={marks} />
            </div>
        </ListItem>
    )

}
export default TelecomSlidar;