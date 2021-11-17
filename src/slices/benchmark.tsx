import { createSlice } from '@reduxjs/toolkit'
import data from '../data'
import _ from 'lodash';

export const initialState = {
  loading: false,
  hasErrors: false,
  industry: '',
  region: '',
  benchmark: [],
}

const benchmarkSlice = createSlice({
  name: 'benchmark',
  initialState,
  reducers: {
    getBenchmarkRequest: (state) => {
      state.loading = true
    },
    getBenchmarkSuccess: (state, { payload }) => {
      state.benchmark = payload.benchmark
      state.region = payload.region
      state.industry = payload.industry
      state.loading = false
      state.hasErrors = false
    },
    getBenchmarkFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

/*** Three actions generated from the slice ***/
export const { getBenchmarkRequest, getBenchmarkSuccess, getBenchmarkFailure } = benchmarkSlice.actions

/*** A Selector ***/
export const benchmarkSelector = (state: any) => state.benchmark

/*** The reducer ***/
export default benchmarkSlice.reducer

export const getBenchmarkData = (industryValue:any) =>{
  let benchmark  =   _.filter(data.defaultIndustry, ['industry', industryValue]);
  return benchmark;
}

/*** Asynchronous thunk action ***/
export function getBenchmark(industryValue:any) {

  return async (dispatch: any) => {
   
    dispatch(getBenchmarkRequest())
    try {
      let data = await {
        industry: industryValue,
        benchmark: getBenchmarkData(industryValue)
      }
      dispatch(getBenchmarkSuccess(data))
    } catch (error) {
      dispatch(getBenchmarkFailure())
    }
  }
}

export function resetBenchmark() {

  return async (dispatch: any) => {


    dispatch(getBenchmarkRequest())
    try {
      let data = await {
        industry: '',
        region: '',
        benchmark: []
      }
      dispatch(getBenchmarkSuccess(data))
    } catch (error) {
      dispatch(getBenchmarkFailure())
    }
  }
}