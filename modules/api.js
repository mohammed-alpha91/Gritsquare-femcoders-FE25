import { db, msgRef } from "./firebaseconfig.js";
import { get, push, ref } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";


//funktion som hämtar datan från firebase
export async function getAllMsg() {
        const snapshot = await get(msgRef);
        if (snapshot.exists()) {
            return snapshot.val();
        }
}

//funktion som lägger till data i firebase
export async function addMsg(text) {
    const result = await push(msgRef, {
            text: text,
        });
        return result.key
    }

//funktion som displayar messages med en forEach metod som anropar render functionen
async function displayMsgs() {
    const messages = await getAllMsg();
    
    if (messages) {
        Object.values(messages).forEach((message) => {
            render(message.text);
        });
    }
}

//function som lägger till DOM-element
function render(text) {
    const body = document.querySelector('main');
    const h1 = document.createElement('h1');
    body.appendChild(h1);
    h1.innerText = text;
}

displayMsgs();