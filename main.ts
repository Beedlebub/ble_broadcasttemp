bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startTemperatureService()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.showNumber(input.temperature())
    basic.pause(2000)
})
