import { workingMachine3, finishMachine3 } from '../dispatch'
import { setTimeMachine3, decrementMachine3} from '../dispatch'

export const machine3_mapDispatchToProps = dispatch => {
    return {
        useMachine: () => dispatch(workingMachine3()),
        finishMachine: () => dispatch(finishMachine3()),
        decrementMachine: () => dispatch(decrementMachine3()),
        setTimeMachine: (time) => dispatch(setTimeMachine3(time)),
    }
}
export const machine3_mapStateToProps = state => {
    return {
        machine: state.machine3Reducer,
        time: state.machine3TimeReducer,
    }
}