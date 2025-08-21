function moneyConversion() {
    const choice = prompt("Konvertatsiya turini tanlang (1 yoki 2 kiriting):\n1. So'mdan dollarga\n2. Dollardan so'mga")

    if (choice == "1") {
        const uzsMiqdori = prompt("So'm miqdorini kiriting:")
        const uzs = Number(uzsMiqdori)

        if (isNaN(uzs) || uzs < 0) {
            alert("Noto'g'ri ma'lumot, musbat son kiriting.")
        } 
        else{
            const usdMiqdori = uzs / 12500
            alert(`${usdMiqdori.toFixed(2)} USD`)
        }
    }
    else if (choice == "2") {
        const usdMiqdori = prompt("Dollar miqdorini kiriting:")
        const usd = Number(usdMiqdori)

        if (isNaN(usd) || usd < 0) {
            alert("Noto'g'ri ma'lumot, musbat son kiriting.")
        } 
        else {
            const uzsMiqdori = usd * 12500
            alert(`${Math.round(uzsMiqdori)} UZS`)
        }
    } 
    else
        alert("Noto'g'ri choice. Iltimos, 1 yoki 2 raqamini kiriting.")
}

moneyConversion()