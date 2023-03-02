import { Provider, connect } from 'react-redux'
import { legacy_createStore as createStore } from 'redux';

import { machineComponent } from './component/machineComponent'
import {rootReducers} from './reducers/rootReducers'

import {machine1_mapStateToProps, machine1_mapDispatchToProps} from './mapProps/machine1'
import {machine2_mapStateToProps, machine2_mapDispatchToProps} from './mapProps/machine2'

const store = createStore(rootReducers)

// structure => connect(mapStateToProps, mapDispatchToProps)
const Machine1 = connect(machine1_mapStateToProps, machine1_mapDispatchToProps)(machineComponent)
const Machine2 = connect(machine2_mapStateToProps, machine2_mapDispatchToProps)(machineComponent)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Machine1 number={1}/>
        <Machine2 number={2}/>
      </div>
    </Provider>
  );
}
export default App;