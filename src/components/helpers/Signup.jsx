import React from "react";
import "./Signup.css";
import getFirebase from "../../firebase";
import useInput from "./useInput";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Signup() {
    const classes = useStyles();
    const firebaseInstance = getFirebase();
    const email = useInput("");
    const password = useInput("");
    const isSign = useSelector(state => state.isSign);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: 'CLOSESIGN',
        });
    };
    const signUp = async (event) => {

        event.preventDefault();

        try {
            if (firebaseInstance) {
                const user = await firebaseInstance
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                console.log("user", user);
                alert(`Welcome ${email.value}!`);
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);
        }
    };

    return (
        <div id="login">
            <Modal
                open={isSign.isSign}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={signUp}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Modal>
        </div >
    )
}


export default Signup;