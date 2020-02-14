export class Api {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    async queryApi() {
        let url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        let fetching = await fetch(url);
        let data = await fetching.json();
        return {
            data
        }
    }
}