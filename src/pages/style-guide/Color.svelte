<script>
  import { onMount } from 'svelte';

  const colors = ['indigo', 'grey', 'fuchsia', 'cyan', 'green', 'amber', 'orange', 'red'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  let palettes = [];

  for(var i = 0; i < colors.length; ++i) {
  	for(var j = 0; j < shades.length; ++j) {
  	  palettes.push(
  	    {
  	      'color': colors[i],
  	      'cssClass': `${colors[i]}-${shades[j]}`,
  	      'shade': shades[j]
  	    }
  	  );
    }
  }

  onMount(() => {
    let gridContainer = document.getElementsByClassName('grid-container')[0];
    let gridTemplateAreas = '';
    //iterate over the colors and shades and create the grid elements
    for(var i = 0; i < colors.length; ++i) { //color row
      //add the color name for the row
      gridTemplateAreas += `"${colors[i]} `;
      for(var j = 0; j < shades.length; ++j) { //shade column
        //add the color name & shade
        gridTemplateAreas += `${colors[i]}-${shades[j]} `;
      }
      gridTemplateAreas += '" ';
    }

	gridContainer.style.gridTemplateAreas = gridTemplateAreas;

    console.log(gridTemplateAreas);
  });  
</script>

<div class="grid-container">
  {#each colors as color}
    <div class="color-title">{color}</div>
    {#each shades as shade}
      <div class="color-swatch">
        <div class="swatch {color}-{shade}"></div>
        <div><em>{shade}</em></div>
        <div>{color}-{shade}</div>
      </div>
    {/each}
  {/each}
</div>

<style type="text/scss">
  @import '../../styles/app.scss';

  div {
  	line-height: 20px;
  	display: block;
  }

  em {
  	font-style: normal;
  	font-weight: 600;
  }

  .color-lead {
  	position: relative;
  	width: 200px;
  }

  .color-swatch {
  	display: inline-block;
  	padding: 10px 10px;
  }

  .color-title {
  	vertical-align: middle;
  }

  .grid-container {
  	display: grid;
  	gap: 0px;
  	margin: 10px;
  }

  .swatch {
  	width: 75px;
  	height: 50px;
  	border-radius: 10px;
  }

  /** is there a way to automate this? **/

  .indigo-50  { background-color: $indigo-50;  };
  .indigo-100 { background-color: $indigo-100; };
  .indigo-200 { background-color: $indigo-200; };
  .indigo-300 { background-color: $indigo-300; };
  .indigo-400 { background-color: $indigo-400; };
  .indigo-500 { background-color: $indigo-500; };
  .indigo-600 { background-color: $indigo-600; };
  .indigo-700 { background-color: $indigo-700; };
  .indigo-800 { background-color: $indigo-800; };
  .indigo-900 { background-color: $indigo-900; };

  .grey-50  { background-color: $grey-50;  };
  .grey-100 { background-color: $grey-100; };
  .grey-200 { background-color: $grey-200; };
  .grey-300 { background-color: $grey-300; };
  .grey-400 { background-color: $grey-400; };
  .grey-500 { background-color: $grey-500; };
  .grey-600 { background-color: $grey-600; };
  .grey-700 { background-color: $grey-700; };
  .grey-800 { background-color: $grey-800; };
  .grey-900 { background-color: $grey-900; };

  .fuchsia-50  { background-color: $fuchsia-50;  };
  .fuchsia-100 { background-color: $fuchsia-100; };
  .fuchsia-200 { background-color: $fuchsia-200; };
  .fuchsia-300 { background-color: $fuchsia-300; };
  .fuchsia-400 { background-color: $fuchsia-400; };
  .fuchsia-500 { background-color: $fuchsia-500; };
  .fuchsia-600 { background-color: $fuchsia-600; };
  .fuchsia-700 { background-color: $fuchsia-700; };
  .fuchsia-800 { background-color: $fuchsia-800; };
  .fuchsia-900 { background-color: $fuchsia-900; };

  .cyan-50  { background-color: $cyan-50;  };
  .cyan-100 { background-color: $cyan-100; };
  .cyan-200 { background-color: $cyan-200; };
  .cyan-300 { background-color: $cyan-300; };
  .cyan-400 { background-color: $cyan-400; };
  .cyan-500 { background-color: $cyan-500; };
  .cyan-600 { background-color: $cyan-600; };
  .cyan-700 { background-color: $cyan-700; };
  .cyan-800 { background-color: $cyan-800; };
  .cyan-900 { background-color: $cyan-900; };

  .green-50  { background-color: $green-50;  };
  .green-100 { background-color: $green-100; };
  .green-200 { background-color: $green-200; };
  .green-300 { background-color: $green-300; };
  .green-400 { background-color: $green-400; };
  .green-500 { background-color: $green-500; };
  .green-600 { background-color: $green-600; };
  .green-700 { background-color: $green-700; };
  .green-800 { background-color: $green-800; };
  .green-900 { background-color: $green-900; };

  .amber-50  { background-color: $amber-50;  };
  .amber-100 { background-color: $amber-100; };
  .amber-200 { background-color: $amber-200; };
  .amber-300 { background-color: $amber-300; };
  .amber-400 { background-color: $amber-400; };
  .amber-500 { background-color: $amber-500; };
  .amber-600 { background-color: $amber-600; };
  .amber-700 { background-color: $amber-700; };
  .amber-800 { background-color: $amber-800; };
  .amber-900 { background-color: $amber-900; };

  .orange-50  { background-color: $orange-50;  };
  .orange-100 { background-color: $orange-100; };
  .orange-200 { background-color: $orange-200; };
  .orange-300 { background-color: $orange-300; };
  .orange-400 { background-color: $orange-400; };
  .orange-500 { background-color: $orange-500; };
  .orange-600 { background-color: $orange-600; };
  .orange-700 { background-color: $orange-700; };
  .orange-800 { background-color: $orange-800; };
  .orange-900 { background-color: $orange-900; };

  .red-50  { background-color: $red-50;  };
  .red-100 { background-color: $red-100; };
  .red-200 { background-color: $red-200; };
  .red-300 { background-color: $red-300; };
  .red-400 { background-color: $red-400; };
  .red-500 { background-color: $red-500; };
  .red-600 { background-color: $red-600; };
  .red-700 { background-color: $red-700; };
  .red-800 { background-color: $red-800; };
  .red-900 { background-color: $red-900; };

</style>