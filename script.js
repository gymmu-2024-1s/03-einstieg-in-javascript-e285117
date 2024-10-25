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

    if (currentElement === "") {
      // do nothing
      count = count + 1
    } else if (currentElement === "") {
      // auch E ignorieren
      count = count + 1
    } else {
      result.push(currentElement)
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)
