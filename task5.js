function calculateTime() {
    const minutes = +prompt("Daqiqa miqdorini kiriting:")

    if (isNaN(minutes) || minutes < 0)
        alert("Noto'g'ri ma'lumot, musbat son kiriting.")
    else {
        const hours = Math.floor(minutes / 60)
        alert(`${hours} soat ${minutes % 60} daqiqa`)
    }
}

calculateTime()