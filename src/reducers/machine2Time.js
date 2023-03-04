export default function machineTime(state = 0, action) {
  switch (action.type) {
    case 'DECREMENT2':
      // console.log('decrement2')
      return state - 1;
    case 'SETTIME2':
      // console.log('setTime2')
      return action.time;
    default:
      return state;
  }
}