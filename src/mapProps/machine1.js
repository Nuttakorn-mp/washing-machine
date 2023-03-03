import { workingMachine1, finishMachine1 } from '../dispatch'

export const machine1_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine1()),
        finishMachine: () => dispatch(finishMachine1()),
    }
}
export const machine1_mapStateToProps = state => {
    return {
        machine: state.machine1Reducer,
    }
}