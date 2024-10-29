import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email : "",
    emailError:"",
    password:"",
    passwordError:"",
    showPassword:false
}

const atomicSignals = createSlice({
    name: 'atomicSignals',
    initialState,
    reducers:{
        setEmail:(state, action) => {
            state.email = action.payload;
            state.emailError="";
        },
        setEmailError:(state,action) => {
            state.emailError = action.payload
        },
        setPassword:(state,action) => {
            state.password = action.payload
            state.passwordError="";
        },
        setPasswordError:(state,action) => {
            state.passwordError = action.payload
        },
        toggleShowPassword:(state) => {
            state.showPassword = !state.showPassword
        }
    }
})

export const {setEmail,setEmailError,setPassword,setPasswordError,toggleShowPassword} = atomicSignals.actions

export default atomicSignals.reducer;