bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startTemperatureService()
bluetooth.startUartService()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.showNumber(input.temperature())
    bluetooth.uartWriteNumber(input.temperature())
    bluetooth.uartWriteLine("")
    basic.pause(2000)
})
