function getDistance(point1, point2) {
    console.log( point1,point2);
    const { x1,  y1 } = point1;
    const { x2,  y2 } = point2;
    console.log(point1.x1 - point2.x2);
    a = point1.x1 - point2.x2;
    console.log(a);
    b = point1.y1 - point2.y2
    console.log(b);
    let result = Math.sqrt( a*a + b*b )
    console.log(result);
  }
     getDistance({x1: 0, y1: 0}, {x2: 1, y2: 1})