// imitation backend
import { rerenderEntireTree } from "../render";

let state = {
	restsData: [
		{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
		{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
		{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
		{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
		{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
	],

	hotRest: { id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" }

}

export let addRest = (restName) => {
	let newRest = {
		id: 6,
		name: restName,
		status: false,
		time: 5,
		foto: "url"
	}

	state.restsData.push(newRest);
	rerenderEntireTree(state);
}


export default state;