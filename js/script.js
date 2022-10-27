
const { createApp } = Vue

createApp({
    data() {
        return {
            immagineAttiva: 0,
            message: 'Hello Vue!',
            slides: [
                {
                    image: './img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        prevImage() {
            const thumb = document.querySelectorAll(".thumb")
            const currentThumb = thumb[this.immagineAttiva]
            currentThumb.classList.remove("active")
            this.immagineAttiva--
            if (this.immagineAttiva < 0) {
                this.immagineAttiva = this.slides.length - 1
            }
            let nextThumb = thumb[this.immagineAttiva]
            nextThumb.classList.add("active")
        },
        nextImage() {
            const thumb = document.querySelectorAll(".thumb")
            const currentThumb = thumb[this.immagineAttiva]
            currentThumb.classList.remove("active")
            this.immagineAttiva++
            if (this.immagineAttiva === this.slides.length) {
                this.immagineAttiva = 0
            }
            let nextThumb = thumb[this.immagineAttiva]
            nextThumb.classList.add("active")
        },
        /*
        primaryImg(){
            const test = document.querySelector(".item > img")
            const test2 = document.querySelector(".thumbs > .active")
            test.src= "./img/05.webp"
            console.log(test);
            console.log(test2);
        }
        */
    }
}).mount('#app')




// // ${index === 0 ? 'active' : ""}
// se index è uguale a 0 ? allora aggiungi "active"
// : altrimenti "" (non aggiungere niente)


















