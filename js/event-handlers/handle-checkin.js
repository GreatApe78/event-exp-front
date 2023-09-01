import { checkIn } from "../api-calls/checkin.js";
import { checkInBtn } from "../dom-elements.js";
import { loadImage } from "../index.js";

export async function handleCheckIn() {
	checkInBtn.style.display = "none";
	document.getElementById("loading-pc").style.display = "block";
	try {
		const response = await checkIn();
		if (response.success) {
			await loadImage();
		}
		checkInBtn.style.display = "none";
		document.getElementById("loading-pc").style.display = "none";
	} catch (error) {
        checkInBtn.style.display = "none";
		document.getElementById("loading-pc").style.display = "none";
        alert("You Already Checked In")
        console.error(error)
    }
}
