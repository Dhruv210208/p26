
function bounceOff(o1,o2){


    if (o1.x - o2.x < o2.width/2 + o1.width/2
      && o2.x - o1.x < o2.width/2 + o1.width/2) {
    o1.velocityX =o1.velocityX * (-1);
    o2.velocityX = o2.velocityX * (-1);
  }
  if (o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2){
    o1.velocityY = o1.velocityY * (-1);
    o2.velocityY = o2.velocityY * (-1);
  }
  
  }
  
  

function istouching(){




    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
      fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
      movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2  ){
    
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }else
    
    {
    
      movingRect.shapeColor="yellow";
      fixedRect.shapeColor="green";
    }
    
  
  }
  
  