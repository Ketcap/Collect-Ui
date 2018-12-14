export const formatTime = (time) => {
  let secs = parseInt(time, 10);
  let hr = Math.floor(secs / 3600);
  let min = Math.floor((secs - (hr * 3600)) / 60);
  let sec = Math.floor(secs - (hr * 3600) - (min * 60));
  if (min < 10) {
    min = `0${min}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }
  if (hr < 1) {
    return `${min}:${sec}`;
  }
  return `${hr}:${min}:${sec}`;
}