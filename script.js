import { linkupExerciseHandler } from "./utils"

export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
      //alle Wörter in die resultate kiste reinfügen
    }
  }

  return result.join("")
  //alle resultate zusammen
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  //Das ist die Resultatliste

  // Lauft Zeich für Zeichen oder den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Hänge das aktuelle Zeichen doppelt an

    const upperCaseLettert = currentElement.toUpperCase()
    //Alle Wörter sollen zu UpperCaseLetter wandeln

    result.push(upperCaseLettert)
    //Alle die Wörter in die resultate kiste reinfugen
  }

  return result.join("")
  //Alle UpperCaseLetter zusammen, ohne kommas.
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  let count = 0
  //es beginnt immer mit 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //loop

    if (currentElement === "e") {
      count = count + 1
      //Es zählt +1 wenn eine "e" vorkommt
    } else if (currentElement === "E") {
      count = count + 1
      //Das gleiche aber mir "E"
    }
  }

  return count
  //das ergebniss in nummern
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  //Es beginnt immer mit 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grussbuchstaben
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //Kleine Buchstaben
      result.push(currentElement)
    } else if (ascii === 32) {
      //Leerzeichen
      result.push(currentElement)
    }
  }

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
    } else {
      result2.push(currentElement)
    }
  }

  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }

  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  let hasUpperCaseLetter = false
  // Wir starten immer mit das

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseVersion = currentElement.toUpperCase()
    //Wir wandeln alle Wörter in Grossbuchstaben

    if (currentElement === ".") {
    } // Wir müssen komprobieren, ob das Zeichen ein Punkt ist
    else if (currentElement === " ") {
    } // Wir prüfen, ob das Zeichen ein Leerzeichen ist
    else if (currentElement === UpperCaseVersion) {
      hasUpperCaseLetter = true
      //Wenn die UpperCaseVersion gleich dem Zeichen ist, dann ist es eine Grossbuchstabe
    }
  }

  return hasUpperCaseLetter
  // Variable die müssen wir defienieren (Resultat)
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  let hasSpecialCharacter = false
  //Wir definieren die Variable

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      currentElement.charCodeAt(0) >= 33 &&
      currentElement.charCodeAt(0) <= 47
      //Wir sagen alles zwischen 33 und 47 ist ein Spezialzeichen in die Liste von ASCII-Code
    ) {
      hasSpecialCharacter = true
    } else if (
      currentElement.charCodeAt(0) >= 58 &&
      currentElement.charCodeAt(0) <= 64
      //Hier auch
    ) {
      hasSpecialCharacter = true
    } else if (
      currentElement.charCodeAt(0) >= 91 &&
      currentElement.charCodeAt(0) <= 96
      //Auch
    ) {
      hasSpecialCharacter = true
    } else if (
      currentElement.charCodeAt(0) >= 123 &&
      currentElement.charCodeAt(0) <= 126
      //Auch
    ) {
      hasSpecialCharacter = true
    }
  }

  return hasSpecialCharacter
  //Wenn das zeichen nicht zwischen diese Nummern steht dann ist es kein Spezialzeichen
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args

  // Wir prüfen, ob das Wort "und" in der Eingabe vorkommt
  const hasConector = input.includes("und")

  return hasConector
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  //Resultat kiste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement.toLowerCase() === "e") {
      //alle Buchstaben sollten zu kleine Wörter umwandeln
      result.push("3") // Es addiert sich 3 zu "e" in die Resultat kiste
    } else {
      result.push(currentElement)
      //Was übrig bleibt addiert sich auch in die Resultat kiste
    }
  }

  return result.join("")
  //alle resultate zusammen
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  let hassixCharacter = false
  //Wir definieren die Variable

  for (let i = 0; i < input.length; i++) {
    if (input.length === 6) {
      //Input.length soll sagen wie viele Buchstaben im Wort sind.
      hassixCharacter = true
      //Wenn es 6 sind dann ist es true.
    }
    break
    //Loop beenden weil wir die antwort schon haben
  }

  return hassixCharacter
  //Resultat
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe11(args) {
  const input = args
  // Erstelle eine Variable um dem ASCII-Code zu spreichern
  let asciiCode = null
  //Variable definieren

  asciiCode = input.charCodeAt(0)
  //Soll sagen welche Nummer von der Zeichen

  return asciiCode
  //Der Nummer als Resultat geben
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  let firstEPosition = -1
  //Die "0" postition ist -1 weil 0 ist schon die erste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Man such die erstes "e" im Text
    if (currentElement === "e") {
      firstEPosition = i
      //Man musst die exakt Position speichern
      break
      //loop beenden
    }
  }

  return firstEPosition + 1
  //+1 weil 0 ist schon die erste
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    //Suche des letztes "e" im Text
    const currentElement = input[i]

    if (currentElement === "e") {
      //Man musst die exakt Position speichern
      result = i
    }
  }

  return result
  //gibt die Position von das lezte "e" zuruck
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let thirdEPosition = -1
  //die zählen postition anfängt mit -1
  let count = 0
  //es zählt wie viele "e" in eine zeile gibt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Man such die erstes "e" im Text
    if (currentElement === "e") {
      count = count + 1
      //wenn eine "e" findet, dann wird die count um 1 erhöht
    } else if (count === 3) {
      //wenn die count schon 3 ist, sollte sich diese Position speichern und der loop beenden.
      thirdEPosition = i
      break
    }
  }

  return thirdEPosition
  //sagt die letzte position der "e" nach der beendungs des loops
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Hier haben wir die Resultate kiste

  for (let i = 0; i < input.length; i++) {
    //Lesen Sie die Eingabe bis zum ersten Leerzeichen ein
    const currentElement = input[i] // Zeichen

    if (currentElement === " ") {
      //bis zum ersten leerzeichen und dann das loop beenden
      break
    } else {
      result.push(currentElement)
      //alle buchstaben vor der leerzeichen in die Kiste reinfügen
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []
  let dollarFound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (dollarFound === false) {
      if (currentElement === "$") {
        dollarFound = true
      }
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
  }

  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }

  totalList.push(currentList.join(""))

  return totalList
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  const result = []
  result.push("Sie heissen")
  result.push(nameAndAge[0])
  result.push("und sind")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  return result.join(" ")
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  //Resultat Kiste ohne Leerzeichen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement, currentElement)
    //Hier sagen wir das alle zeichen der Current Element zwei mal in die resultat Kiste reinfugen sollen.
  }

  return result.join("")
  //Alle Buchstaben nebeneinander reinfugen
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = [] //arreglo que tendrá cada letra de la oración modificada
  //for se ocupa para recorrer cada cáracter de la oración

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (input[i] === ",") {
      // Comprobamos si el siguiente carácter no es un espacio o si no existe
      if (input[i + 1] !== " ") {
        return false // Si no hay espacio después de la coma, devolvemos false
      }
    }
  }
  return true // Si pasamos todas las verificaciones, devolvemos true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //Kehren Sie die Eingabe um.

  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
  }

  return result.join("")
} //Funktion die die Eingabe umkehrt

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let Thereisk = false
  //Hier definieren wir die Variable

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (Thereisk === false) {
      if (currentElement === "k") {
        Thereisk = true
        //Wenn es ein k ist, dann ist es true
      }
      result.push("_")
      //dann alles wird zu einen "_" eingesetz
    } else {
      result.push(currentElement)
      //alles was übrig bleibt in die resultate kiste einfügen
    }
  }

  return result.join("")
  //alles zusammen
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  //Das erste Zeichen der Eingabe soll zusätzlich ganz vorne und ganz hinten an der Ausgabe angehängt werden.

  return input[0] + input + input[0]
  //Input[0] ist das erste Zeichen der Eingabe, dann addieren wir die ganze eingebe und dann wieder das erste Zeichen der Eingabe
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  //Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden.

  return input[input.length - 1] + input.slice(1, input.length - 1) + input[0]
  //Wenn wir [input.length - 1] nehmen, dann ist das letzte Zeichen der Eingabe.
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe27(args) {
  const input = args
  const result = []
  //Testen sie, ob eine Eingabe eine Zahl ist.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement >= "0" && currentElement <= "9") {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabek(args) {
  const input = args
  const result = []
  let Thereisk = false
  //Wir müssen diese Variable definieren, damit wir wissen, ob wir gerade ein "k" haben.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (Thereisk === false) {
      if (currentElement === "k") {
        Thereisk = true
        result.push(currentElement)
      } else {
        result.push(currentElement)
      }
    } else {
      if (currentElement === "k") {
        result.push(currentElement)
        Thereisk = false
      } else {
        result.push("*")
      }
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabek]", aufgabek)
