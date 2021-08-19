import React from "react";
import "./Signin.css";
import getFirebase from "../../firebase";
import useInput from "./useInput";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Signin() {
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

    const signIn = async (event) => {
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
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={signIn}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}


export default Signin;