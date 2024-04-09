import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'

export const fecthAuth = createAsyncThunk('auth/fecthAuth', async(params)=>{
    const{data} = await axios.post('/auth/login', params)
    return data
})


export const fecthAuthMe = createAsyncThunk('auth/fecthAuthMe', async()=>{
    const{data} = await axios.get('/auth/me')
    return data
})


export const fecthAuthRegister = createAsyncThunk('auth/fecthAuthRegister', async(params, {rejectWithValue})=>{
    
    const{data} = await axios.post('/auth/register', params)
    return data
    
})
const initialState = {
   data:null,
   status: 'loading',
   error: null

};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state)=>{
            state.data = null 
        }
    },
    extraReducers: {
        [fecthAuth.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fecthAuth.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fecthAuth.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        [fecthAuthMe.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fecthAuthMe.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fecthAuthMe.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [fecthAuthRegister.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fecthAuthRegister.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fecthAuthRegister.rejected]: (state, action) => {
            state.status = 'error'
            state.data = null
            // state.error = action.payload
        },
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions