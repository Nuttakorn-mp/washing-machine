import { Provider, connect } from 'react-redux'
import { legacy_createStore as createStore } from 'redux';

import machineComponent from './component/machineComponent'
import exampleComponent from './component/exampleComponent'
import { rootReducers } from './reducers/rootReducers'

import { machine1_mapStateToProps, machine1_mapDispatchToProps } from './mapProps/machine1'
import { machine2_mapStateToProps, machine2_mapDispatchToProps } from './mapProps/machine2'
import { machine3_mapStateToProps, machine3_mapDispatchToProps } from './mapProps/machine3'

import './App.css'

const store = createStore(rootReducers)

// structure => connect(mapStateToProps, mapDispatchToProps)
const Machine1 = connect(machine1_mapStateToProps, machine1_mapDispatchToProps)(machineComponent)
const Machine2 = connect(machine2_mapStateToProps, machine2_mapDispatchToProps)(machineComponent)
const Machine3 = connect(machine3_mapStateToProps, machine3_mapDispatchToProps)(machineComponent)

const MocMachine = exampleComponent


const GridHead = ({ title }) => {
  return (
    <h1 className='head'>
      {title}
    </h1>
  )
}

const GridBody = ({ children }) => {
  return (
    <div className='body'>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GridHead title={'washing mashine'} />
      <GridBody>
          <Machine1 />
          <Machine2 />
          <Machine3 />
          <MocMachine />
          <MocMachine />
          <MocMachine />
          <MocMachine />
          <MocMachine />
          <MocMachine />
      </GridBody>


    </Provider>
  );
}
export default App;