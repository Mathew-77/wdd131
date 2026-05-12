


const worldfull = document.querySelector("#world-full");

// use the date object
const today = new Date();


worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
	"en-UK",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
