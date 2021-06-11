# meeww.github.io
 
[Reaction Diffusion Simulation - Interactive Demo](https://meeww.github.io/index.html)



This is a p5.js app for simulating [Reaction - Diffusion , Karl Sims](https://www.karlsims.com/rd.html), [Reaction Diffusion, Daniel Shiffman](https://www.youtube.com/watch?v=BV9ny785UNc&t=1303s).




Feel free to re-use any of this!




Help Section: 

	Parameters:
			Chemical A: Amount of Chemical A per pixel
			Chemical B: Amount of Chemical B per pixel
			Fade Rate: Diffusion speed ( How quickly the chemicals fade from the pixels)
			Grow Rate: Growth speed ( How quickly the chemicals propogate to neighbouring pixels)
			Time Rate: Simulation Substeps ( Simulating in between frames for smoother, but slower motion)
			Time Step: Simulation Iterations (Simulating each frame # of times. Results in faster, but less smooth motion)
			Resolution : (1 = 100% resolution, 10 = 10% resolution). This will heavily drain your battery if set below 5
	Randomize:
			Randomizes Chemical A, Chemical B, Fade Rate and Grow Rate. This leaves time rate and step alone.
	Place Seed:
			Places a 10x10 area of Chemical B onto the canvas.
	Clean:
			Removes all Chemical B and fills canvas with Chemical A
	Colours:
			Colour Ramp (Left): Used to change the interpolation between colours ( Sharper/Blurrier edges between colours )
			Colour Pickers (Bottom): Used to set custom colours for the colour ramp
			Randomize: Sets all colours to new random colours.
	Styles:
			Noise Fade: Changes how much noise affects chemical A
			Noise Grow: Changes how much noise affects chemical B
	Presets:
			Preset parameters for cool looking patterns!