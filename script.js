const numbers = document.querySelectorAll('.s7d-digit')
const clocks = document.querySelectorAll('.clock')

// Generating Segment Elements (not necessary)
numbers.forEach((el) => {
    for (let i = 0; i < 7; i++) {
        const segment = document.createElement('div')
        el.append(segment)
    }
})

// Incrementing  Value On Click
clocks.forEach((clock) => {
    clock.onclick = () => {
        const clockNumbers = clock.querySelectorAll('.s7d-digit')
        for (let i = clockNumbers.length - 1; i >= 0; i--) {
            const next = (parseInt(clockNumbers[i].dataset.value) + 1) % 10
            clockNumbers[i].dataset.value = next.toString()
            if (next !== 0) break
        }
    }
})