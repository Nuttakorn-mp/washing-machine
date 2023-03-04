import { workingMachine3, finishMachine3 } from '../dispatch'

export const machine3_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine3()),
        finishMachine: () => dispatch(finishMachine3()),
    }
}
export const machine3_mapStateToProps = state => {
    return {
        machine: state.machine3Reducer,
    }
}