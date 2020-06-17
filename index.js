let products = document.getElementsByClassName("product"),
    posX, posY;


Array.prototype.forEach.call(products,(item,index) => {

    item.onmouseenter = () => {
      let detail = document.createElement("div");
      document.body.appendChild(detail);
      detail.style.width = "400px";
      detail.style.height = "320px";
      detail.style.border = "3px solid #ccc";
      detail.style.overflow = "hidden";

      // console.log(event.clientX);

      source = index + 1;
      imgSrc = 'img/' + source + '.jpeg' ;
      let img =  document.createElement("img");
      img.src = imgSrc;
      detail.appendChild(img);

      document.onmousemove = (event) => {
        event = event || window.event;
         posX = event.clientX;
         posY = event.clientY;
         detail.style.position = "absolute";
         sLeft = parseInt(posX) + 20;
         sTop = parseInt(posY) + 20;

         // console.log(top);
         // console.log(left);
         detail.style.left = sLeft + "px";
         detail.style.top = sTop + "px";

      }

      item.onmouseleave = () => {
        document.body.removeChild(detail);
      }




    }

});
