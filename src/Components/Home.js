import React, { useEffect, useState } from 'react';
import '../Assets/Home.css';
import a1 from '../Assets/a1.png';
import a2 from "../Assets/a2.png";
import a3 from "../Assets/a3.png";
import a4 from "../Assets/a4.png";
import a5 from "../Assets/a5.png";
import a6 from "../Assets/a6.png";
function Home() {
  const [state, setState] = useState({className: 'red-box'});
  useEffect(() => {
  window.addEventListener('scroll', reveal);
  })
  const reveal = () => {
    let reveals = document.querySelectorAll("section");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 170;
      if (elementTop < windowHeight - elementVisible) {
        reveals[0].classList.add("white-box");
      } else if (elementTop < windowHeight - elementVisible + 150) {
        reveals[1].classList.add("tur-box");
      } else if (elementTop < windowHeight - elementVisible + 300) {
        reveals[2].classList.add("orange-box");
      } else if (elementTop < windowHeight - elementVisible + 450) {
        reveals[3].classList.add("yellow-box");
      } else if (elementTop < windowHeight - elementVisible + 600) {
        reveals[4].classList.add("blue-box");
      } else  {
        reveals[5].classList.add("red-box");
      }

    }
  }
   return (
     <div>
       <h1 className="p-2">BACKSTAGE TALKS</h1>
       <section className={state}>
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a1} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
       <section  className={state}>
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a2} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
       <section id="orange-box">
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a3} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
       <section id="yellow-box">
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a4} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
       <section id="blue-box">
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a5} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
       <section id="red-box">
         <div className=" d-flex justify-content-center text-center flex-column align-items-center">
           <div className="image-box ">
             <img src={a6} alt="backstage" className="" />
             <h3 className="fs-4">Issue #6</h3>
             <p className="pink pt-2 fw-semibold">BUY HERE</p>
             <p className="pink  fw-semibold">or in selected stores</p>
           </div>
         </div>
       </section>
     </div>
   );
}

export default Home;