import { workingMachine2 } from '../actions'

export const machine2_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine2()),
    }
}
export const machine2_mapStateToProps = state=>{
    return{
        machine: state.machine2Reducer,
    }
  }