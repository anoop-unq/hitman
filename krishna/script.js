 // JavaScript to adjust the height of the vertical line dynamically
 document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline");
    const verticalLine = document.querySelector(".vertical-line");

    // Get the first and last event positions
    const firstEvent = document.querySelector(".event:first-child");
    const lastEvent = document.querySelector(".event:last-child");

    if (firstEvent && lastEvent) {
      const firstEventTop = firstEvent.offsetTop;
      const lastEventBottom =
        lastEvent.offsetTop + lastEvent.offsetHeight;

      // Set the vertical line height and position
      verticalLine.style.top = firstEventTop + "px";
      verticalLine.style.height = lastEventBottom - firstEventTop + "px";
    }
  });