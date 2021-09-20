let videos = (() => {
    let modifyUrl = (url, id) => {
        id.setAttribute('src', url);
    };
    return {
        publicModifyUrl: (url, id) => modifyUrl(url, id),
    };
})();

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url
    }

    setInicio() {
        return `Este método es para realizar un cambio en la URL del video;`
    };
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this.id = id;
        let _id = id;

        this.getId = () => _id;
    }

    setInicio(tiempo) {
        this.getId().setAttribute('src', `${this.url}?start=${tiempo}`)
    }

    playMultimedia() {
        videos.publicModifyUrl(this.url, this.getId());

    }
}

let playMusica = new Reproductor("https://www.youtube.com/embed/rNdkbXe_1CA", musica);
playMusica.playMultimedia();
playMusica.setInicio(5);
let playPeliculas = new Reproductor("https://www.youtube.com/embed/Lm8p5rlrSkY", peliculas);
playPeliculas.playMultimedia();
playPeliculas.setInicio(5);
let playSeries = new Reproductor("https://www.youtube.com/embed/acyb4wBTWHs", series);
playSeries.playMultimedia();
playSeries.setInicio(5);
