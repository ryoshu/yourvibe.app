<script>
import ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap'
import { onMount } from 'svelte'

const controller = new ScrollMagic.Controller();

onMount(() => {
  /*
  const intro = new ScrollMagic.Scene({
    duration: 100
  })
  .setPin('.intro')
  .addTo(controller);

  const info = new ScrollMagic.Scene({
    duration: 200
  })
  .setPin('.info')
  .addTo(controller);

  const whatsYourVibe = new ScrollMagic.Scene({
    duration: 1500
  })
  .setPin('.whats-your-vibe')
  .addTo(controller);

  const howItWorks = new ScrollMagic.Scene({
    duration: 2000
  })
  .setPin('.how-it-works')
  .addTo(controller);
  */
});
</script>

<div class="main">
  <section class="intro">
  	<div class="container">
      <div class="vibe-logo">vibe</div>
      <h1>The next generation of meditation and mindfulness experiences.</h1>
    </div>
  </section>
  <section class="info">
    <div class="container">
      <div>With <span class="vibe-logo">vibe</span> you define the set - the mindset you want to bring to your experience.</div>
      <div><span class="vibe-logo">vibe</span> provides the setting - immersing you in a virtual environment that adapts to your set.</div>
      <div>set + setting</div>
      <div>As you explore your <span class="vibe-logo">vibe</span>, you create new settings, creating new experiences.</div>
      <div><span class="vibe-logo">vibe</span> combines centuries-old meditation and mindfulness practices with modern technology and science, enabling you to create an infinite number of mind-changing experiences.</div>
    </div>
  </section>
  <section class="whats-your-vibe">
  	<div class="container">
      <h2>What's your <span class="vibe-logo">vibe</span>?</h2>
      <div>Are you feeling <span class="feeling">stressed out</span>? Catch a <span class="feeling-vibe-type">relaxing</span> <span class="vibe-logo">vibe</span>.</div>
      <div>Are you feeling <span class="feeling">relaxed</span>? Catch a <span class="feeling-vibe-type">chill</span> <span class="vibe-logo">vibe</span>.</div>
      <div>Are you feeling <span class="feeling">chill</span>? Catch a <span class="feeling-vibe-type">playful</span> <span class="vibe-logo">vibe</span>.</div>
      <div>Are you feeling <span class="feeling">playful</span>? Catch an <span class="feeling-vibe-type">exploratory</span> <span class="vibe-logo">vibe</span>.</div>
      <div>Bring your set. Feel your setting. Catch your <span class="vibe-logo">vibe</span>.</div>
    </div>
  </section>
  <section class="how-it-works">
  	<div class="container">
      <h2 class="center">How it works</h2>
      <div> <span class="vibe-logo">vibe</span> <span class="default-fonts">| Listen</span> creates generative soundscapes for your set to build your settings.</div>
      <div> <span class="vibe-logo">vibe</span> <span class="default-fonts">| Watch</span> blends generative soundscapes with generative videoscapes to enchance your experience.</div>
      <div> <span class="vibe-logo">vibe</span> <span class="default-fonts">| Immerse</span> uses the power of eXtended Reality to create immersive extra-spatial experiences.</div>
      <h3 class="center">Experience your higher self.</h3>
      <h3 class="center">Catch your <span class="vibe-logo">vibe</span>.</h3>
    </div>
  </section>
</div>

<style type="text/scss">
  @import '../styles/app.scss';

  :global(body) {
  	background-color: $black;
  	color: $white;
  	padding: 0% 0%;
  }

  .center {
    text-align: center;
  }

  .default-fonts {
    font-family: $default-font-family !important;
    font-size: $text-4xl;
  }

  .vibe-logo {
    text-align: bottom;
    font-family: AristaProAlternateLight;
    font-size: 2.65rem;
    color: $white;
  }

  section {
    
  }

  div.main {
  	font-size: $text-4xl;
  	font-weight: 200;
  	text-align: center;
  	width: 100%;
    padding: 0px;
    margin: 0px;


  	h1, h2, h3 {
  	  font-weight: 200;
      padding: 0px;
      margin: 0px;
  	}

  	section.intro {
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(45deg, $indigo-700, $red-600);

  	  .container {
        position: relative;
        top: 50%;
	      transform: translateY(-50%);
  	  }

      .vibe-logo {
        font-size: 10rem;
        color: $white !important;
        /* background-image: linear-gradient(45deg, $indigo-700, $red-600); */
        /* @include prepareTextForGradient; */
      }
    }

    section.info {
        padding: 20rem 0;

        .vibe-logo {
          background-image: linear-gradient(45deg, $indigo-700, $fuchsia-600);

          @include prepareTextForGradient;
        }
    }

    section.whats-your-vibe {
      
    }

    section.how-it-works {
      
    }
  }

  .intro {

    h1 {
    }
  }
</style>