/* global paper, Tool, Path, Point, Size, Symbol, view */

function*  getColorPallete(){
  const colors = { red:
      [
        
        '#e57373',
        '#ef5350',
        '#f44336',
        '#e53935',
        '#d32f2f',
        '#c62828',
        '#b71c1c',
        '#ff8a80',
        '#ff5252',
        '#ff1744',
        '#d50000' ],
    pink:
      [ 
        '#f48fb1',
        '#f06292',
        '#ec407a',
        '#e91e63',
        '#d81b60',
        '#c2185b',
        '#ad1457',
        '#880e4f',
        '#ff80ab',
        '#ff4081',
        '#f50057',
        '#c51162' ],
    purple:
      [ 
        '#ba68c8',
        '#ab47bc',
        '#9c27b0',
        '#8e24aa',
        '#7b1fa2',
        '#6a1b9a',
        '#4a148c',
        '#ea80fc',
        '#e040fb',
        '#d500f9',
        '#aa00ff' ],
    deeppurple:
      [ 
        '#9575cd',
        '#7e57c2',
        '#673ab7',
        '#5e35b1',
        '#512da8',
        '#4527a0',
        '#311b92',
        '#b388ff',
        '#7c4dff',
        '#651fff',
        '#6200ea' ],
    indigo:
      [ 
        '#5c6bc0',
        '#3f51b5',
        '#3949ab',
        '#303f9f',
        '#283593',
        '#1a237e',
        '#8c9eff',
        '#536dfe',
        '#3d5afe',
        '#304ffe' ],
    blue:
      [ 
        '#64b5f6',
        '#42a5f5',
        '#2196f3',
        '#1e88e5',
        '#1976d2',
        '#1565c0',
        '#0d47a1',
        '#82b1ff',
        '#448aff',
        '#2979ff',
        '#2962ff' ],
    lightblue:
      [ ,
        '#4fc3f7',
        '#29b6f6',
        '#03a9f4',
        '#039be5',
        '#0288d1',
        '#0277bd',
        '#01579b',
        '#40c4ff',
        '#00b0ff',
        '#0091ea' ],
    cyan:
      [ 
        '#80deea',
        '#4dd0e1',
        '#26c6da',
        '#00bcd4',
        '#00acc1',
        '#0097a7',
        '#00838f',
        '#006064',
        '#18ffff',
        '#00e5ff',
        '#00b8d4' ],
    teal:
      [ 
        '#80cbc4',
        '#4db6ac',
        '#26a69a',
        '#009688',
        '#00897b',
        '#00796b',
        '#00695c',
        '#004d40',
        
        '#64ffda',
        '#1de9b6',
        '#00bfa5' ],
    green:
      [ 
        '#a5d6a7',
        '#81c784',
        '#66bb6a',
        '#4caf50',
        '#43a047',
        '#388e3c',
        '#2e7d32',
        '#1b5e20',
        '#b9f6ca',
        '#69f0ae',
        '#00e676',
        '#00c853' ],
    lightgreen:
      [ 
        '#aed581',
        '#9ccc65',
        '#8bc34a',
        '#7cb342',
        '#689f38',
        '#558b2f',
        '#33691e',
        '#ccff90',
        '#b2ff59',
        '#76ff03',
        '#64dd17' ],
    lime:
      [ 
        '#e6ee9c',
        '#dce775',
        '#d4e157',
        '#cddc39',
        '#c0ca33',
        '#afb42b',
        '#9e9d24',
        '#827717',
        '#f4ff81',
        '#eeff41',
        '#c6ff00',
        '#aeea00' ],
    yellow:
      [ 
        '#fff59d',
        '#fff176',
        '#ffee58',
        '#ffeb3b',
        '#fdd835',
        '#fbc02d',
        '#f9a825',
        '#f57f17',
        '#ffff8d',
        '#ffff00',
        '#ffea00',
        '#ffd600' ],
    amber:
      [
        '#ffe082',
        '#ffd54f',
        '#ffca28',
        '#ffc107',
        '#ffb300',
        '#ffa000',
        '#ff8f00',
        '#ff6f00',
        '#ffe57f',
        '#ffd740',
        '#ffc400',
        '#ffab00' ],
    orange:
      [ 
        '#ffcc80',
        '#ffb74d',
        '#ffa726',
        '#ff9800',
        '#fb8c00',
        '#f57c00',
        '#ef6c00',
        '#e65100',
        '#ffd180',
        '#ffab40',
        '#ff9100',
        '#ff6d00' ],
    deeporange:
      [ 
    
        '#ff8a65',
        '#ff7043',
        '#ff5722',
        '#f4511e',
        '#e64a19',
        '#d84315',
        '#bf360c',
        '#ff9e80',
        '#ff6e40',
        '#ff3d00',
        '#dd2c00' ],
    brown:
      [ 
  
        '#a1887f',
        '#8d6e63',
        '#795548',
        '#6d4c41',
        '#5d4037',
        '#4e342e',
        '#3e2723' ],
    bluegrey:
      [ 
        '#90a4ae',
        '#78909c',
        '#607d8b',
        '#546e7a',
        '#455a64',
        '#37474f',
        '#263238' ] }

  const max = Object.values(colors).length

  const colorPallete = Object.values(colors)[Math.floor(Math.random() * max)]
  let n = 0;
  while(true){
    console.log(colorPallete);
    yield colorPallete[n]
    n = (n+1 >= colorPallete.length)? 0: n+1;
  }


}



