import {configureStore} from '@reduxjs/toolkit';
import State from './Slice.js';

export const store=configureStore({

    reducer:{
        data:State
    }
})
