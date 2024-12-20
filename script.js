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
      //Grossbuchstaben
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
  //Wir sagen das die Variable soll "und" drin haben und wenn das Wort "und" in der Eingabe vorkommt, dann ist es true

  return hasConector
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  //Resultat kiste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //wenn es e ist, dann:
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

export function aufgabe10(args) {
  const input = args
  //Teste ob eine Eingabe ein korrekter RGB Hexcode ist.

  if (input[0] === "#" && input.length === 7) {
    //Wenn die erste Buchstabe "#" ist und die Eingabe 7 Buchstaben lang ist dann es ist true
  } else {
    //Wenn nicht, dann falsch
    return false
  }

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    //wir definieren die Variable so das es einfachher zu lesen ist

    if ((ascii >= 48 && ascii <= 57) || (ascii >= 65 && ascii <= 70)) {
      //Wenn die Variable zwischen 48 und 57 ist dann ist es eine Zahl
      //Wenn die Variable zwischen 65 und 70 ist dann ist es eine Grossbuchstabe von A bis F
    } else {
      return false
      //Alles was nicht da ist, ist falsch
    }
  }

  return true
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  // Erstelle eine Variable um dem ASCII-Code zu spreichern
  if (input.length === 1) {
    //Wenn die Eingabe ein zeichen land ist dann soll soll man die ASCII-Code ausgeben.
    return input.charCodeAt(0)
  } else {
    //wenn es keine Eingabe gib oder mehr als eine soll "null" standen
    return null
  }
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

  return firstEPosition
  //+1 weil 0 ist schon die erste
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let result = -1

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
      count++
      //wenn eine "e" findet, dann wird die count um 1 erhöht
    }
    if (count === 3) {
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
  //Wir definieren die Variable

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (dollarFound === false) {
      if (currentElement === "$") {
        dollarFound = true
      }
      result1.push(currentElement)
      //Wenn man der $ findet, dann ist es true und die Variable wird true und die Buchstabe vor der $ werden in die resultate kiste eingefügen
    } else {
      result2.push(currentElement)
      //Alles was übrig bleibt in die zweite resultate kiste
    }
  }

  return [result1.join(""), result2.join("")]
  //Als letztes soll man reinfügen in der Resultat mit einen komma zwischen beiden resultate kisten
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalResult = []
  //Wir definieren die resultate kiste
  const currentWord = []
  //Wir definieren die Variable die die Wörter speichert bevor man die wörter/buchstaben in die resultate kiste einfügt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      //Wenn es ein Leerzeichen ist, dann wird die currentWord in die resultate kiste eingefügen
      totalResult.push(currentWord.join(""))
      //.join weil wir möchten das ganze Wort ohne kommas reinfugen
      currentWord.length = 0
      //Dann soll das nocheinmal starten
    } else {
      currentWord.push(currentElement)
      //Alles was nicht ein Leerzeichen ist, wird in die currentWord eingefügen
    }
  }

  totalResult.push(currentWord.join(""))

  return totalResult
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  //Wir nehmen die ersten zweit Wörter (nummer oder auch Buchstaben) der input eingabe
  const result = []
  //Wir definieren die resultate kiste
  result.push("Sie heissen")
  //Wir sagen das "Sie heissen" in die resultate kiste reinfugen
  result.push(nameAndAge[0])
  //Wir sagen das "name" (das erstes Wort der input eingabe) in die resultate kiste reinfugen
  result.push("und sind")
  //Wir sagen das "und sind" in die resultate kiste reinfugen
  result.push(nameAndAge[1])
  //Wir sagen das "alter" (das zweites Wort der input eingabe) in die resultate kiste reinfugen
  result.push(" Jahre alt.")
  //Und schliesslich soll man "Jahre alt." in die resultate kiste reinfugen

  return result.join(" ")
  //Alle resultate zusammen
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

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      //Wir sagen das wenn in input ein punkt ist dann soll die folgende aufgabe vollständigen:
      if (input[i + 1] == " ") {
        return true
        //Wenn input[i] (also das Punkt) in die nächste stelle (also input[i+1]) ein Leerzeichen ist, dann ist es true
      }
    }
  }
  return false
  //Sonst ist es falsch
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
    //Das loop fängt von hinten und alle stellen werden von hinten in die resultat kiste eingefügt, so das der erste element dann der erste in die liste wird.
  }

  return result.join("")
} //Alles zusammen ohne kommas

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
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      //Wenn i 0 ist (also die erste position von eine eingabe), dann soll man das in die Resultate Kiste einfügen.
      result.push(input[input.length - 1])
      //In die resultate liste einfügen aber das letzte element von der Input (Eingabe)
    } else if (i === input.length - 1) {
      //wenn i die letzte position ist (also die letzte position von eine eingabe), dann soll man das in die Resultate Kiste einfügen.
      result.push(input[0])
      //In die resultate liste einfügen aber das erste element von der Input (Eingabe)
    } else {
      result.push(currentElement)
      //Was übrig bleibt soll man auch in die Resultat liste einfügen
    }
  }
  return result.join("")
  //alles zusammen
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe26(args) {
  const input = args
  const result = []
  const currentElement1 = input[0]
  const currentElement2 = input[1]
  const ascii1 = currentElement1.charCodeAt(0)
  const ascii2 = currentElement2.charCodeAt(0)
  //wir definieren die variablen so das es besser lesbar ist

  if (ascii1 >= ascii2) {
    //Wenn ascii1 (also das erste element) großer oder gleich ascii2 ist (das zweite element)
    result.push(currentElement2)
    result.push(currentElement1)
    //Dann es soll man das in diese reihenfolge in die resultat kiste einfügen
  } else {
    //sonst, soll man es in diese reihenfolge
    result.push(currentElement1)
    result.push(currentElement2)
  }

  for (let i = 2; i < input.length; i++) {
    //der loop anfangt mit 2 weil wir haben schon die ersten zwei elemente eingefügt
    const currentElement = input[i]
    result.push(currentElement)
    //alles was nach der zweiten stelle ist, wird in die resultate kiste eingefügen
  }

  return result.join("")
  //alles zusammen
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    //wir defienieren die Variable

    if (ascii < 48 || ascii > 57) {
      //Wenn die Variable ascii kleiner als 48 ist oder großer als 57 ist, dann ist keine Zahl, also return falsch
      return false
    }
  }

  return true
  //sonst es ist true
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabek(args) {
  //Schreiben Sie eine Funktion die einen Text bis zum ersten k abschriebt, dann nur * schriebt bis zum zweiten k, und dann den Text wieder abschreibt.
  const input = args
  const result = []
  let Thereisk = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (Thereisk === false) {
      //Wenn die Variable Thereisk falsch ist
      if (currentElement === "k") {
        //Dann soll man das nach "true" wechseln
        Thereisk = true
        //"k" wird zu die Resultate Liste
        result.push(currentElement)
      } else {
        //alles was übrig bleibt auch in die reusltate liste
        result.push(currentElement)
      }
    } else {
      //Weil der Variable "true" ist dann muss diese Aufgabe gemacht werden
      if (currentElement === "k") {
        //Wenn es "k" dann in die resultat liste nocheinamal
        result.push(currentElement)
        Thereisk = false
        //und die Variable Thereisk wird wieder false
      } else {
        //Was übrig bleibt soll man auch in die resultate liste einfügen aber wie ein "*"
        result.push("*")
      }
    }
  }

  return result.join("")
  //alle resultate zusammen
}

linkupExerciseHandler("[data-click=aufgabek]", aufgabek)

export function aufgabeSortierverfahren(args) {
  let my_array = [30, 64, 15, 10, 200, 89, 90, 9]
  let n = my_array.length

  for (let i = 0; i < n; i++) {
    let min_index = i
    for (let j = i + 1; j < n; j++) {
      if (my_array[j] < my_array[min_index]) {
        min_index = j
      }
    }
    let temp = my_array[i]
    my_array[i] = my_array[min_index]
    my_array[min_index] = temp
  }
  return my_array
}

linkupExerciseHandler(
  "[data-click=aufgabeSortierverfahren]",
  aufgabeSortierverfahren,
)

export function aufgabeNummern(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "a" || currentElement === "A") {
      result.push("1")
    } else if (currentElement === "e" || currentElement === "E") {
      result.push("2")
    } else if (currentElement === "i" || currentElement === "I") {
      result.push("3")
    } else if (currentElement === "o" || currentElement === "O") {
      result.push("4")
    } else if (currentElement === "u" || currentElement === "U") {
      result.push("5")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabeNummern]", aufgabeNummern)
