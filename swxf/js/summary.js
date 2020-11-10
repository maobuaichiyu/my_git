let videos = document.getElementsByClassName("videos")[0];
let cut = document.getElementsByClassName("cut")[0];
let video = document.getElementsByClassName("video")[0];
let track = document.getElementsByTagName("track")[0];
let v1 = document.getElementsByClassName("v1")[0];
let v2 = document.getElementsByClassName("v2")[0];
let v3 = document.getElementsByClassName("v3")[0];
window.onload = ()=>{
    judgeNav();
    addNav();
    topClick();
}

v1.onclick = (e)=>{
    e.preventDefault();
    video.src = "https://overwatch.nosdn.127.net/1/images/game/about/video/CoPrF6333-mobile.mp4";
    videos.style.display = "block";
}
v2.onclick = (e)=>{
    e.preventDefault();
    video.src = "https://blz-videos.nosdn.127.net/1/OverWatch/Overwatch_WorkshopSizzle_zhCN_720p_L%26zef.mp4";
    videos.style.display = "block";
}
v3.onclick = (e)=>{
    e.preventDefault();
    video.src = "https://overwatch.nosdn.127.net/2/videos/OVR_PatchNotes_125_FINAL_zhCH.mp4.mp4";
    videos.style.display = "block";
}

cut.onclick = (e)=>{
    e.preventDefault();
    video.pause();
    videos.style.display = "none"; 
}