import axios from "axios";

export const requester = axios.create({
	baseURL: "http://gateway.marvel.com/v1/public",
});