let btn  = document.querySelector("#btn");
let sidebar  = document.querySelector(".sidebar");
let searchBtn  = document.querySelector("bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");

}


searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
    
}

// sidebar.onclick = function(){
//     sidebar.classList.toggle("active");
    
// }
//
// btn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("active");
//     menuBtnChange();//calling the function(optional)
//   });

//   searchBtn.addEventListener("click", ()=>{ // Sidebar active when you click on the search iocn
//     sidebar.classList.toggle("active");
//     menuBtnChange(); //calling the function(optional)
//   });

//   // following are the code to change sidebar button(optional)
//   function menuBtnChange() {
//    if(sidebar.classList.contains("active")){
//     btn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//    }else {
//     btn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//    }
// }