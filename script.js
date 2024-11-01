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

// Este código queda igual
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)
