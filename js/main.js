// preparing nav logic

let navLinks = Array.from(document.querySelectorAll('nav ul li a'))

navLinks.forEach(link => {
    link.onclick = function () {
        navLinks.forEach(link => link.classList.remove('active')) 
        this.classList.toggle('active')
    }
})

// nav toggler
let toggleBtn = document.querySelector('.burger');
let navContainer = document.querySelector('nav ul.links');

toggleBtn.onclick = function () {
    navContainer.classList.toggle('col')
}


let landingSection = document.querySelector('.head-slider')
let servArr = Array.from(document.querySelectorAll('.head-slider .srv'))
let imgsArr = ['landing01.jpg', 'landing02.jpg', 'landing03.jpg', 'landing04.jpg', 'landing05.jpg', 'landing06.jpg' ]

// declare variables
let currentSlide = 1;
let leftArrow = document.querySelector('.head-slider .left');
let rightArrow = document.querySelector('.head-slider .right');
let slideBullets = Array.from(document.querySelectorAll('.bullets li'))

// create the checker function
function checker () {
    removeAllActive()
    landingSection.style.backgroundImage = 'url("../imgs/' + imgsArr[currentSlide - 1] + '")';
    slideBullets[currentSlide - 1].classList.add('active')
    servArr[currentSlide - 1].classList.add('active')
    clearInterval(firstInt)
}
document.querySelectorAll('.bullets li').forEach(li => {
    li.onclick = function () {
        removeAllActive()
        slideBullets.forEach(bullet => {
            bullet.classList.remove('active')
            this.classList.add('active')
            landingSection.style.backgroundImage = 'url("../imgs/' + imgsArr[parseInt(this.getAttribute('data-index')) - 1] + '")';
            servArr[parseInt(this.getAttribute('data-index')) - 1].classList.add('active')
            clearInterval(firstInt)
            currentSlide = parseInt(this.getAttribute('data-index'))        
        })
    }
})


// remove active function
function removeAllActive () {
    servArr.forEach(srv => {
        srv.classList.remove('active')   
    })
    slideBullets.forEach(bullet => {
        bullet.classList.remove('active')
    })
}

// interval for landing background
let firstInt = setInterval(() => {
    let randomNum = Math.floor(Math.random() * servArr.length)
        removeAllActive()
        servArr[randomNum].classList.add('active')
        slideBullets[randomNum].classList.add('active')
        landingSection.style.backgroundImage = 'url("../imgs/' + imgsArr[randomNum] + '")'
    }, 4000)
function leftSlide () {
    if (currentSlide <= 1) {
        currentSlide = slideBullets.length + 1
    } else {
        currentSlide--
        checker()   
        clearInterval(firstInt)
    }
}
function rightSlide () {
    if (currentSlide == slideBullets.length) {
        currentSlide = 0
    } else {
        removeAllActive()
        currentSlide++
        clearInterval(firstInt)
        checker()
    }
}

leftArrow.onclick = leftSlide;
rightArrow.onclick = rightSlide;    

// about section - accordion logic

// declare main variables
let allAccords = Array.from(document.querySelectorAll('.about .accordion .accordion-item'))


allAccords.forEach(accord => {
    accord.onclick = function () {
        allAccords.forEach(item => {
            item.classList.remove('clicked')
        })
        if(this.classList.contains('clicked')) {
            this.classList.remove('clicked')
        } else {
            this.classList.add('clicked')
        }
        
    }
})

// stats counter logic
let counters = document.querySelectorAll('.stats .box .counter')
let container = document.querySelector('.stats')

window.addEventListener('scroll', () => {
    counters.forEach(counter => {
        counter.textContent = 0
    })
  
    if(scrollY >= 300) {
        document.querySelector('.scroll-top').style = 'visibility: visible;'
    } else {
        document.querySelector('.scroll-top').style = 'visibility: hidden;'

    }

    if(scrollY > container.offetTop - container.offsetHeight - 200 {

        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0

            function updateCount () {
                let target = parseInt(counter.dataset.count)

                if(count < target) {
                    count += 20

                    counter.innerText = count

                    setTimeout(updateCount, 10)
                } else {
                    counter.innerText = target

                }
            }
            
            updateCount()



        });

    } 

})
// start projects logic

// define main variables
let allLinks = Array.from(document.querySelectorAll('.project .links li a'))

let allImages = Array.from(document.querySelectorAll('.project .image'))

function check () {

    allLinks.forEach(link => {
        link.onclick = function (e) {
            e.preventDefault()
            allLinks.forEach(link => link.classList.remove('active'))
            this.classList.add('active')
            console.log(parseInt(this.dataset.section))  
            allImages.forEach(img => {
                img.style.display = 'none'
                allImages.slice(parseInt(this.dataset.section)).forEach(img => img.style.display = 'block')
            })
        }
    })
}

check()

// testimonials logic
let postsArr = Array.from(document.querySelectorAll('.left .testi li'))
let allBullets = document.querySelectorAll('.testi .bullets li')

allBullets.forEach(bullet => {
    bullet.onclick = function () {
        allBullets.forEach(bullet => bullet.classList.remove('active'))
        this.classList.add('active')
        
        
        postsArr.forEach(post => {
            post.classList.remove('show')
            postsArr[parseInt(this.dataset.count) - 1].classList.add('show')
        })
    }
})

