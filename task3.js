function changeToStar(){
    const firstText = prompt("Matn kiriting: ")
    let newText = ''

    for (const char of firstText){
        if(!isNaN(char)) newText += '*'
        else newText += char
    }

    alert(newText)
}

changeToStar()