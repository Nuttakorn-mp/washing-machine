import { workingMachine2, finishMachine2 } from '../dispatch'

export const machine2_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine2()),
        finishMachine: () => dispatch(finishMachine2()),
    }
}
export const machine2_mapStateToProps = state => {
    return {
        machine: state.machine2Reducer,
    }
}