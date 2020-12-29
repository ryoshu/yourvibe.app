<style type="text/scss">
  @import '../../styles/app.scss';

  section.intro {
    height: 100vh;

    @include gradient_indigo-fuschia-box;

    background-attachment: fixed;

    h1 {
      letter-spacing: 0.15rem;

      .vibe-logo {
        color: $white;
        font-size: 1.4rem !important;
        letter-spacing: 0.2rem;
      }
    }

    .container {
      @include content-container;
      @include full-height-container-vertically-centered;
    }

    .logo .vibe-logo {
      font-size: 10rem !important;
      letter-spacing: 0.8rem;

      @include gradient_amber-red-amber;
      @include prepare-text-for-gradient;
    }
  }
</style>

<section class="intro">
  <div class="container">
  <div class="logo"><span class="vibe-logo gradient_amber_red_amber">vibe</span></div>
  <h1>Welcome to <span class="vibe-logo">vibe</span> — the next generation of <br>meditation and mindfulness.</h1>
</div>
</section>