let list = document.getElementsByClassName("map-list-content")[0];
let btns = document.getElementsByClassName("btn");

window.onload = ()=>{
    judgeNav();
    addNav();
    topClick();
    addMap(maps);
    addClick();
}


//加载所选地图
function addMap(map){
    let html = ``;
    for(let item of map){
        let tmp = ``;
        for(let i=0; i<item.type.length; i++){
            tmp+=svgs[item.type[i]];
        }
        html+=`
        <a class="item">
        <div class="img">
        <img src=${item.imgUrl} alt="">
        </div>
        <p><img src=${item.icon} alt=""><span>${item.name}</span></p>
        <p>
           ${tmp}
        </p>
    </a>
        `;
    }
    list.innerHTML = html;
}

//选择地图
function selectMap(num){
    return maps.filter((item)=>{
        let tmp = ""+item.type;
        if(tmp.indexOf(num)==-1){
            return false;
        }
        return true;
    })
}

//绑定点击事件
function addClick(){
    for(let i in btns){
        btns[i].onclick = (e)=>{
            e.preventDefault();
            i==1? addMap(maps):addMap(selectMap(i-2));

            for(let i=0; i<btns.length; i++){
                btns[i].classList.remove("isActive");
            }
            btns[i].classList.add("isActive");
        }
    }
}

