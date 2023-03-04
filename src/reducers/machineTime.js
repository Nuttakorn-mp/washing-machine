export default function machineTime(state = 0, action) {
  switch (action.type) {
    case 'DECREMENT1':
      // console.log('decrement1')
      return state - 1;
    case 'SETTIME1':
      // console.log('setTime1')
      return action.time;
    default:
      return state;
  }
}