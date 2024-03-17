
// 
    const banner = document.querySelector(".banner")
    const play = document.querySelector(".play")
    const video = document.querySelector(".video")
    const closeI = document.querySelector(".video button")
    const videoM = document.querySelector(".video iframe")
    const dnone = document.querySelector(".dnone")
          play.addEventListener("click", ()=>{
            video.style.width = '100vw'
            video.style.height = '100vh'
            video.style. zIndex = '100'
            video.style.opacity = '1'
          })
          closeI.addEventListener("click", ()=>{
            video.style. zIndex = '-100'
            video.style.width = '0vw'
            video.style.height = '0vh'
            video.style.opacity = '0'
          })
function changeBg(bg, title, lorem, videos, link) {
    const img_title = document.querySelector(".content .img-title")
    const p = document.querySelector(".content p")
    const video = document.querySelector(".video iframe")
    const contents = document.querySelectorAll(".content")
    const href = document.querySelectorAll(".button a")
    const href2 = document.querySelector('.button a2')
    banner.style.background = ` linear-gradient(rgba(0, 0, 0, 0.053),rgba(0, 0, 0, 0.695)),url('${bg}')`
    banner.style.backgroundSize = "cover"
    banner.style.backgroundPosition = 'center'
    
    img_title.getAttribute('src')
    img_title.setAttribute("src", title)

    video.getAttribute('src')
    video.setAttribute("src", videos)
    p.innerHTML = lorem

    href.forEach(e => {
        e.getAttribute("href")
        e.setAttribute('href', link)
    })
    href2.getAttribute("href")
    href2.setAttribute('href', link)
}