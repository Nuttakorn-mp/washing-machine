import { workingMachine2, finishMachine2 } from '../dispatch'
import { setTimeMachine2, decrementMachine2} from '../dispatch'

export const machine2_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine2()),
        finishMachine: () => dispatch(finishMachine2()),
        decrementMachine: () => dispatch(decrementMachine2()),
        setTimeMachine: (time) => dispatch(setTimeMachine2(time)),
    }
}
export const machine2_mapStateToProps = state => {
    return {
        machine: state.machine2Reducer,
        time: state.machine2TimeReducer,
    }
}