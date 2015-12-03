// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    // Geräte
    AKKU__LEVEL: "el estado de carga",
    AKKU__STATUS__0: "carga de mantenimiento",
    AKKU__STATUS__1: "la carga de la batería",
    AKKU__STATUS__2: "batería suministra",
    AKKU__STATUS__3: "estado de la batería desconocido",
    ALARMACTUATOR__STATE__true: "alarma",
    ALARMACTUATOR__STATE__false: "OK",
    ALARMACTUATOR__ERROR_POWER__1: "tensión de red incorrecta",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "mensaje de sabotaje",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "batería defectuosa",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Tiempo de conexión",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__true: "batería baja",
    ALARMACTUATOR__LOWBAT__false: "-",
    BLIND__STOP: "stop",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "duración de los ciegos",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "nivel de llenado",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "frecuencia del sensor",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__true: "on",
    CLIMATECONTROL_REGULATOR__STATE__false: "off",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "confort",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "off",
    CLIMATECONTROL_REGULATOR__VACATION__0: "off",
    CLIMATECONTROL_REGULATOR__VACATION__1: "planificado",
    CLIMATECONTROL_REGULATOR__VACATION__2: "activo",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__true: "control invertida",
    CLIMATECONTROL_REGULATOR__SET_INVERT__false: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "cambiar el estado",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "Valor manipulado recibida desde el panel de control",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "diferencial consigna convertido",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "conjunto de abertura de la válvula",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__true: "Modo de verano sobre",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__false: "modo verano libre",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "válvula cerrada",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "válvula abierta",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "automáticamente",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "manualmente",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Parte",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "temperatura de confort",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "retroceso",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "Temperatura ventana abierta",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Fiesta / vacaciones de fin",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "temperatura",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "humedad actual",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "actuador de la válvula lenta",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "gama muy grande de ajuste",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "rango demasiado pequeño ajuste",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Error de conexión",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "batería baja",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "error de posición de la válvula",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "apertura de la válvula",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "modo de impulso",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "bajar",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "manual",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "confort",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "automático",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "aumentar la duración",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "Estado de la batería",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Modo vacaciones Inicio",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "Temperatura de ajuste",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "hora de inicio",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "terminar el tiempo",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__false: "cerrado",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__true: "abierta",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "apertura de la válvula",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "unidad de válvula bloqueada",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "válvula de impulsión libremente",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "rango de ajuste demasiado pequeño",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "batería baja",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "la posición del actuador de la válvula compensada",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "temperatura",
    CLIMATECONTROL_VENT_DRIVE__ALARM__true: "unidad de válvula bloqueada",
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
    DIMMER__TOGGLE: "cambiar de estado",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "Restaurar la última regulación",
    DIMMER__RAMP_TIME: "oscurecimiento",
    DIMMER__ON_TIME: "deber",
    DIMMER__RAMP_STOP: "oscurecimiento parada",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "salida de corriente",
    DIMMER__ENERGY_COUNTER: "El consumo actual de energía",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "Error de carga",
    DIMMER__ERROR_REDUCED__false: "-",
    DIMMER__ERROR_REDUCED__true: "potencia reducida",
    DIMMER__ERROR_OVERHEAT__false: "-",
    DIMMER__ERROR_OVERHEAT__true: "sobrecalentamiento",
    DIMMER__ERROR_OVERLOAD__false: "-",
    DIMMER__ERROR_OVERLOAD__true: "sobrecarga",
    DIMMER__LEVEL_REAL: "valor real",
    DISPLAY__TEXT: "pantalla",
    DISPLAY__BULB: "bombilla",
    DISPLAY__SWITCH: "interruptor",
    DISPLAY__WINDOW: "ventana",
    DISPLAY__DOOR: "puerta",
    DISPLAY__BLIND: "a ciegas",
    DISPLAY__SCENE: "escena",
    DISPLAY__PHONE: "teléfono",
    DISPLAY__BELL: "campana",
    DISPLAY__CLOCK: "reloj",
    DISPLAY__ARROW_UP: "flecha hacia arriba",
    DISPLAY__ARROW_DOWN: "flecha abajo",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "° C",
    DISPLAY__UNIT__4: "° F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "beep 1",
    DISPLAY__BEEP__2: "beep 2",
    DISPLAY__BEEP__3: "beep 3",
    DISPLAY__BACKLIGHT__0: "luz de fondo apagada",
    DISPLAY__BACKLIGHT__1: "luz de fondo",
    DISPLAY__BACKLIGHT__2: "luz de fondo parpadea lentamente",
    DISPLAY__BACKLIGHT__3: "luz de fondo parpadea rápidamente",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "pulsación corta",
    INPUT_OUTPUT__PRESS_LONG: "pulsación larga",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "estado de apagado",
    KEY__LED_STATUS__1: "rojo del Estado",
    KEY__LED_STATUS__2: "verde Estado",
    KEY__LED_STATUS__3: "orange Estado",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "pulsación corta",
    KEY__PRESS_LONG: "pulsación larga",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "instantánea",
    KEY__RESET: "reboot",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__true: "abierta",
    KEYMATIC__STATE__false: "cerrar",
    KEYMATIC__OPEN: "abrir",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__true: "estado incierto",
    KEYMATIC__STATE_UNCERTAIN__false: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "error de conexión",
    KEYMATIC__ERROR__2: "motor parado",
    MOTION_DETECTOR__BRIGHTNESS: "brillo",
    MOTION_DETECTOR__SET_BRIGHTNESS: "ajuste de brillo",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "la transmisión siguiente",
    MOTION_DETECTOR__MOTION__true: "detecta movimiento",
    MOTION_DETECTOR__MOTION__false: "no detecta movimiento",
    MOTION_DETECTOR__SET_MOTION: "conjunto de movimiento",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "sabotaje provocó",
    POWER__LOWBAT: "batería baja",
    POWER__BAT_VOLTAGE: "voltaje de la batería",
    POWERMETER__BOOT__true: "** POWERMETER__BOOT__true",
    POWERMETER__BOOT__false: "** POWERMETER__BOOT__false",
    POWERMETER__ENERGY_COUNTER: "El consumo actual de energía",
    POWERMETER__POWER: "salida de corriente",
    POWERMETER__CURRENT: "amperaje",
    POWERMETER__VOLTAGE: "tensión en la salida del interruptor",
    POWERMETER__FREQUENCY: "frecuencia",
    POWERMETER__SUM_1H: "el consumo de energía durante la última hora",
    POWERMETER__SUM_24H: "El consumo de energía de las últimas 24 horas",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "contador de energía de gas",
    POWERMETER_IGL__GAS_POWER: "La producción actual de gas",
    POWERMETER_IGL__ENERGY_COUNTER: "contador de energía",
    POWERMETER_IGL__POWER: "salida de corriente",
    PULSE_SENSOR__SEQUENCE_OK: "secuencia de aceptar",
    RAINDETECTOR__STATE__0: "seca",
    RAINDETECTOR__STATE__1: "lluvia",
    RAINDETECTOR_HEAT__STATE__true: "calentando en",
    RAINDETECTOR_HEAT__STATE__false: "calentar off",
    RAINDETECTOR_HEAT__ON_TIME: "ciclo de trabajo (calefacción)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__true: "on",
    RELAIS__STATE__false: "off",
    RELAIS__VALUE: "valor nominal",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "deber",
    RELAIS__RAMP_TIME: "oscurecimiento",
    RGBW_AUTOMATIC__PROGRAM__0: "off",
    RGBW_AUTOMATIC__PROGRAM__1: "lenta",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "rápida",
    RGBW_AUTOMATIC__PROGRAM__4: "hoguera",
    RGBW_AUTOMATIC__PROGRAM__5: "cascada",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "deber",
    RGBW_AUTOMATIC__RAMP_TIME: "oscurecimiento",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "brillo actual",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "color",
    RGBW_COLOR__ON_TIME: "deber",
    RGBW_COLOR__RAMP_TIME: "oscurecimiento",
    RGBW_COLOR__ACT_BRIGHTNESS: "brigthness actual",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "valor de color HSV",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "bloqueado",
    ROTARY_HANDLE_SENSOR__STATE__1: "punta",
    ROTARY_HANDLE_SENSOR__STATE__2: "abrir",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "sabotaje provocó",
    ROTARY_HANDLE_SENSOR__LOWBAT__true: "batería baja",
    ROTARY_HANDLE_SENSOR__LOWBAT__false: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "consumo total",
    SENSOR__SUM_DATE: "timestamp inicializar el contador de consumo total",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "reset total del consumo",
    SENSOR__CONTROL__0: "desconocido",
    SENSOR__CONTROL__1: "metro AC",
    SENSOR__CONTROL__2: "medidor de potencia efectiva",
    SENSOR__CONTROL__3: "medidor de gas",
    SENSOR__SENSOR__true: "** SENSOR__SENSOR__true",
    SENSOR__SENSOR__false: "** SENSOR__SENSOR__false",
    SENSOR__STATE__true: "on",
    SENSOR__STATE__false: "off",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "consumo medio (5 min)",
    SENSOR__MAX5MINUTES: "El consumo máximo (5 min)",
    SENSOR__SUM_1H: "El consumo de última hora",
    SENSOR__MAX_1H: "consumo máximo de última hora",
    SENSOR__SUM_24H: "El consumo (24 h)",
    SENSOR__MAX_24H: "El consumo máximo (24 h)",
    SENSOR__METER: "metro",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "El consumo medio en el último intervalo de medición",
    SENSOR__LAST_TICKS: "el último intervalo de medición en el segundo tiempo 10 (GZ)",
    SENSOR__UNITSPTURN: "factor de conversión",
    SENSOR__DISTANCE: "sensor de proximidad",
    SENSOR__F_PERCENT: "Porcentaje",
    SENSOR__F_LEVEL: "nivel",
    SENSOR__F_VOLUME: "capacidad",
    SENSOR__RELAIS1__true: "el relé 1 en",
    SENSOR__RELAIS1__false: "relé 1 off",
    SENSOR__RELAIS2__true: "relé 2 sobre",
    SENSOR__RELAIS2__false: "relé 2 off",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "tipo de sensor",
    SENSOR__ERROR: "mensaje de error",
    SENSOR__ON_TIME: "deber",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> concentración normal",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> concentración aumentó",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> concentración mucho mayor",
    SHUTTER_CONTACT__STATE__true: "abrir",
    SHUTTER_CONTACT__STATE__false: "cerrado",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "sabotaje provocó",
    SHUTTER_CONTACT__LOWBAT__true: "batería baja",
    SHUTTER_CONTACT__LOWBAT__false: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__true: "on",
    SIGNAL_CHIME__STATE__false: "off",
    SIGNAL_CHIME__ON_TIME: "deber",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__true: "on",
    SIGNAL_LED__STATE__false: "off",
    SIGNAL_LED__ON_TIME: "deber",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__true: "humo registrado",
    SMOKE_DETECTOR__STATE__false: "OK",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "prueba de alarma no se pudo",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "cámara de humo degradada",
    SMOKE_DETECTOR__LOWBAT__true: "batería baja",
    SMOKE_DETECTOR__LOWBAT__false: "-",
    SMOKE_DETECTOR_TEAM__STATE__true: "humo registrado",
    SMOKE_DETECTOR_TEAM__STATE__false: "OK",
    STATUS_INDICATOR__STATE__true: "on",
    STATUS_INDICATOR__STATE__false: "off",
    STATUS_INDICATOR__ON_TIME: "deber",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "Cancelar temporizador",
    SYSTEM__TIMER_SET: "set temporizador",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__true: "on",
    SYSTEM__STATE__false: "off",
    SYSTEM__TIMER_GET: "tiempo restante",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "pulsación corta",
    SYSTEM__CMD_RUNL: "pulsación larga",
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
    SYSTEM__SEND: "golpe de teclado en WebUI",
    SYSTEM__MAILTO: "destinatario de correo electrónico",
    SYSTEM__MAILCC: "email cc",
    SYSTEM__SUBJECT: "asunto del correo electrónico",
    SYSTEM__TYPE__0: "texto",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "alarma",
    SYSTEM__TEXT: "texto",
    SYSTEM__TEMPLATEID: "plantilla de ID",
    SYSTEM__OPTION_1: "los datos de plantilla predefinida 1",
    SYSTEM__OPTION_2: "los datos de plantilla predefinida 2",
    SYSTEM__OPTION_3: "los datos de plantilla predefinida 3",
    SYSTEM__OPTION_4: "los datos de plantilla predefinida 4",
    SYSTEM__OPTION_5: "los datos de plantilla predefinida 5",
    SYSTEM__RETURN: "valor de retorno de llamada a la función",
    SYSTEM__PHONE: "número de teléfono SMS",
    SYSTEM__PRIORITY__0: "baja prioridad",
    SYSTEM__PRIORITY__1: "prioridad normal",
    SYSTEM__PRIORITY__2: "prioridad importante",
    SYSTEM__PRIORITY__3: "prioridad alta",
    SYSTEM__PRIORITY__4: "prioridad crítica",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "domicilio social",
    SWITCH__IP: "Dirección por resolución de DNS",
    SWITCH__UNREACH_CTR: "intentos fracasó",
    SWITCH__STATE__true: "on",
    SWITCH__STATE__false: "off",
    SWITCH__ON_TIME: "deber",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "cambiar de estado",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "power-ups (1 h)",
    SWITCH__TIME_ON_1H: "duración total (en) (1 h)",
    SWITCH__TIME_OFF_1H: "duración total (apagado) (1 h)",
    SWITCH__TIME_ON: "último duración (en)",
    SWITCH__TIME_OFF: "último duración (off)",
    SWITCH__TIME_ON_SUM: "duración total (en)",
    SWITCH__SWITCH_SUM: "número de power-ups",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__true: "on",
    SWITCH__TIME_STATE__false: "off",
    SWITCH__INFO_LED__0: "off",
    SWITCH__INFO_LED__1: "verde",
    SWITCH__INFO_LED__2: "naranja",
    SWITCH__INFO_LED__3: "rojo",
    SWITCH__SUM_RESET: "Ajuste del contador",
    SWITCH__SET_STATE: "valor de ajuste",
    SWITCH__NIGHT_MODE: "modo nocturno",
    SWITCH__NIGHT_MODE__true: "modo nocturno",
    SWITCH__NIGHT_MODE__false: "-",
    SWITCH__POWER: "salida de corriente",
    SWITCH__ERROR_OVERLOAD__true: "sobrecarga",
    SWITCH__ERROR_OVERLOAD__false: "-",
    SWITCH__ENERGY_COUNTER: "El consumo actual de energía",
    SWITCH__RCVS: "SWITCH__RCVS **",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__true: "batería baja",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__true: "error de comunicación",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__true: "ventana abierta",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "temperatura",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "humedad actual",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "modo de impulso",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "bajar",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "manual",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "confort",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "automático",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "temperatura",
    THERMALCONTROL_TRANSMIT__PARTY_START: "hora de inicio",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "tiempo final",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__true: "tilt registrado",
    TILT_SENSOR__STATE__false: "OK",
    TILT_SENSOR__LOWBAT__true: "batería baja",
    TILT_SENSOR__LOWBAT__false: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "Restaurar la última regulación",
    VIRTUAL_DIMMER__RAMP_TIME: "oscurecimiento",
    VIRTUAL_DIMMER__ON_TIME: "deber",
    VIRTUAL_DIMMER__RAMP_STOP: "deja de regulación",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "Error de carga",
    VIRTUAL_DIMMER__ERROR_REDUCED__false: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__true: "potencia reducida",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__true: "sobrecalentamiento",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__true: "sobrecarga",
    VIRTUAL_DIMMER__LEVEL_REAL: "valor real",
    VIRTUAL_KEY__PRESS_SHORT: "pulsación corta",
    VIRTUAL_KEY__PRESS_LONG: "pulsación larga",
    WATERDETECTIONSENSOR__STATE__0: "seca",
    WATERDETECTIONSENSOR__STATE__1: "húmedo",
    WATERDETECTIONSENSOR__STATE__2: "húmeda",
    WATERDETECTIONSENSOR__LOWBAT__true: "batería baja",
    WATERDETECTIONSENSOR__LOWBAT__false: "-",
    WEATHER__HUMIDITY: "humedad",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "temperatura",
    WEATHER__WIND_SPEED: "la velocidad del viento",
    WEATHER__WIND_DIRECTION: "la dirección del viento",
    WEATHER__WIND_DIRECTION_RANGE: "viento gama dirección",
    WEATHER__SUNSHINEDURATION: "duración de la insolación",
    WEATHER__RAINING__true: "lluvia",
    WEATHER__RAINING__false: "-",
    WEATHER__RAIN_COUNTER: "precipitación",
    WEATHER__RAIN_CTR: "precipitación",
    WEATHER__DEW_POINT: "punto de rocío",
    WEATHER__ABS_HUMIDITY: "humedad absoluta",
    WEATHER__TEMP_MIN_24H: "Temperatura min (24 h)",
    WEATHER__TEMP_MAX_24H: "Temperatura máxima (24 h).",
    WEATHER__HUM_MIN_24H: "humedad min (24 h)",
    WEATHER__HUM_MAX_24H: "max humedad (24 h).",
    WEATHER__WIND_MAX_24H: "la velocidad del viento máximo (24 h)",
    WEATHER__RAIN_CTR_24H: "la lluvia (24 h)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "brillo",
    WEATHER__LOWBAT__true: "batería baja",
    WEATHER__LOWBAT__false: "-",
    WEATHER__AIR_PRESSURE: "presión",
    WEATHER__SET_HUMIDITY: "establecer la humedad",
    WEATHER__MEDIAN: "valor central",
    WEATHER__MEAN: "promedio",
    WEATHER__BRIGHTNESS_WEST: "al oeste de brillo",
    WEATHER__BRIGHTNESS_SOUTH: "al sur de brillo",
    WEATHER__BRIGHTNESS_EAST: "al este de brillo",
    WEATHER_TRANSMIT__HUMIDITY: "humedad",
    WEATHER_TRANSMIT__TEMPERATURE: "temperatura",
    WEBCAM__INFO: "Info-texto",
    WEBCAM__IMAGE: "foto",
    WEBCAM__PTZ_CMD: "función predefinida",
    WEBCAM__IR__0: "infrarrojos LED apagado",
    WEBCAM__IR__1: "auto infrarrojos LED",
    WEBCAM__IR__2: "infrarrojo LED en",
    WINMATIC__SPEED: "velocidad",
    WINMATIC__STOP: "stop",
    WINMATIC__RELOCK_DELAY: "que se bloquee automáticamente después de un tiempo",
    WINMATIC__STATE_UNCERTAIN__true: "estado incierto",
    WINMATIC__STATE_UNCERTAIN__false: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "error el actuador",
    WINMATIC__ERROR__2: "unidad de inclinación de error",
    WRAPPER__MEDIAN: "valor central",
    WRAPPER__MEAN: "promedio",
    WRAPPER__SET_STATE: "conjunto del Estado",
    WRAPPER__TIME_ON_1H: "duración total (en) (1 h)",
    WRAPPER__TIME_OFF_1H: "duración total (apagado) (1 h)",
    WRAPPER__SWITCH_1H: "power-ups (1 h)",
    WRAPPER__TIME_ON_24H: "duración total (en) (24 h)",
    WRAPPER__TIME_OFF_24H: "duración total (apagado) (24 h)",
    WRAPPER__SWITCH_24H: "power-ups (24 h)",
    WRAPPER__PERCENT_ON_24H: "porcentaje (en) (24 h)",
    WRAPPER__TIME_ON_168H: "duración total (en) (7 días)",
    WRAPPER__TIME_OFF_168H: "duración total (apagado) (7 días)",
    WRAPPER__SWITCH_168H: "power-ups (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "porcentaje (en) (7 días)",
    WRAPPER__TIME_ON_HHH: "duración total (en)",
    WRAPPER__TIME_OFF_HHH: "duración total (off)",
    WRAPPER__SWITCH_HHH: "power-ups",
    WRAPPER__PERCENT_ON_HHH: "porcentaje",
    WRAPPER__STATE__true: "on",
    WRAPPER__STATE__false: "off",
    WRAPPER__TIME_ON: "último duración (en)",
    WRAPPER__TIME_OFF: "último duración (off)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "los datos de configuración se transmiten",
    ALARMDP__DEVICE_IN_BOOTLOADER: "dispositivo se reinicia",
    ALARMDP__LOWBAT: "batería baja",
    ALARMDP__STICKY_UNREACH: "La comunicación fue interrumpida",
    ALARMDP__U_SOURCE_FAIL: "fallo de alimentación",
    ALARMDP__UNREACH: "comunicación perturbada en el momento",
    ALARMDP__UPDATE_PENDING: "actualización disponible",
    ALARMDP__USBH_POWERFAIL: "host USB desactivado",
    //Andere Bezeichnungen
    OPEN: "abierto",
    OPEN_SHORT: "abierta",
    CIERRE: "cerrar",
    CLOSE_SHORT: "cerrar",
    LOCKED: "bloqueado",
    LOCK: "bloqueo",
    ON: "on",
    OFF: "off",
    MAX: "max",
    MED: "med",
    MIN: "min",
    RUN: "corre",
    SAVE: "salvar",
    YES: "sí",
    NO: "no",
    VISIBILITY: "visibilidad",
    DELETE: "borrar",
    UPLOAD: "carga de imágenes",
    SYS_VAR: "variables del sistema",
    PROGRAMS: "programas",
    FAVORITES: "favoritos",
    ROOMS: "habitaciones",
    FUNCTIONS: "funciones",
    EDIT: "editar",
    OPTIONS: "opciones",
    TEST_DEVICE: "página de prueba HM",
    TEST_CUXD: "página de prueba CUXD",
    UNKNOWN_ERROR: "error desconocido",
    NO_SERVICE_MESSAGES: "No hay mensajes de servicio disponibles.",
    UNKNOWN_VAR_TYPE: "tipo variable desconocida",
    SETTINGS: "Ajustes",
    TIME_SEC_SINGULAR: "segundo",
    TIME_SEC_PLURAL: "segundos",
    TIME_MIN_SINGULAR: "minutos",
    TIME_MIN_PLURAL: "minutos",
    TIME_H_SINGULAR: "hora",
    TIME_H_PLURAL: "horas",
    TIME_DAY_SINGULAR: "día",
    TIME_DAY_PLURAL: "días",
    TIME_MON_SINGULAR: "meses",
    TIME_MON_PLURAL: "meses",
    TIME_Y_SINGULAR: "año",
    TIME_Y_PLURAL: "años",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "hace",
    LOADING: "carga",
    SET: "set",
    DEFAULT: "por defecto",
    BLACK: "negro",
    PINK: "rosa",
    GREEN: "verde",
    YELLOW: "amarillo",
    GREY: "gris",
    BLUE: "azul",
    RED: "rojo",
    BROWN: "Marrón",
    WHITE: "blanco",
    BRAZIL: "Brasil",
    GERMANY: "Alemania",
    SHOW: "Show",
    HIDE: "esconder",
    SHOW_TEST: "páginas Mostrar prueba",
    SMALL: "pequeño",
    BIG: "gran",
    GRAPHICS_SIZE: "El tamaño de los gráficos",
    FILTRO: "filtrar datos ...",
    TRANSFERENCIA: "transferencia ...",
    DELAY: "valor es todavía transfiere al dispositivo y se visualiza sólo después de un retraso de aquí.",
    TRANSFER_OK: "OK!",
    IMAGE_UPLOAD: "Puede solamente JPG, GIF o PNG se suben!",
    START: "empezar ..."
};