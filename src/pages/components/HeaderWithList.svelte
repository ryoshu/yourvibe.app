<style type="text/scss">
  @import '../../styles/app.scss';

  section.why {
    height: 100vh;
    background-attachment: fixed;
    background-color: $white;
    
    background-image: 
      radial-gradient(circle, rgba($orange-500, .5) 0%, rgba($amber-300, 0) 100%),
      linear-gradient(0deg, rgba($orange-500, 1) 0%, rgba($orange-500, 0) 80%),
      linear-gradient(180deg, rgba($indigo-600, .3) 0%, rgba($indigo-600, 1) 100%);

    .container {
      @include content-container;
      @include full-height-container-vertically-centered;
      text-align: center;
      /*
      .why-content {
        text-align: center;
        left: 0%;
        width: 100%;
        $why-content-size: 600px;
        
        width: $why-content-size;
        height: $why-content-size;
        border-radius: $why-content-size;
        background-image: linear-gradient($indigo-600, $cyan-200);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      */
    }
  }
</style>

<section class="why">
	<div class="container">
    <h2>Why <span class="vibe-logo">vibe</span>?</h2>
    <ul>
      <li>Relaxation</li>
      <li>Focus</li>
      <li>Happinesss</li>
      <li>Energy</li>
      <li>Creativity</li>
      <li>Exploration</li>
      <li>Altered States</li>
    </ul>
  </div>
</section>