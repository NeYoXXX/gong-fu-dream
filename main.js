export default function draw(cout) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500);
  
      ctx.save();
      ctx.beginPath();
  
      header(ctx);
  
      // 身
      let bodyObj = body(ctx);
  
      // 左手
      // ctx.moveTo(75, 150);
      // ctx.lineTo(40, 180);
      // // ctx.moveTo(40, 180);
      // // ctx.lineTo(60, 200);
      // // 右手
      // ctx.moveTo(75, 150);
      // ctx.lineTo(115, 180);
  
      // 左腿
      zuoTui(ctx, bodyObj.x, bodyObj.y, cout);
  
      // 右腿
      youTui(ctx, bodyObj.x, bodyObj.y, cout);
  
      ctx.stroke();
  
      ctx.restore();
  
      ctx.translate(10,0)
      // window.requestAnimationFrame(() => draw(num))
    }
  }
  
  // let kongzhi = 1;
  
  // setInterval(() => {
  //   draw(kongzhi);
  //   kongzhi++;
  //   if (kongzhi > 4) {
  //     kongzhi = 1;
  //   }
  // }, 250);
  
  function header(ctx) {
    ctx.arc(75, 75, 30, 0, Math.PI * 2, true); // 绘制
  }
  
  function body(ctx) {
    let moveX = 75;
    let moveY = 105;
    let x = 70;
    let y = 180;
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(x, y);
    return { x: x, y: y };
  }
  
  function zuoTui(ctx, moveX, moveY, cout) {
    if (cout === 1) {
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(40, 250);
    } else if (cout === 2) {
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(55, 215);
      ctx.moveTo(55, 215);
      ctx.lineTo(17, 215);
    } else if (cout === 3) {
      // 70 , 180
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(75, 215);
      ctx.moveTo(75, 215);
      ctx.lineTo(50, 230);
    } else if (cout === 4) {
      // 70 , 180
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(85, 210);
      ctx.moveTo(85, 210);
      ctx.lineTo(70, 240);
    }
  }
  
  function youTui(ctx, moveX, moveY, cout) {
    if (cout === 1) {
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(100, 250);
    } else if (cout === 2) {
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(100, 190);
      ctx.moveTo(100, 190);
      ctx.lineTo(80, 230);
    } else if (cout === 3) {
      // 70 , 180
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(60, 250);
    } else if (cout === 4) {
      // 70 , 180
      ctx.moveTo(moveX, moveY);
      ctx.lineTo(50, 250);
    }
  }
  let kongzhi = 1;
  
  document.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.keyCode === 39) {
      draw(kongzhi);
      kongzhi++;
      if (kongzhi > 4) {
        kongzhi = 1;
      }
    }
  });
  
  draw(1);
  