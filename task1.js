const password = prompt("Parolni kiriting:")

function checkPassword(password) {
    const weakness = []

    if (password.length < 8) weakness.push("Parol uzunligi 8 belgidan kam")

    let hasUpperCase = false
    let hasLowerCase = false
    let hasDigit = false

    for (const char of password) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true
        else if (char >= 'a' && char <= 'z') hasLowerCase = true
        else if (char >= '0' && char <= '9') hasDigit = true
    }

    if (!hasUpperCase) {
        weakness.push("Parolda kamida bitta katta harf yo'q.")
    }
    if (!hasLowerCase) {
        weakness.push("Parolda kamida bitta kichik harf yo'q.")
    }
    if (!hasDigit) {
        weakness.push("Parolda kamida bitta raqam yo'q.")
    }

    if (weakness.length == 0)
        return "Kuchli parol"
    else
        return `Kuchsiz parol: ${weakness.join(", ")}`
}

const result = checkPassword(password)
alert(result)