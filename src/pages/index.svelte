<script>
import ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap'
import { onMount } from 'svelte'

import IntroComponent from './components/GradientLogoTextHero.svelte';
import WhatComponent from './components/EyebrowHeadlineOffsetText.svelte';
import WhyComponent from './components/HeaderWithList.svelte';
import FeaturesComponent from './components/HeaderWithCards.svelte';
import HowComponent from './components/HeaderWithCardsAlt.svelte';

const controller = new ScrollMagic.Controller();

onMount(() => {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "0" // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  // get all slides
  const slides = document.querySelectorAll("section");
  /*new ScrollMagic.Scene({
    triggerElement: document.querySelector('section.features')
  })
  .setTween('section.why', 1, { backgroundColor: 'black' })
  .addTo(controller);*/

  // create scene for every slide
  /*
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: true})
      .addTo(controller);
  }
  */
});

</script>

<div class="main">
  <IntroComponent/>
  <WhatComponent/>
  <WhyComponent/>
  <FeaturesComponent/>
  <HowComponent/>
  
  <!--section class="gradient-playground">
    <div class="container">
    </div>
  </section-->
</div>

<style type="text/scss">
  @import '../styles/app.scss';

  
  :global(body) {
    color: $white;
    background-color: $black;
    font-size: $text-4xl;
    font-weight: bolder;
  }

  h3 {
    font-weight: 600;
    font-size: 9rem;
    line-height: 7.5rem;
  }

  .main {
    text-align: center;
  }

  .vibe-logo {
    color: $white;
  }

  section {
    height: 100vh;

    .container {
      
    }
  }

/*


  .gradient-playground {
    background-color: $black;
    background-image: 
      linear-gradient(0deg, rgba($orange-600, .9) 0%, rgba($orange-600, 0) 50%),
      linear-gradient(0deg, rgba($fuchsia-300, 1) 40%, rgba($fuchsia-300, .2) 80%),
      linear-gradient(0deg, rgba($indigo-900, .7) 60%, rgba($indigo-900, .5) 100%),
      linear-gradient(0deg, rgba($cyan-300, .7) 80%, rgba($cyan-300, .5) 100%),
  }


*/
</style>