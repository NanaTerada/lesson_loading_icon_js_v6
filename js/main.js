'use strict'

// 即時関数？？！
// returnを使うために関数にする。returnがブロックではつかえないので

    (() => {
      class Icon {
          constructor(canvas) {

          }

          run() {
              
          }
      }

        const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext　== 'undefined') { //canvas がサポートされていなかった場合
        return;
    }

    const icon = new icon(canvas);
    icon.run();
    })();
    