function calculateCheck() {
    const price = +prompt("Mahsulot narxini kiriting: ")
    const quantity = +prompt("Mahsulot miqdorini kiriting: ")

    if (isNaN(price) || isNaN(quantity))
        alert("Noto'g'ri ma'lumot, raqam kiriting.")
    else{
        let totalAmount = price * quantity

        if (totalAmount > 100000) {
            totalAmount *= 0.9
            alert(`Chegirma qo'llandi. Yangi summa: ${Math.round(totalAmount)}`)
        }
        else
            alert(`Umumiy summa: ${Math.round(totalAmount)}`)
    }
}

calculateCheck()