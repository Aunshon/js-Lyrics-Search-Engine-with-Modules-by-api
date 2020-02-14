import * as UI from './ui.js';
import { Api } from "./api.js";

UI.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    if (UI.artistInput.value === '' || UI.songInput.value === '') {
        UI.messageDiv.innerHTML = "All Field Must Be Filled Up"
        UI.messageDiv.classList.add('error');

        setTimeout(() => {
            UI.messageDiv.innerHTML = '';
            UI.messageDiv.classList.remove('error');
        }, 2000);

    } else {
        UI.resultDiv.innerHTML = `<img src="./aun.gif" width="430">`;
        // console.log(UI.artistInput.value + " : " + UI.songInput.value);
        const api = new Api(UI.artistInput.value, UI.songInput.value);
        api.queryApi().then(response => {
            const lyrics = response.data.lyrics;
            if (lyrics) {
                UI.resultDiv.innerHTML = '';
                UI.resultDiv.innerHTML = lyrics;
            } else {
                UI.resultDiv.innerHTML = '';
                UI.messageDiv.innerHTML = "No lyrics Found 😢";
                UI.messageDiv.classList.add('error');

                setTimeout(() => {
                    UI.messageDiv.innerHTML = '';
                    UI.messageDiv.classList.remove('error');
                    UI.searchForm.reset();
                }, 2000);
            }
        });
    }
});