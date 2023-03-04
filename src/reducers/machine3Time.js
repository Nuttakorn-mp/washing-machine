export default function machineTime(state = 0, action) {
  switch (action.type) {
    case 'DECREMENT3':
      // console.log('decrement3')
      return state - 1;
    case 'SETTIME3':
      // console.log('setTime3')
      return action.time;
    default:
      return state;
  }
}