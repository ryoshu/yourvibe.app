<style type="text/scss">
  @import '../../styles/app.scss';

  section.what {
    height: 100vh;
    background-color: $white;
    color: $black;
    text-align: left;

    .container {
      margin: 0 auto;
      @include full-height-container-vertically-centered;
      @include content-container;
    }

    .vibe-logo {
      color: $black;
    }

    h2 {
      font-size: $text-xl;
      padding-bottom: .6rem;
      .vibe-logo {
        font-size: 2.5rem;
      }
    }
    
    h3 {
      font-size: 2.6rem;
      line-height: 2.6rem;
      .vibe-logo {
        font-size: 2.6rem;
      }

      span {
        @include gradient_indigo-cyan-indigo;
        @include prepare-text-for-gradient;
      }
    }

    .tagline {
      font-size: 8rem;
      font-weight: 600;
      line-height: 7.2rem;
    }

    .what-text {
      position: relative;
      width: 100%;
      padding-top: 1rem;
      font-weight: 400;

      .vibe-logo {
        font-family: AristaProAlternateLight;
      }
    }
  }
</style>

<section class="what">
  <div class="container">
    <h2>What is <span class="vibe-logo">vibe</span>?</h2>
    <h3>A <span>new</span> type of experience.</h3>
    <div class="what-text">
      <div class="col-20"></div>
      <div class="col-80">
        <p><span class="vibe-logo">vibe</span> combines traditional mindfulness practices with modern science and technology to create unique, personalized experiences.</p>
        <br>
        <p>With <span class="vibe-logo">vibe</span> you bring the mindset you want to have. <span class="vibe-logo">vibe</span> provides the setting that helps you achieve that mindset.</p>
        <br>
        <p>Use your set & setting to create your new <span class="vibe-logo">vibe</span>.</p>
      </div>
    </div>
  </div>
</section>