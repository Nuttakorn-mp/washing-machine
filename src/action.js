export function getRemainingSeconds(timer) {
    let sec = timer % 60
    if (sec > 9) { return sec }
    else { return '0' + sec }
}
export function getRemainingMinutes(timer) {
    let min = Math.floor((timer / 60) % 60)
    if (min > 9) { return min }
    else { return '0' + min }
}
export function getRemainingHours(timer) {
    let h = Math.floor((timer / 60 / 60) % 24);
    if (h > 9) { return h }
    else { return '0' + h }
}