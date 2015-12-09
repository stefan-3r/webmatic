//DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    //Geräte
    AKKU__LEVEL: "charging status",
    AKKU__STATUS__0: "trickle charging",
    AKKU__STATUS__1: "battery loading",
    AKKU__STATUS__2: "battery supplied",
    AKKU__STATUS__3: "battery status unknown",
    ALARMACTUATOR__STATE__true: "alarm",
    ALARMACTUATOR__STATE__false: "OK",
    ALARMACTUATOR__ERROR_POWER__1: "mains voltage incorrect",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "sabotage message",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "defective battery",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Switch-on time",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__true: "battery low",
    ALARMACTUATOR__LOWBAT__false: "-",
    BLIND__STOP: "stop",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "duration of the blind",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "filling level",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "frequency of the sensor",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__true: "on",
    CLIMATECONTROL_REGULATOR__STATE__false: "off",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "comfort",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "off",
    CLIMATECONTROL_REGULATOR__VACATION__0: "off",
    CLIMATECONTROL_REGULATOR__VACATION__1: "planned",
    CLIMATECONTROL_REGULATOR__VACATION__2: "active",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__true: "inverted control",
    CLIMATECONTROL_REGULATOR__SET_INVERT__false: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "switch state",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "manipulated value received from the control panel",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "converted setpoint differential",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "valve opening set",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__true: "summer mode on",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__false: "summer mode off",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "valve closed",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "valve open",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "automatically",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "manually",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Party",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "comfort temperature",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "setback",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "window open temperature",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Party / Vacation-ending",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "temperature",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "current humidity",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "valve actuator sluggish",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "adjusting range too large",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "adjusting range too small",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "connection Error",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "battery low",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "valve position error",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "valve opening",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "boost mode",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "lowering",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "manual",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "comfort",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "automatic",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "boost duration",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "battery Status",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Holiday Mode Start",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "set temperature",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "start time",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "end time",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__false: "closed",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__true: "open",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "valve opening",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "valve drive blocked",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "valve drive loosely",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "setting range too small",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "battery low",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "valve actuator position offset",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "temperature",
    CLIMATECONTROL_VENT_DRIVE__ALARM__true: "valve drive blocked",
    CLIMATECONTROL_VENT_DRIVE__ALARM__false: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_OUTPUT__STATE__true: "on",
    DIGITAL_OUTPUT__STATE__false: "off",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "change state",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "restore last dimming",
    DIMMER__RAMP_TIME: "dimming",
    DIMMER__ON_TIME: "duty",
    DIMMER__RAMP_STOP: "dimming stop",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "current output",
    DIMMER__ENERGY_COUNTER: "current energy consumption",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "charging error",
    DIMMER__ERROR_REDUCED__false: "-",
    DIMMER__ERROR_REDUCED__true: "reduced power",
    DIMMER__ERROR_OVERHEAT__false: "-",
    DIMMER__ERROR_OVERHEAT__true: "overheating",
    DIMMER__ERROR_OVERLOAD__false: "-",
    DIMMER__ERROR_OVERLOAD__true: "overloading",
    DIMMER__LEVEL_REAL: "real value",
    DISPLAY__TEXT: "display",
    DISPLAY__BULB: "bulb",
    DISPLAY__SWITCH: "switch",
    DISPLAY__WINDOW: "window",
    DISPLAY__DOOR: "door",
    DISPLAY__BLIND: "blind",
    DISPLAY__SCENE: "scene",
    DISPLAY__PHONE: "phone",
    DISPLAY__BELL: "bell",
    DISPLAY__CLOCK: "clock",
    DISPLAY__ARROW_UP: "arrow up",
    DISPLAY__ARROW_DOWN: "arrow down",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "°C",
    DISPLAY__UNIT__4: "°F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "beep 1",
    DISPLAY__BEEP__2: "beep 2",
    DISPLAY__BEEP__3: "beep 3",
    DISPLAY__BACKLIGHT__0: "backlight off",
    DISPLAY__BACKLIGHT__1: "backlight on",
    DISPLAY__BACKLIGHT__2: "backlight blinking slowly",
    DISPLAY__BACKLIGHT__3: "backlight blinking quickly",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "short press",
    INPUT_OUTPUT__PRESS_LONG: "long press",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "state off",
    KEY__LED_STATUS__1: "state red",
    KEY__LED_STATUS__2: "state green",
    KEY__LED_STATUS__3: "state orange",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "short press",
    KEY__PRESS_LONG: "long press",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "snapshot",
    KEY__RESET: "reboot",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__true: "open",
    KEYMATIC__STATE__false: "close",
    KEYMATIC__OPEN: "open",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__true: "state uncertain",
    KEYMATIC__STATE_UNCERTAIN__false: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "coupling error",
    KEYMATIC__ERROR__2: "motor stopped",
    MOTION_DETECTOR__BRIGHTNESS: "brightness",
    MOTION_DETECTOR__SET_BRIGHTNESS: "brightness setting",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "next transmission",
    MOTION_DETECTOR__MOTION__true: "motion detected",
    MOTION_DETECTOR__MOTION__false: "no motion detected",
    MOTION_DETECTOR__SET_MOTION: "set motion",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "sabotage triggered",
    POWER__LOWBAT: "battery low",
    POWER__BAT_VOLTAGE: "battery voltage",
    POWERMETER__BOOT__true: "** POWERMETER__BOOT__true",
    POWERMETER__BOOT__false: "** POWERMETER__BOOT__false",
    POWERMETER__ENERGY_COUNTER: "current energy consumption",
    POWERMETER__POWER: "current output",
    POWERMETER__CURRENT: "amperage",
    POWERMETER__VOLTAGE: "voltage at the switch output",
    POWERMETER__FREQUENCY: "frequency",
    POWERMETER__SUM_1H: "energy consumption for the last hour",
    POWERMETER__SUM_24H: "energy consumption of the last 24 hours",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "gas energy counter",
    POWERMETER_IGL__GAS_POWER: "current gas output",
    POWERMETER_IGL__ENERGY_COUNTER: "energy counter",
    POWERMETER_IGL__POWER: "current output",
    PULSE_SENSOR__SEQUENCE_OK: "sequence accept",
    RAINDETECTOR__STATE__0: "dry",
    RAINDETECTOR__STATE__1: "rain",
    RAINDETECTOR_HEAT__STATE__true: "heating on",
    RAINDETECTOR_HEAT__STATE__false: "heating off",
    RAINDETECTOR_HEAT__ON_TIME: "duty cycle (heating)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__true: "on",
    RELAIS__STATE__false: "off",
    RELAIS__VALUE: "command value",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "duty",
    RELAIS__RAMP_TIME: "dimming",
    RGBW_AUTOMATIC__PROGRAM__0: "off",
    RGBW_AUTOMATIC__PROGRAM__1: "slow",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "fast",
    RGBW_AUTOMATIC__PROGRAM__4: "bonfire",
    RGBW_AUTOMATIC__PROGRAM__5: "waterfall",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "duty",
    RGBW_AUTOMATIC__RAMP_TIME: "dimming",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "current brightness",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "color",
    RGBW_COLOR__ON_TIME: "duty",
    RGBW_COLOR__RAMP_TIME: "dimming",
    RGBW_COLOR__ACT_BRIGHTNESS: "current brigthness",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "HSV color value",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "locked",
    ROTARY_HANDLE_SENSOR__STATE__1: "tipped",
    ROTARY_HANDLE_SENSOR__STATE__2: "open",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "sabotage triggered",
    ROTARY_HANDLE_SENSOR__LOWBAT__true: "battery low",
    ROTARY_HANDLE_SENSOR__LOWBAT__false: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "total consumption",
    SENSOR__SUM_DATE: "timestamp initializing the total consumption counter",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "total consumption reset",
    SENSOR__CONTROL__0: "unknown",
    SENSOR__CONTROL__1: "AC meter",
    SENSOR__CONTROL__2: "effective power meter",
    SENSOR__CONTROL__3: "gas meter",
    SENSOR__SENSOR__true: "** SENSOR__SENSOR__true",
    SENSOR__SENSOR__false: "** SENSOR__SENSOR__false",
    SENSOR__STATE__true: "on",
    SENSOR__STATE__false: "off",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "average consumption (5 min)",
    SENSOR__MAX5MINUTES: "maximum consumption (5 min)",
    SENSOR__SUM_1H: "consumption last hour",
    SENSOR__MAX_1H: "maximum consumption last hour",
    SENSOR__SUM_24H: "consumption (24 h)",
    SENSOR__MAX_24H: "maximum consumption (24 h)",
    SENSOR__METER: "meter",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "average consumption in the last measurement interval",
    SENSOR__LAST_TICKS: "last measurement interval in seconds time 10 (GZ)",
    SENSOR__UNITSPTURN: "conversion factor",
    SENSOR__DISTANCE: "proximity sensor",
    SENSOR__F_PERCENT: "level percent",
    SENSOR__F_LEVEL: "level",
    SENSOR__F_VOLUME: "capacity",
    SENSOR__RELAIS1__true: "relay 1 on",
    SENSOR__RELAIS1__false: "relay 1 off",
    SENSOR__RELAIS2__true: "relay 2 on",
    SENSOR__RELAIS2__false: "relay 2 off",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "sensor type",
    SENSOR__ERROR: "error message",
    SENSOR__ON_TIME: "duty",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> concentration normal",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> concentration increased",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> concentration greatly increased",
    SHUTTER_CONTACT__STATE__true: "open",
    SHUTTER_CONTACT__STATE__false: "closed",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "sabotage triggered",
    SHUTTER_CONTACT__LOWBAT__true: "battery low",
    SHUTTER_CONTACT__LOWBAT__false: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__true: "on",
    SIGNAL_CHIME__STATE__false: "off",
    SIGNAL_CHIME__ON_TIME: "duty",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__true: "on",
    SIGNAL_LED__STATE__false: "off",
    SIGNAL_LED__ON_TIME: "duty",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__true: "smoke registered",
    SMOKE_DETECTOR__STATE__false: "OK",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "alarm test failed",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "degraded smoke chamber",
    SMOKE_DETECTOR__LOWBAT__true: "battery low",
    SMOKE_DETECTOR__LOWBAT__false: "-",
    SMOKE_DETECTOR_TEAM__STATE__true: "smoke registered",
    SMOKE_DETECTOR_TEAM__STATE__false: "OK",
    STATUS_INDICATOR__STATE__true: "on",
    STATUS_INDICATOR__STATE__false: "off",
    STATUS_INDICATOR__ON_TIME: "duty",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "cancel timer",
    SYSTEM__TIMER_SET: "set timer",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__true: "on",
    SYSTEM__STATE__false: "off",
    SYSTEM__TIMER_GET: "remaining time",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "short press",
    SYSTEM__CMD_RUNL: "long press",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "keystroke on WebUI",
    SYSTEM__MAILTO: "email recipient",
    SYSTEM__MAILCC: "email cc",
    SYSTEM__SUBJECT: "email subject",
    SYSTEM__TYPE__0: "text",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "alarm",
    SYSTEM__TEXT: "text",
    SYSTEM__TEMPLATEID: "template ID",
    SYSTEM__OPTION_1: "data for predefined template 1",
    SYSTEM__OPTION_2: "data for predefined template 2",
    SYSTEM__OPTION_3: "data for predefined template 3",
    SYSTEM__OPTION_4: "data for predefined template 4",
    SYSTEM__OPTION_5: "data for predefined template 5",
    SYSTEM__RETURN: "return value by function call",
    SYSTEM__PHONE: "SMS telephone number",
    SYSTEM__PRIORITY__0: "priority low",
    SYSTEM__PRIORITY__1: "priority normal",
    SYSTEM__PRIORITY__2: "priority important",
    SYSTEM__PRIORITY__3: "priority high",
    SYSTEM__PRIORITY__4: "priority critical",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "registered address",
    SWITCH__IP: "address by DNS resolution",
    SWITCH__UNREACH_CTR: "failed attempts",
    SWITCH__STATE__true: "on",
    SWITCH__STATE__false: "off",
    SWITCH__ON_TIME: "duty",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "change state",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "power-ups (1 h)",
    SWITCH__TIME_ON_1H: "total duration (on) (1 h)",
    SWITCH__TIME_OFF_1H: "total duration (off) (1 h)",
    SWITCH__TIME_ON: "last duration (on)",
    SWITCH__TIME_OFF: "last duration (off)",
    SWITCH__TIME_ON_SUM: "total duration (on)",
    SWITCH__SWITCH_SUM: "number of power-ups",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__true: "on",
    SWITCH__TIME_STATE__false: "off",
    SWITCH__INFO_LED__0: "off",
    SWITCH__INFO_LED__1: "green",
    SWITCH__INFO_LED__2: "orange",
    SWITCH__INFO_LED__3: "red",
    SWITCH__SUM_RESET: "counter reset",
    SWITCH__SET_STATE: "set value",
    SWITCH__NIGHT_MODE: "night mode",
    SWITCH__NIGHT_MODE__true: "night mode",
    SWITCH__NIGHT_MODE__false: "-",
    SWITCH__POWER: "current output",
    SWITCH__ERROR_OVERLOAD__true: "overloading",
    SWITCH__ERROR_OVERLOAD__false: "-",
    SWITCH__ENERGY_COUNTER: "current energy consumption",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__true: "battery low",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__true: "communication error",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__true: "window open",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "temperature",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "current humidity",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "boost mode",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "lowering",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "manual",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "comfort",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "automatic",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "temperature",
    THERMALCONTROL_TRANSMIT__PARTY_START: "start time",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "end time",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__true: "tilt registered",
    TILT_SENSOR__STATE__false: "OK",
    TILT_SENSOR__LOWBAT__true: "battery low",
    TILT_SENSOR__LOWBAT__false: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "restore last dimming",
    VIRTUAL_DIMMER__RAMP_TIME: "dimming",
    VIRTUAL_DIMMER__ON_TIME: "duty",
    VIRTUAL_DIMMER__RAMP_STOP: "stop dimming",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "charging error",
    VIRTUAL_DIMMER__ERROR_REDUCED__false: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__true: "reduced power",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__true: "overheating",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__true: "overloading",
    VIRTUAL_DIMMER__LEVEL_REAL: "real value",
    VIRTUAL_KEY__PRESS_SHORT: "short press",
    VIRTUAL_KEY__PRESS_LONG: "long press",
    WATERDETECTIONSENSOR__STATE__0: "dry",
    WATERDETECTIONSENSOR__STATE__1: "humid",
    WATERDETECTIONSENSOR__STATE__2: "wet",
    WATERDETECTIONSENSOR__LOWBAT__true: "battery low",
    WATERDETECTIONSENSOR__LOWBAT__false: "-",
    WEATHER__HUMIDITY: "humidity",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "temperature",
    WEATHER__WIND_SPEED: "wind speed",
    WEATHER__WIND_DIRECTION: "wind direction",
    WEATHER__WIND_DIRECTION_RANGE: "wind direction range",
    WEATHER__SUNSHINEDURATION: "sunshine duration",
    WEATHER__RAINING__true: "rain",
    WEATHER__RAINING__false: "-",
    WEATHER__RAIN_COUNTER: "rainfall",
    WEATHER__RAIN_CTR: "rainfall",
    WEATHER__DEW_POINT: "dew point",
    WEATHER__ABS_HUMIDITY: "absolute humidity",
    WEATHER__TEMP_MIN_24H: "min temperature (24 h)",
    WEATHER__TEMP_MAX_24H: "max. temperature (24 h)",
    WEATHER__HUM_MIN_24H: "min humidity (24 h)",
    WEATHER__HUM_MAX_24H: "max. humidity (24 h)",
    WEATHER__WIND_MAX_24H: "max wind speed (24 h)",
    WEATHER__RAIN_CTR_24H: "rainfall (24 h)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "brightness",
    WEATHER__LOWBAT__true: "battery low",
    WEATHER__LOWBAT__false: "-",
    WEATHER__AIR_PRESSURE: "pressure",
    WEATHER__SET_HUMIDITY: "set humidity",
    WEATHER__MEDIAN: "central value",
    WEATHER__MEAN: "average",
    WEATHER__BRIGHTNESS_WEST: "brightness west",
    WEATHER__BRIGHTNESS_SOUTH: "brightness south",
    WEATHER__BRIGHTNESS_EAST: "brightness east",
    WEATHER_TRANSMIT__HUMIDITY: "humidity",
    WEATHER_TRANSMIT__TEMPERATURE: "temperature",
    WEBCAM__INFO: "info text",
    WEBCAM__IMAGE: "picture",
    WEBCAM__PTZ_CMD: "predefined function",
    WEBCAM__IR__0: "infrared LED off",
    WEBCAM__IR__1: "infrared LED auto",
    WEBCAM__IR__2: "infrared LED on",
    WINMATIC__SPEED: "speed",
    WINMATIC__STOP: "stop",
    WINMATIC__RELOCK_DELAY: "automatically lock after time",
    WINMATIC__STATE_UNCERTAIN__true: "state uncertain",
    WINMATIC__STATE_UNCERTAIN__false: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "error turn actuator",
    WINMATIC__ERROR__2: "error tilt drive",
    WRAPPER__MEDIAN: "central value",
    WRAPPER__MEAN: "average",
    WRAPPER__SET_STATE: "set state",
    WRAPPER__TIME_ON_1H: "total duration (on) (1 h)",
    WRAPPER__TIME_OFF_1H: "total duration (off) (1 h)",
    WRAPPER__SWITCH_1H: "power-ups (1 h)",
    WRAPPER__TIME_ON_24H: "total duration (on) (24 h)",
    WRAPPER__TIME_OFF_24H: "total duration (off) (24 h)",
    WRAPPER__SWITCH_24H: "power-ups (24 h)",
    WRAPPER__PERCENT_ON_24H: "percentage (on) (24 h)",
    WRAPPER__TIME_ON_168H: "total duration (on) (7 days)",
    WRAPPER__TIME_OFF_168H: "total duration (off) (7 days)",
    WRAPPER__SWITCH_168H: "power-ups (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "percentage  (on) (7 days)",
    WRAPPER__TIME_ON_HHH: "total duration (on)",
    WRAPPER__TIME_OFF_HHH: "total duration (off)",
    WRAPPER__SWITCH_HHH: "power-ups",
    WRAPPER__PERCENT_ON_HHH: "percentage",
    WRAPPER__STATE__true: "on",
    WRAPPER__STATE__false: "off",
    WRAPPER__TIME_ON: "last duration (on)",
    WRAPPER__TIME_OFF: "last duration (off)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    //Servicemeldungen
    ALARMDP__CONFIG_PENDING: "configuration data are transmitted",
    ALARMDP__DEVICE_IN_BOOTLOADER: "device restarts",
    ALARMDP__LOWBAT: "battery low",
    ALARMDP__STICKY_UNREACH: "communication was disrupted",
    ALARMDP__U_SOURCE_FAIL: "power supply failure",
    ALARMDP__UNREACH: "communication disturbed at the time",
    ALARMDP__UPDATE_PENDING: "update available",
    ALARMDP__USBH_POWERFAIL: "USB host disabled",
    //Andere Bezeichnungen
    OPEN: "open",
    OPEN_SHORT: "open",
    CLOSE: "close",
    CLOSE_SHORT: "close",
    LOCKED: "locked",
    LOCK: "lock",
    ON: "on",
    OFF: "off",
    MAX: "max",
    MED: "med",
    MIN: "min",
    RUN: "run",
    SAVE: "save",
    YES: "yes",
    NO: "no",
    VISIBILITY: "visibility",
    DELETE: "delete",
    UPLOAD: "upload",
    SYS_VAR: "system variables",
    PROGRAMS: "programs",
    FAVORITES: "favorites",
    ROOMS: "rooms",
    FUNCTIONS: "functions",
    EDIT: "edit",
    OPTIONS: "options",
    TEST_DEVICE: "test page HM",
    TEST_CUXD: "test page CUXD",
    UNKNOWN_ERROR: "unknown error",
    NO_SERVICE_MESSAGES: "No service messages available.",
    UNKNOWN_VAR_TYPE: "unknown variable type",
    SETTINGS: "settings",
    TIME_SEC_SINGULAR: "second",
    TIME_SEC_PLURAL: "seconds",
    TIME_MIN_SINGULAR: "minute",
    TIME_MIN_PLURAL: "minutes",
    TIME_H_SINGULAR: "hour",
    TIME_H_PLURAL: "hours",
    TIME_DAY_SINGULAR: "day",
    TIME_DAY_PLURAL: "days",
    TIME_MON_SINGULAR: "month",
    TIME_MON_PLURAL: "months",
    TIME_Y_SINGULAR: "year",
    TIME_Y_PLURAL: "years",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "ago",
    LOADING: "charging",
    SET: "set",
    DEFAULT: "default",
    BLACK: "black",
    PINK: "pink",
    GREEN: "green",
    YELLOW: "yellow",
    GREY: "grey",
    BLUE: "blue",
    RED: "red",
    BROWN: "brown",
    WHITE: "white",
    BRAZIL: "Brazil",
    GERMANY: "Germany",
    SHOW: "show",
    HIDE: "hide",
    SHOW_TEST: "Show test pages",
    SMALL: "small",
    BIG: "big",
    GRAPHICS_SIZE: "Size of the graphics",
    FILTER: "filtering data...",
    TRANSFER: "transfer...",
    DELAY: "value is still transferred to the device and displayed only after a delay here.",
    TRANSFER_OK: "OK!",
    IMAGE_UPLOAD: "It can only JPG, GIF or PNG are uploaded!",
    START: "start...",
    NEW_VERSION: "New WebMatic version",
    DOWNLOAD: "download link",
    MANUAL: "only manual execution",
    OPERATABLE: "operatable"
};