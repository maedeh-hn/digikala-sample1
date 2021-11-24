import React , {useEffect} from 'react'
import img1 from "../../assests/imges/img1.jpg"
import img2 from "../../assests/imges/img2.jpg"
import img3 from "../../assests/imges/img3.jpg"
import img4 from "../../assests/imges/img4.jpg"
import img5 from "../../assests/imges/img5.jpg"
import img6 from "../../assests/imges/img6.jpg"


export default function TopBanner() {
    useEffect(()=>{
        var current = 0,
    slides = document.querySelectorAll(".banner-img");
    console.log(slides);
setInterval(function() {
   

  for (var i = 0; i < slides.length; i++) {
      
    slides[i].style.opacity = 0;
    
  }

current++
if(current>slides.length-1){
    current=0
}
  slides[current].style.opacity = 1;
}, 4000);
    },[])

    return (

    <div className="container">
    <div className="row" id="home">
    <div className="col-md-8 col-sm-6">
            <div className="banner">
        <img src= {img1} alt="عکس اول" className="banner-img"/>
        <img src={img2} alt="عکس دوم" className="banner-img"/>
        <img src={img3} alt="عکس سوم" className="banner-img"/>
        <img src={img4} alt="عکس سوم" className="banner-img"/>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            
            <div ><img className="imgdiv" src={img5}/></div>
            <div><img className="imgdiv" src={img6}/></div>
            

        </div>

    </div>

</div>
      
    )
}