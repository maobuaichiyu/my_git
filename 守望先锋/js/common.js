let nav = document.getElementsByClassName("nav-menu")[0];
let nav_two = document.getElementsByClassName("two-nav");//获取二级菜单父元素
let sub_menu = document.getElementsByClassName("sub-menu");//获取二级菜单元素
let top_sport = document.getElementsByClassName("top-sport")[0];
let top_game = document.getElementsByClassName("top-game")[0];
let top_profile = document.getElementsByClassName("top-profile")[0];
let hide = document.getElementsByClassName("hiden")[0];
let hide_bg = document.getElementsByClassName("hide-bg")[0];
let nav_game = document.getElementsByClassName("nav-game")[0];
let nav_competion = document.getElementsByClassName("nav-competion")[0];
let nav_menu = document.getElementsByClassName("nav-menu")[0];
let nav_icon = document.getElementsByClassName("nav-icon");
let profile_content =document.getElementsByClassName("profile-content")[0];


//导航栏是否在最上面

function judgeNav(){
    setInterval(()=>{
        window.pageYOffset>27? nav.classList.add("isScroll"):nav.classList.remove("isScroll");
        window.pageYOffset>27? hide.style.display = "block":hide.style.display = "none";

    },100);
}

//导航栏点击事件加载
function addNav(){
    for(let i in nav_two){
        nav_two[i].onclick = (e)=>{
            e.preventDefault();
            let cur =  e.target.nextSibling.nextSibling;
            if(cur.classList.contains("sub-isActive")){
                cur.classList.remove("sub-isActive");
                e.target.classList.remove("is_active_a");
                e.target.parentNode.classList.remove("is_active_li");
            }else{
                for(let i=0; i<sub_menu.length; i++){//把原来打开的菜单清除
                    sub_menu[i].classList.remove("sub-isActive");
                    sub_menu[i].parentNode.classList.remove("is_active_li");
                    sub_menu[i].previousSibling.previousSibling.classList.remove("is_active_a");
                }
                cur.classList.add("sub-isActive");
                e.target.classList.add("is_active_a");
                e.target.parentNode.classList.add("is_active_li");
            }
          
        }
    }

}




//顶部点击事件绑定
function topClick(){
    top_game.onclick = (e)=>{
        e.preventDefault();
        if(nav_game.style.display == "none"){
            removeTop();
            hide_bg.style.display = "block";
            nav_game.style.display = "block";
            nav_icon[0].classList.add("icon-isActive");
            nav_menu.style.display = "none";
            profile_content.style.display = "none";
            nav_competion.style.display = "none";
        }else{
            hide_bg.style.display ="none";
            nav_game.style.display = "none";
            nav_icon[0].classList.remove("icon-isActive");
            nav_menu.style.display = "block";
        }
    }
    top_sport.onclick = (e)=>{
        e.preventDefault();
        if(nav_competion.style.display == "none"){
            removeTop();
            hide_bg.style.display ="block";
            nav_competion.style.display = "block";
            nav_icon[1].classList.add("icon-isActive");
            nav_menu.style.display = "none";
            profile_content.style.display = "none";
            nav_game.style.display = "none";
        }else{
            hide_bg.style.display ="none";
            nav_competion.style.display = "none";
            nav_icon[1].classList.remove("icon-isActive");
            nav_menu.style.display = "block";
        }
    }
    top_profile.onclick = (e)=>{
        e.preventDefault();
        if(profile_content.style.display == "none"){
            removeTop();
            hide_bg.style.display ="block";
            profile_content.style.display = "block";
            nav_icon[2].classList.add("icon-isActive");
            nav_menu.style.display = "none";
            nav_game.style.display = "none";
            nav_competion.style.display = "none";
        }else{
            hide_bg.style.display ="none";
            profile_content.style.display = "none";
            nav_icon[2].classList.remove("icon-isActive");
            nav_menu.style.display = "block";
        }
    }
}

//通过循环去掉顶部箭头
function removeTop(){
    for(let i=0; i<3; i++){
        nav_icon[i].classList.remove("icon-isActive");
    }
}



