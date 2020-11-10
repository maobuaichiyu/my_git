let ul = document.getElementsByClassName("hero-ul")[0];
let lis = document.getElementsByClassName("hero-li");
let li_a = document.getElementsByClassName("mark");
let text = document.getElementsByClassName("hero-infor-text")[0];
let img = document.getElementsByClassName("hero-infor-img")[0];
let video = document.getElementsByClassName("video-1")[0];
let video_control = document.getElementsByClassName("video-control")[0];
let video_bg = document.getElementsByClassName("control-bg")[0];

//弹出视频
let videos = document.getElementsByClassName("videos")[0];
let cut = document.getElementsByClassName("cut")[0];
let video2 = document.getElementsByClassName("video")[0];
let v = document.getElementById("v1");
window.onload = ()=>{
    judgeNav();
    addNav();
    topClick();
    addHero();
    addOnclick();
    addStop();
}
//加载英雄列表
function addHero(){
    for(let item of heroes){
        let li = document.createElement("li");
        li.classList = "hero-li";
        let html = `
        <a href="" class="mark">
            <div class="hero-img-mask">
                <div class="hero-img" style="background-image:url(${item.icon})"></div>
            </div>
            <span>${item.name}</span>
        </a>
        `;
        li.innerHTML = html;
        ul.appendChild(li);
    }
}

//给英雄列表增加hover事件切换内容
function addOnclick(){
    for(let i in lis){
        lis[i].onmouseenter = (e)=>{
            for(let j =0; j<lis.length; j++){//清除原增加样式
                lis[j].classList.remove("isActive");
            }
            e.target.classList.add("isActive");  
            let hero = find(e.target.childNodes[1].childNodes[3].innerHTML)[0];
            text.innerHTML = `
                <h2>${hero.name}</h2>
                <p>${hero.description}</p>
            `;
            img.style.backgroundImage = `url(${hero.overlay})`;
        }
    }
}

//找到选择的是哪个英雄
function find(str){
    let hero = heroes.filter(
        (item,index)=>{
            if(item.name == str){
                return true;
            }
        }
    )
    return hero;
}


//暂停事件加上
function addStop(){
    video_control.onclick = ()=>{
        console.log(video);
        if(video.paused){  //如果已暂停则播放
            video_bg.classList.remove("isClick");
             video.play(); //播放控制
             
        }else{ // 已播放点击则暂停
  
            video_bg.classList.add("isClick");
            video.pause(); //暂停控制
            
        }
    }
}

//弹出视频
v.onclick = (e)=>{
    // e.preventDefault();
    video2.src = "https://overwatch.nosdn.127.net/1/images/game/about/video/CoPrF6333-mobile.mp4";
    videos.style.display = "block";
}
cut.onclick = (e)=>{
    e.preventDefault();
    video2.parentElement.pause();
    videos.style.display = "none";
}
