// Übersetzungen von HomeMatic IDs zu sprechenden Texten für alle
// Controls, die nicht direkt im webmatic.js abgehandelt werden.

var textMap = {
    HUMIDITY: "Luftfeuchtigkeit",
    TEMPERATURE: "Temperatur",
    ACTUAL_TEMPERATURE: "Temperatur",
    WIND_SPEED: "Windgeschwindigkeit",
    DEW_POINT: "Taupunkt",
    ABS_HUMIDITY: "Absolute Luftfeuchtigkeit",
    VALVE_STATE: "Ventil&ouml;ffnung",
    BRIGHTNESS: "Helligkeit",
    TEMP_MIN_24H: "Min. Temperatur (24 Std)",
    TEMP_MAX_24H: "Max. Temperatur (24 Std)",
    HUM_MIN_24H: "Min. Luftfeuchtigkeit (24 Std)",
    HUM_MAX_24H: "Max. Luftfeuchtigkeit (24 Std)",
    MISS_24H: "Fehlende Datenpakete (24 Std)",
    PROG_TIMER: "-",
    COUNTER: "-",
    SUM: "-",
    MEAN5MINUTES: "Durchschnittsverbrauch (5 Min)",
    MAX5MINUTES: "Maximalverbrauch (5 Min)",
    SUM_1H: "Verbrauch letzte Stunde",
    MAX_1H: "Maximalverbrauch letzte Stunde",
    SUM_24H: "Verbrauch (24 Std)",
    MAX_24H: "Maximalverbrauch (24 Std)",
    METER: "Z&auml;hlerstand",
    FILLING_LEVEL: "F&uuml;llstand",
    BOOST_MODE:"Boost",
    LOWERING_MODE:"Absenken",
    MANU_MODE:"Manuell",
    COMFORT_MODE:"Komfort",
    AUTO_MODE:"Automatisch",
    ALL_LEDS: "-",
    CONTROL_MODE: "-",
    BOOST_STATE: "-",
    ACTUAL_HUMIDITY: "Aktuelle Luftfeuchtigkeit",
    LOWBAT: "Batteriewechsel",
    LOWBAT_REPORTING: "Batteriewechsel",
    COMMUNICATION_REPORTING: "-",
    WINDOW_OPEN_REPORTING: "-",
    PARTY_MODE_SUBMIT: "-",
    PARTY_TEMPERATURE: "-",
    PARTY_START_TIME: "-",
    PARTY_START_DAY: "-",
    PARTY_START_MONTH: "-",
    PARTY_START_YEAR: "-",
    PARTY_STOP_TIME: "-",
    PARTY_STOP_DAY: "-",
    PARTY_STOP_MONTH: "-",
    PARTY_STOP_YEAR: "-"
};

var imageMap = {
    HUMIDITY: "humidity.png",
    ACTUAL_HUMIDITY: "humidity.png",
    TEMPERATURE: "temperature.png",
    ACTUAL_TEMPERATURE: "temperature.png"
};

// Funktion zum mappen der IDs auf Texte.
function MapText(text) {
    var newText = "";
    newText = textMap[text];

    // Wenn nichts gefunden, dann Originaltext zurück:
    if (!newText) {
        return text;
    } else {
        return newText;
    }
}

// Funktion zum mappen von IDs auf Grafiken:
function MapImage(text) {
    var gfx = "";
    gfx = imageMap[text];

    // Wenn keines gefunden, dann unknown.png zurück:
    if (!gfx) {
        return "unknown.png";
    } else {
        return gfx;
    }
}