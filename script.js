import { hasOwn } from "jsdom/lib/jsdom/living/generated/utils"
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
    }
  }

  return result.join("")
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

    // do nothing

    // auch E ignorieren

    result.push(upperCaseLettert)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
      count = count + 1
    } else if (currentElement === "E") {
      // auch E ignorieren
      count = count + 1
    } else {
      result.push(currentElement)
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Hänge das aktuelle Zeichen doppelt an
    if (currentElement === " ") {
      count = count + 1
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

    // Ich Möchte eine neue variable, wir haben die Variable ein namen gegeben.
    if (currentElement === ".") {
    } // Necesitamos comprobar
    else if (currentElement === " ") {
    } else if (currentElement === UpperCaseVersion) {
      hasUpperCaseLetter = true
    }
  }

  return hasUpperCaseLetter
  // Variable die müssen wir defienieren (Resultat)
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  let hasSpecialCharacter = false

  // Wir definieren einen Ausdruck, der nach besonderen Zeichen sucht
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wir prüfen, ob das Zeichen ein Sonderzeichen ist
    if (specialCharacterRegex.test(currentElement)) {
      hasSpecialCharacter = true
      break // Wir steigen aus der Schleife aus, sobald wir ein besonderes Zeichen finden.
    }
  }

  return hasSpecialCharacter
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args

  // Verifica si la palabra "und" está en la cadena
  const hasConector = input.includes("und")

  return hasConector
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement.toLowerCase() === "e") {
      result.push("3") // Agrega "3" en lugar de "e" o "E"
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Zähle ob die Eigabe genau 6 Zeichen erhält
    if (input.length === 6) {
      return true
    } else {
      return false
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe11(args) {
  const input = args
  // Erstelle eine Variable um dem ASCII-Code zu spreichern
  let asciiCode = null

  asciiCode = input.charCodeAt(0)

  // Gib den ASCII-Code zurück

  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []
  let firstEPosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Busca la posicion de la primera "e" en el texto
    if (currentElement === "e") {
      firstEPosition = i
      break
    }
  }

  return firstEPosition
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Suche des letztes "e" im Text
    const currentElement = input[i]

    if (currentElement === "e") {
      result.push(i)
    }
  }

  return result[result.length - 1]
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Lesen Sie die Eingabe bis zum ersten Leerzeichen ein
    const currentElement = input[i] // Zeichen

    if (currentElement === " ") {
      break
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und geben Sie den Rest als den zweiten Teil.
    const currentElement = input[i]

    if (currentElement === "$") {
      break
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const result = []
  //Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ',' getrennt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ",") {
      break
    } else {
      result.push(currentElement) // Zeichen
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Jedes Zeichen in der Eingabe soll verdoppelt werden.
    const currentElement = input[i]

    result.push(currentElement, currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)
