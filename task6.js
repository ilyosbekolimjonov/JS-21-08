function countChar() {
    const text = prompt("Matn kiriting:")
    const char = prompt("Qaysi harfni qidiryapsiz?")

    if (char.length !== 1) {
        alert("Iltimos, faqat bitta harf kiriting.")
        return
    }

    const lowerCaseText = text.toLowerCase()
    const lowerCaseChar = char.toLowerCase()
    let count = 0

    for (let i = 0; i < lowerCaseText.length; i++) {
        if (lowerCaseText[i] == lowerCaseChar) {
        count++
        }
    }

    alert(`Matnda "${char}" belgisi ${count} marta uchraydi.`)
}

countChar()