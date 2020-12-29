<style type="text/scss">
  @import '../../styles/app.scss';

  section.how {
    height: 100vh;
    background-attachment: fixed;
    background-color: $white;
    background-image: 
      linear-gradient(0deg, rgba($red-300, .25) 0%, rgba($red-300, 0) 10%),
      radial-gradient(circle, rgba($cyan-500, .25) 0%, rgba($cyan-300, 0) 30%),
      linear-gradient(180deg, rgba($indigo-900, 1) 0%, rgba($indigo-600, 0) 60%),
      linear-gradient(0deg, rgba($orange-500, .8) 0%, rgba($orange-900, 0) 60%),
      linear-gradient(180deg, rgba($cyan-600, .3) 0%, rgba($cyan-600, 1) 10%);

    .container {
      @include content-container;
      @include full-height-container-vertically-centered;
    }
  }
</style>
  
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