/* global paper, Tool, Path, Point, Size, Symbol, view */





paper.install(window);
var t;

window.onload = function() {
  // Setup directly from canvas id:
  console.log(data = LZString.decompress(data));

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

      path.strokeColor = "black";
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
    let drawingPercent = 0;
    let lastPath;

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
        }
      }
    };
  }
  var myInit = { method: 'GET',
               headers: {
                   'Content-Type': 'text/html'
               },
               mode: 'cors',
               cache: 'default' };


  
  //var myRequest = new Request('https://oeis.org/search?q=id:A100000&fmt=json', myInit);
  let al = txtr[Math.floor(Math.random() * 1000)].split(":")
  al = [al[0], al[1].split(",")]
  $(".series").text(al[1])
  initDrawing(al[1])
  
  
};