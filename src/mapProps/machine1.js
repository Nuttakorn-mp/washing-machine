import { workingMachine1, finishMachine1 } from '../dispatch'
import { setTimeMachine1, decrementMachine1} from '../dispatch'
export const machine1_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine1()),
        finishMachine: () => dispatch(finishMachine1()),
        decrementMachine: () => dispatch(decrementMachine1()),
        setTimeMachine: (time) => dispatch(setTimeMachine1(time)),
    }
}
export const machine1_mapStateToProps = state => {
    return {
        machine: state.machine1Reducer,
        time: state.machine1TimeReducer,
    }
}