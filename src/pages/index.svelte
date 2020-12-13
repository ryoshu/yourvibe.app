<script>
import ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap'
import { onMount } from 'svelte'

const controller = new ScrollMagic.Controller();

onMount(() => {

});
</script>

<div class="main">
  <section class="intro">
  	<div class="container">
      <span class="vibe-logo">vibe</span>
      <h1>The next generation of meditation and mindfulness experiences.</h1>
    </div>
  </section>
  <section class="what">
    <div class="container">
      <h2>What is <span class="vibe-logo">vibe</span></h2>
      <p><span class="vibe-logo">vibe</span> combines ancient mindfulness practices with science and modern technology to create unique, personalized experiences.</p>
      <p>With <span class="vibe-logo">vibe</span> you bring the mindset you want to have. Then we provide the setting that helps you achieve that mindset.</p>
      <p>Set &amp; setting creates your new <span class="vibe-logo">vibe</span>.</p>
    </div>
  </section>
  <section class="why">
  	<div class="container">
      <h2>Why <span class="vibe-logo">vibe</span></h2>
      <ul>
        <li>Relaxation</li>
        <li>Focus</li>
        <li>Happinesss</li>
        <li>Gratitude</li>
      </ul>
      <ul>
        <li>Energy</li>
        <li>Creativity</li>
        <li>Exploration</li>
        <li>Altered States</li>
      </ul>
    </div>
  </section>
  <section class="features">
    <div class="container">
      <h2><span class="vibe-logo">vibe</span> platforms</h2>
      <div>
        <p><span class="vibe-logo">vibe</span> | Listen</p>
        <p></p>
      </div>
      <div>
        <p><span class="vibe-logo">vibe</span> | Watch</p>
        <p></p>
      </div>
      <div>
        <p><span class="vibe-logo">vibe</span> | Immerse</p>
        <p></p>
      </div>
    </div>
  </section>
  <section class="how">
    <div class="container">
      <h2>How <span class="vibe-logo">vibe</span> works</h2>
      <ul>
        <li>Spatial Audio</li>
        <li>Binaural Beats</li>
        <li>Virtual Reality</li>
        <li>Personalized Experiences</li>
      </ul>
    </div>
  </section>
</div>

<style type="text/scss">
  @import '../styles/app.scss';

  :global(body) {
    color: $white;
    background-color: $black;
    font-size: $text-4xl;
    font-weight: 200;
  }

  .main {
    text-align: center;
  }

  .vibe-logo {
    color: $white;

    background-image: 
      linear-gradient(75deg, rgba($amber-200, 1) 0%, rgba($red-400, 1) 50%, rgba($amber-200, 1) 100%);

    @include prepareTextForGradient();
  }

  section {
    height: 100vh;

    .container {
      position: relative;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);

      @include content-container;
    }
  }

  .intro {
    background-image: 
      linear-gradient(0deg, rgba($indigo-900, .5) 0%, rgba($indigo-900, 0) 20%),
      linear-gradient(90deg, rgba($indigo-900, .5) 0%, rgba($indigo-900, 0) 20%),
      linear-gradient(180deg, rgba($indigo-900, .5) 0%, rgba($indigo-900, 0) 20%),
      linear-gradient(270deg, rgba($indigo-900, .5) 0%, rgba($indigo-900, 0) 20%),
      linear-gradient(0deg, rgba($fuchsia-600, .5) 0%, rgba($fuchsia-600, 0) 100%),
      linear-gradient(180deg, rgba($fuchsia-600, .5) 0%, rgba($fuchsia-600, 0) 100%);

    .vibe-logo {
      font-size: 10rem !important;
    }
  }

  .what {
    color: $white;
  }

  .why {
    background-image: linear-gradient(45deg, $fuchsia-800, $indigo-800);
  }

  .features {

  }

  .how {
    background-image: linear-gradient(45deg, $fuchsia-800, $indigo-800);
  }

</style>