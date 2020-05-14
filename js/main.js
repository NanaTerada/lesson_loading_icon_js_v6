// 'use strict'

// 即時関数？？！'use strict'あるとエラーになる・・
// returnを使うために関数にする。returnがブロックではつかえないので

    (() => {
      class Icon {
          constructor(canvas) {
            this.ctx = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
            this.r = 60;
          }

          draw() { 
            // 座標空間を回転させる
                this.ctx.translate(this.width / 2,this.height / 2);

            this.ctx.beginPath();
            //this.ctx.arc(this.width / 2,this.height / 2, this.r ,0 ,2 * Math.PI);
            this.ctx.arc(0 ,0 , this.r ,0 ,2 * Math.PI);
            this.ctx.stroke();

            this.ctx.beginPath();
            // this.ctx.moveTo(this.width / 2,this.height / 2 -this.r -5);
            // this.ctx.lineTo(this.width / 2,this.height / 2 -this.r +5);
            this.ctx.moveTo(0 , -this.r -5);
            this.ctx.lineTo(0 , -this.r +5);
           // this.ctx.strokeStyle = 'orenge';
            this.ctx.strokeStyle ='orenge';
            this.ctx.lineWidth = 6;
            this.ctx.stroke();

            

          
          }

          run() {
            this.draw();
          }
      }

        const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext　== 'undefined') { //canvas がサポートされていなかった場合
        return;
    }

    const icon = new Icon(canvas);
    icon.run();

    })();
    