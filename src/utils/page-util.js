export const openFullscreen = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

export const closeFullscreen = () => {
  if (typeof window !== 'undefined') {
    const { document } = window;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
}

export const screenWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 0;
}

export const screenHeight = () => {
  if (typeof window !== 'undefined') {
    return window.innerHeight
  }
  return 0;
}
