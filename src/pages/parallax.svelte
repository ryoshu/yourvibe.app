
<script>
import ScrollMagic from 'scrollmagic';
import { TimelineMax, Linear } from 'gsap';
import { onMount } from 'svelte';

onMount(() => {
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
				.addTo(controller);
});
</script>



<div class="spacer s0"></div>
<div id="parallax1" class="parallaxParent">
	<div style="background-image: url(../../assets/img/example_parallax_bg1.png);"></div>
</div>
<div class="spacer s1">
	<div class="box2 blue">
		<p>Content 1</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s0"></div>
<div id="parallax2" class="parallaxParent">
	<div style="background-image: url(../../assets/img/example_parallax_bg2.png);"></div>
</div>
<div class="spacer s1">
	<div class="box2 blue">
		<p>Content 2</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s0"></div>
<div id="parallax3" class="parallaxParent">
	<div style="background-image: url(../../assets/img/example_parallax_bg3.png);"></div>
</div>
<div class="spacer s2"></div>

<style type="text/css">
	.parallaxParent {
		height: 100vh;
		overflow: hidden;
	}
	.parallaxParent > * {
		height: 200%;
		position: relative;
		top: -100%;
	}

	.spacer {
		height: 100%;
	}

	#parallax1 {
		background-color: #ff0000;
	}

	#parallax2 {
		background-color: #00ff00;
	}

	#parallax3 {
		background-color: #0000ff;
	}
</style>
