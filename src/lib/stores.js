import { writable } from 'svelte/store';

export const count = writable(Array.from({ length: 10 }, (_, i) => i + 1));

//////-----Загрузка------//////////
export const data_loading = writable(false)
const data = writable()

export default function () {

    async function getdata() {
        data_loading.set(true)

        const query =  `d=${new Date().toISOString().slice(0, 10)}`
        const url = "https://old.ursei.su/Services/GetTeachersIniData?";

        try {
            const response = await fetch(url + query)
            data.set(await response.json())
            data_loading.set(false)
        } catch(e) {
            console.log(e)
            data_loading.set(false)
        }

    }

    getdata()
    return data
}