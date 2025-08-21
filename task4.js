function shortName(){
    const fullName = prompt("Ism va familiyangizni kiriting:")

    const parts = fullName.split(" ")

    if (parts.length == 2) {
        const firstNameInitial = parts[0].charAt(0).toUpperCase()
        const lastName = parts[1]
        alert(`${firstNameInitial}. ${lastName}`)
    }
    else
        alert("Noto'g'ri format: Ism va familiya kiritilishi kerak")
}

shortName()