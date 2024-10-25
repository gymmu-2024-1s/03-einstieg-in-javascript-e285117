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
