import styled from '@emotion/styled';
import loginHero from '../../img/login-hero.png';
import { Formik, Form, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { LoginFormState } from '../../models/appStateTypes';
import { Button, Grid, FormControl, TextField, Paper, Typography, FormHelperText } from '@mui/material';
import { updateVal } from '../../store/features/loginFormSlice';
import { login } from '../../store/features/authSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// Form Validation Schema
const validationSchema = Yup.object<Partial<LoginFormState> | any>({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            `Must Contain 8 Characters, 
            One Uppercase, 
            One Lowercase, 
            One Number and one special case Character`
        ),
});

const Login = () => {
    const LoginWapper = styled.main`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 6fr 6fr;
        align-items: center;
        .img-wapper {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0px;
            background: linear-gradient(225deg, #ffffff, #ffffff);
            box-shadow: 23px 23px 47px #f4f4f4, -23px -23px 47px #ffffff;
        }
    `;

    const FormWapper = styled.div`
        height: 100%;
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: '#ffffff';
    `;

    const initialValues = useSelector((state: RootState) => state.loginForm);
    const isAuth = useSelector((state: RootState) => state.auth);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    // Redirect to dashboard fuc
    const redirect = () => {
        return isAuth ? navigate('/dashboard') : null;
    };

    // Handle login form
    const handleSubmit = (values: LoginFormState, { resetForm }: any) => {
        // Update redux-store with form values
        dispatch(updateVal(values));
        // Persist username value in session storage
        sessionStorage.setItem('USER_NAME', values.username);
        // If validation is passed make user isLogin auth to 'True'
        dispatch(login());
        // If isLogin is 'True' redirect user to dashboard page from login
        redirect();
        // Reset form values
        resetForm({});
    };

    return (
        <LoginWapper>
            <div className="img-wapper">
                <img src={loginHero} alt="login-side-hero-img" />
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {(formik) => (
                    <Form>
                        <FormWapper>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: '400px',
                                    padding: '1rem',
                                    borderRadius: '23px',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '23px 23px 47px #dbdbdb, -23px -23px 47px #ffffff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography variant="h4" mb={2}>
                                    Sign In
                                </Typography>
                                <Grid container sx={{ justifyContent: 'center' }} spacing={3}>
                                    <Grid item xs={10}>
                                        <FormControl fullWidth>
                                            <TextField
                                                variant="outlined"
                                                label="Username"
                                                helperText={<ErrorMessage name="username" />}
                                                error={!!formik.touched.username && !!formik.errors.username}
                                                {...formik.getFieldProps('username')}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Password"
                                                variant="outlined"
                                                type="password"
                                                helperText={<ErrorMessage name="password" />}
                                                error={!!formik.touched.password && !!formik.errors.password}
                                                {...formik.getFieldProps('password')}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                    sx={{ marginTop: '1rem', padding: '0.7rem', width: '50%' }}
                                >
                                    Continue
                                    <ArrowForwardIosIcon sx={{ fontSize: '1rem', color: '#fff', marginRight: 0 }} />
                                </Button>
                            </Paper>
                        </FormWapper>
                    </Form>
                )}
            </Formik>
        </LoginWapper>
    );
};

export default Login;
