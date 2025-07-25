# 3D Garage Door Scroll Animation

This GitHub Pages repository hosts a simple single‑page web application that demonstrates a 3D “garage door” scroll animation built with vanilla HTML, CSS and JavaScript. As the user scrolls down the page the garage door’s segments smoothly fold up like a real garage door using a cubic Bézier curve. The effect is achieved by dynamically creating multiple door segments in JavaScript and applying CSS transforms and perspective to each segment based on scroll position.

## Features

- Pure HTML, CSS and JavaScript (no external dependencies)
- Dynamically generates door segments for the animation
- Uses perspective and 3D transforms to create a realistic folding effect
- Lightweight and self‑contained; the entire effect lives in `index.html`

## Usage

Open `index.html` in your web browser or deploy the site with GitHub Pages to see the animation in action. Scroll down to watch the door fold up in response to your scroll position.

You can adjust the number of segments or tweak the cubic Bézier curve in the JavaScript code to experiment with different animation behaviors.

## Deployment

This site is automatically deployed to GitHub Pages from this repository. After pushing changes to the default branch, the updated site will be available at https://meeww.github.io.
