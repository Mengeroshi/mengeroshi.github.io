const navBar = document.querySelectorAll('.nav_bar__item');
const sections = document.querySelectorAll('section');
const powarade = '#1DD0F8';
const blueDemon = '#043F63';



function defaultColors(){
    navBar.forEach( item=>{
    item.style.color = powarade;
    item.style.backgroundColor = blueDemon;
    item.style.borderColor = powarade;
    });
}

function highlighted(item){
    item.style.color = blueDemon;
    item.style.backgroundColor = powarade;
    item.style.borderColor = blueDemon;
}



window.addEventListener('scroll', ()=>{
    sections.forEach(section=>{
        let scrolled = window.scrollY;
        const distance = getDistanceBetweenElements(
            sections[3],
            sections[4]
          );

        if(scrolled >= sections[4].offsetTop - (distance/1.2)){
            defaultColors()
            highlighted(navBar[5]);
        }else if ((scrolled+100) >= section.offsetTop){
            switch(section.id){
                case  'about_me':
                    defaultColors()
                    highlighted(navBar[1]);
                    break;
                case  'work_xp':
                    defaultColors()
                    highlighted(navBar[2]);
                    break;
                case  'portfolio':
                    defaultColors()
                    highlighted(navBar[3]);
                    break;
                case  'lectures':
                    defaultColors()
                    highlighted(navBar[4]);
                    break;
                
               
                
            }
        }
        
    })

    
})


function getPositionAtCenter(element) {
    const {top, left, width, height} = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2
    };
  }
 
 function getDistanceBetweenElements(a, b) {
   const aPosition = getPositionAtCenter(a);
   const bPosition = getPositionAtCenter(b);
 
   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
 }
 