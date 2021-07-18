let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let left = document.getElementById("leftbutton");
let right = document.getElementById("rightbutton");
let offset = 0;

let offsetChecker = () => {
  return offset <= 0 && offset >= -300;
};

right.onclick = (evt) => {
  offset -= 100;
  if (!offsetChecker()) {
    offset = 0;
  }
  slider1.style.transform = `translateX(${offset}%)`;
  slider2.style.transform = `translateX(${offset}%)`;
};

left.onclick = (evt) => {
  offset += 100;
  if (!offsetChecker()) {
    offset = -300;
  }
  slider1.style.transform = `translateX(${offset}%)`;
  slider2.style.transform = `translateX(${offset}%)`;

};



let navicon = document.getElementById("navicon");
let navmobile = document.getElementById("navmobile");
let clicked=false;
navicon.onclick=()=>{
  if(clicked===false){
    clicked=true;
    navmobile.style.height="400px";
    navmobile.style.boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
  else{
    clicked=false;
    navmobile.style.height="50px";
    navmobile.style.boxShadow="none";
  }
}