paper.install(window);
var t;

window.onload = function() {
  // Setup directly from canvas id:
  const colorPallete = getColorPallete();
  const txtr = LZString.decompressFromBase64(data).split(";")

  paper.setup("myCanvas");
  t = new Tool();

  // Place and animate shapes, based on http://andyshora.com/easy-paper-js-tutorial.html

  // The Path.Circle constructor takes a Point(x, y), and a radius

  function initDrawing(arrayOfSequence) {
    
    let a = arrayOfSequence
    
    function drawArc(begin, end, percent) {
      percent = percent / 100;
      let b = new Point(begin + offset.x, offset.y);

      let halfDistance = Math.abs((begin - end) / 2);
      const c = new Point(
        (begin < end ? begin + halfDistance : begin - halfDistance) + offset.x,
        offset.y
      );

      let m = new Point(b);
      m = m.rotate((percent / 2) * 180, c);
      let e = new Point(b);
      e = e.rotate(percent * 180, c);
      var path = new Path.Arc(b, m, e);

      path.strokeColor = currentColor;
      return path;
    }

    // let fib = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1, 1, 6, 15, 20, 15, 6, 1, 1, 7, 21, 35, 35, 21, 7, 1, 1, 8, 28, 56, 70, 56, 28, 8, 1, 1, 9, 36, 84, 126, 126, 84, 36, 9, 1, 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1, 1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1]
    // let recaman = [	0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91, 157, 224, 156, 225, 155]
    // let A119560 = [	-1, 1, -3, 3, -3, 1, 1, -5, 5, -7, 7, -7, 5, -3, -1, 5, -7, 11, -11, 13, -13, 13, -11, 9, -5, 1, 5, -13, 17, -23, 27, -31, 33, -37, 37, -39, 39, -39, 37, -35, 31, -27, 21, -15, 7, 1, -11, 19, -27, 33, -41, 45, -51, 55, -59, 61, -65, 65, -67, 67, -67, 65, -63, 59]
    // let a = A119560;

    function maxHeight(ar) {
      const getH = (a, b) => {
        return Math.abs(a - b) / 2;
      };

      return ar.reduce((acc, val, ind) => {
        let a = val;
        let b = ar[ind + 1];

        if (b && getH(a, b) > acc) {
          return getH(a, b);
        } else {
          return acc;
        }
      }, 0);
    }
    

    let factor = 800/(maxHeight(a)*2);
    let speed = 10;

    let offset = {
      y: maxHeight(a) * factor + 10,
      x: Math.min(...a) >= 0 ? 10 : Math.abs(Math.min(...a) * factor) + 10
    };

    let currentIndex = 0;
    let currentColor = colorPallete.next().value
    let drawingPercent = 0;
    let lastPath;
    
    highlightIndex(currentIndex)
    
    // Animate elements
    view.onFrame = function(event) {
      if (drawingPercent <= 100) {
        if (lastPath && drawingPercent + 1 * speed < 100) {
          lastPath.removeSegments();
        }
        lastPath = drawArc(
          a[currentIndex] * factor,
          a[currentIndex + 1] * factor,
          drawingPercent
        );

        drawingPercent += 1 * speed;
      } else {
        lastPath = null;
        if (currentIndex + 2) {
          currentIndex += 1;
          drawingPercent = 0;
          currentColor = colorPallete.next().value
          highlightIndex(currentIndex)
        }
      }
    };
  }
 

  
  //var myRequest = new Request('https://oeis.org/search?q=id:A100000&fmt=json', myInit);
  let al = txtr[Math.floor(Math.random() * 500)].split(":")
  al = [al[0], al[1].split(",")]

  
  
  

  
 
  function highlightIndex(index){
    // if((index - 1) > 0 ){
    //   document.querySelector(".ser-" + index).style.backgroundColor()
    // }
    document.querySelector(".ser-" + index).style.backgroundColor = "plum"
  }
  
  document.querySelector(".link").href = "http://oeis.org/"+al[0]
  
  document.querySelector(".series").innerHTML = al[1].reduce((acc, val, ind)=>{
    
    return acc+=`<span class="ser-${ind}">${val},</span>` 
    
  }, "");
  
  
  
  
  initDrawing(al[1])
  
  
};
