bluetooth.startTemperatureService()
bluetooth.startUartService()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    bluetooth.uartWriteNumber(input.temperature())
    basic.showNumber(input.temperature())
    basic.pause(2000)
    serial.writeLine("")
})
