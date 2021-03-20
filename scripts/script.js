const colorSet = () => {
    color = "hsl(0, 50%, 50%)";
    document.body.style.backgroundColor = color;
}

colorSet();

window.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = "hsl("+window.scrollY/-10+", 50%, 50%)"
    console.log(window.scrollY)
})

const cards = document.querySelector('#cards')
for (let project of projects) {
    let div = document.createElement('div')
    div.className = 'card reveal'
    let link = document.createElement('a')
    link.className = 'linkCard'
    link.target = '_blank'
    link.href = project.link
    link.setAttribute('alt', project.alt)
    let img = document.createElement('img')
    img.className = 'imgCard'
    img.src = project.img
    img.setAttribute('alt', project.altImg)
    link.appendChild(img)
    let para = document.createElement('p')
    para.className = 'paraCard'
    para.textContent = project.para
    div.appendChild(link)
    div.appendChild(para)
    cards.appendChild(div)
}

const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
}

const handleIntersect = (entries, observer) => {
    for (let entry of entries) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {
            // entry.target.classList.remove('reveal-visible')
        }
    }
}

const observer = new IntersectionObserver(handleIntersect, options)
const reveal = document.querySelectorAll('.reveal')
for (let x of reveal) {
    observer.observe(x)
}