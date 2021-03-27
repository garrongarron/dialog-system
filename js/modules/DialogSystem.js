import cache from "./Cache.js"

class DialogSystem {
    constructor() {
        this.content = null
        this.container = document.createElement('div')
        this.container.classList.add('dialog-system-container')
        this.speaker = document.createElement('div')
        this.speaker.classList.add('dialog-system-container-speaker')
        this.speaker.innerText = 'Dummy text'
        this.speaker.classList.add('hide')
        this.text = document.createElement('div')

        this.container.appendChild(this.speaker)
        this.container.appendChild(this.text)

        this.t = 0
        this.string = ''
    }

    open() {
        document.body.appendChild(this.container)
        this.container.classList.add('fadeInDialog')
        this.container.classList.remove('fadeOutDialog')
        this.container.style.opacity = '1'
        setTimeout(() => {
            this.fetch()
        }, 1000);
        this.container.addEventListener('click', () => {
            if (this.t != 0) {
                clearInterval(this.t)
                this.t = 0
                this.text.innerHTML = this.string
                return
            }
            if (!this.fetch()) {
                this.close()
            }
        })
    }

    fetch() {
        let content = this.content.shift()
        if (typeof content == 'undefined') {
            return false
        }

        let index = 0
        this.string = content[1]
        this.speaker.innerText = content[0]
        this.speaker.classList.remove('hide')
        this.t = setInterval(() => {
            index++
            if (index > this.string.length) {
                clearInterval(this.t)
                this.t = 0
                return
            }
            let buffer = (this.string).slice(0, index) + "<span class='invisible'>" + (this.string).slice(index) + "</span>";
            this.text.innerHTML = buffer

        }, 50);
        return true
    }

    close() {
        this.container.classList.add('fadeOutDialog')
        this.container.classList.remove('fadeInDialog')
        this.container.style.opacity = '0'
        setTimeout(() => {
            cache.appendChild(this.container)
            console.log('saved on cache');
            this.speaker.classList.add('hide')
        }, 500);
    }

    loadContent(content) {
        this.content = content
    }
}

let dialogSystem = new DialogSystem()

export default dialogSystem