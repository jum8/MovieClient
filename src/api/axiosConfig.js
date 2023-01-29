import axios from "axios";

export default axios.create({
	baseURL:'https://movieapi-production-483b.up.railway.app',
	// headers:{"ngrok-skip-browser-warning": "true"}
});