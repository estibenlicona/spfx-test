define("8e65ac45-8617-4f1d-86f1-7f98f772a17e_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-application-base"], (__WEBPACK_EXTERNAL_MODULE__676__, __WEBPACK_EXTERNAL_MODULE__841__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 388:
/*!********************************************************!*\
  !*** ./lib/extensions/wolkvoxChat/config/Constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUTTON_SIZES: () => (/* binding */ BUTTON_SIZES),
/* harmony export */   IFRAME_ATTRIBUTES: () => (/* binding */ IFRAME_ATTRIBUTES),
/* harmony export */   LOG_SOURCE: () => (/* binding */ LOG_SOURCE),
/* harmony export */   MESSAGE_TYPES: () => (/* binding */ MESSAGE_TYPES),
/* harmony export */   WOLKVOX_CONFIG: () => (/* binding */ WOLKVOX_CONFIG)
/* harmony export */ });
/**
 * Wolkvox Chat Widget - Constants
 * Configuración centralizada y constantes del proyecto
 */
var WOLKVOX_CONFIG = {
    ALLOWED_ORIGINS: [
        'https://widget01.wolkvox.com',
        'https://widget02.wolkvox.com'
    ],
    DEFAULT_BASE_URL: 'https://widget01.wolkvox.com/chat/',
    DEFAULT_OPERATION: 'VUVPQmNNRTI5YnlqQ0pNenZoeGhVMVBKV2lPYUVwM3hwZmQ3VFZ6cERJMD0=',
    DEFAULT_ID_CONFIG: 'RkRoSFFlZTRCeHVQUHdWd3lpTjhRQT09',
    INIT_DELAY_MS: 500,
    RETRY_DELAY_MS: 1000,
    THROTTLE_INTERVAL_MS: 1000,
    MAX_TITLE_LENGTH: 100,
    MAX_DIMENSION_PX: 2000,
    IFRAME_Z_INDEX: 99999
};
var BUTTON_SIZES = {
    l: { height: '73px', width: '75px' },
    m: { height: '55px', width: '60px' },
    s: { height: '45px', width: '50px' },
    custom: { height: '120px', width: '120px' }
};
var MESSAGE_TYPES = {
    RESIZE: 'resize::',
    START: 'start',
    RESTART: 'restart',
    REOPEN: 'reopen',
    CLOSE: 'close',
    CLOSED: 'closed',
    TITLE: 'title'
};
var LOG_SOURCE = 'WolkvoxChatApplicationCustomizer';
var IFRAME_ATTRIBUTES = {
    ID: 'wolkvoxIframe',
    ALLOW: 'microphone; autoplay',
    SANDBOX: 'allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox',
    REFERRER_POLICY: 'strict-origin-when-cross-origin'
};


/***/ }),

/***/ 628:
/*!**********************************************************!*\
  !*** ./lib/extensions/wolkvoxChat/utils/ErrorHandler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorCode: () => (/* binding */ ErrorCode),
/* harmony export */   ErrorHandler: () => (/* binding */ ErrorHandler),
/* harmony export */   WolkvoxError: () => (/* binding */ WolkvoxError)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ 676);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/Constants */ 388);
/**
 * Wolkvox Chat Widget - Error Handler
 * Manejo centralizado y tipado de errores
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Variable para controlar logging de telemetría en desarrollo
var DEBUG = typeof window !== 'undefined' &&
    window.location.hostname === 'localhost';
/**
 * Error personalizado para el widget Wolkvox
 */
var WolkvoxError = /** @class */ (function (_super) {
    __extends(WolkvoxError, _super);
    function WolkvoxError(message, code, originalError) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.originalError = originalError;
        _this.name = 'WolkvoxError';
        // Mantener el stack trace original si existe
        if (originalError && originalError.stack) {
            _this.stack = originalError.stack;
        }
        return _this;
    }
    return WolkvoxError;
}(Error));

/**
 * Códigos de error del sistema
 */
var ErrorCode;
(function (ErrorCode) {
    // Errores de inicialización
    ErrorCode["IFRAME_NOT_FOUND"] = "IFRAME_NOT_FOUND";
    ErrorCode["IFRAME_CONTENT_WINDOW_NOT_READY"] = "IFRAME_CONTENT_WINDOW_NOT_READY";
    ErrorCode["INIT_POSTMESSAGE_FAILED"] = "INIT_POSTMESSAGE_FAILED";
    ErrorCode["INIT_THROTTLED"] = "INIT_THROTTLED";
    // Errores de validación
    ErrorCode["INVALID_ORIGIN"] = "INVALID_ORIGIN";
    ErrorCode["INVALID_DIMENSIONS"] = "INVALID_DIMENSIONS";
    ErrorCode["INVALID_TITLE_LENGTH"] = "INVALID_TITLE_LENGTH";
    ErrorCode["INVALID_MESSAGE_DATA"] = "INVALID_MESSAGE_DATA";
    // Errores de mensaje
    ErrorCode["MESSAGE_PROCESSING_FAILED"] = "MESSAGE_PROCESSING_FAILED";
    ErrorCode["UNSUPPORTED_MESSAGE_TYPE"] = "UNSUPPORTED_MESSAGE_TYPE";
    // Errores generales
    ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    ErrorCode["DISPOSE_FAILED"] = "DISPOSE_FAILED";
})(ErrorCode || (ErrorCode = {}));
/**
 * Manejador centralizado de errores
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    /**
     * Maneja un error de forma centralizada
     * @param error - Error a manejar
     * @param context - Contexto donde ocurrió el error
     */
    ErrorHandler.handle = function (error, context) {
        if (error instanceof WolkvoxError) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.error(_config_Constants__WEBPACK_IMPORTED_MODULE_1__.LOG_SOURCE, new Error("[".concat(context, "] ").concat(error.message, " (Code: ").concat(error.code, ")")));
            // Log del error original si existe
            if (error.originalError) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.error(_config_Constants__WEBPACK_IMPORTED_MODULE_1__.LOG_SOURCE, error.originalError);
            }
            // Aquí se puede agregar telemetría o logging externo
            this._logToTelemetry(error, context);
        }
        else if (error instanceof Error) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.error(_config_Constants__WEBPACK_IMPORTED_MODULE_1__.LOG_SOURCE, new Error("[".concat(context, "] ").concat(error.message)));
        }
        else {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.error(_config_Constants__WEBPACK_IMPORTED_MODULE_1__.LOG_SOURCE, new Error("[".concat(context, "] Unknown error: ").concat(String(error))));
        }
    };
    /**
     * Maneja un warning de forma centralizada
     * @param message - Mensaje de warning
     * @param context - Contexto del warning
     * @param code - Código opcional del warning
     */
    ErrorHandler.warn = function (message, context, code) {
        var fullMessage = code
            ? "[".concat(context, "] ").concat(message, " (Code: ").concat(code, ")")
            : "[".concat(context, "] ").concat(message);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.warn(_config_Constants__WEBPACK_IMPORTED_MODULE_1__.LOG_SOURCE, fullMessage);
    };
    /**
     * Verifica si un error es de un tipo específico
     * @param error - Error a verificar
     * @param code - Código de error esperado
     */
    ErrorHandler.isErrorCode = function (error, code) {
        return error instanceof WolkvoxError && error.code === code;
    };
    /**
     * Crea un WolkvoxError desde un error desconocido
     * @param error - Error original
     * @param code - Código del error
     * @param defaultMessage - Mensaje por defecto si no se puede extraer
     */
    ErrorHandler.createError = function (error, code, defaultMessage) {
        if (error instanceof Error) {
            return new WolkvoxError(error.message || defaultMessage, code, error);
        }
        return new WolkvoxError(defaultMessage, code);
    };
    /**
     * Método privado para enviar a telemetría (placeholder)
     * @param error - Error a loggear
     * @param context - Contexto del error
     */
    ErrorHandler._logToTelemetry = function (error, context) {
        // TODO: Implementar integración con Application Insights o sistema de telemetría
        // Ejemplo:
        // appInsights.trackException({
        //   exception: error,
        //   properties: {
        //     context: context,
        //     code: error.code,
        //     component: 'WolkvoxChatWidget'
        //   }
        // });
        // Por ahora solo hacer log en consola en modo desarrollo
        if (DEBUG) {
            console.error('[Telemetry]', {
                error: error.message,
                code: error.code,
                context: context,
                timestamp: new Date().toISOString()
            });
        }
    };
    return ErrorHandler;
}());



/***/ }),

/***/ 841:
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__841__;

/***/ }),

/***/ 676:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__676__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************!*\
  !*** ./lib/extensions/wolkvoxChat/WolkvoxChatApplicationCustomizer.js ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ 676);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-application-base */ 841);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/Constants */ 388);
/* harmony import */ var _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ErrorHandler */ 628);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var WolkvoxChatApplicationCustomizer = /** @class */ (function (_super) {
    __extends(WolkvoxChatApplicationCustomizer, _super);
    function WolkvoxChatApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._originalTitle = '';
        _this._lastInitTime = 0;
        _this._render = function () {
            var _a;
            if (!_this._placeholder) {
                _this._placeholder = _this._tryCreatePlaceholder();
            }
            if (!((_a = _this._placeholder) === null || _a === void 0 ? void 0 : _a.domElement))
                return;
            if (_this._container)
                return;
            _this._createWolkvoxIframe();
        };
        _this._onDispose = function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Dispose');
            _this.onDispose(); // reutilizamos la limpieza
        };
        return _this;
    }
    WolkvoxChatApplicationCustomizer.prototype.onInit = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Initialized Wolkvox Chat Widget');
        this._originalTitle = document.title;
        this._setupMessageListener();
        this.context.placeholderProvider.changedEvent.add(this, this._render);
        this._render();
        return Promise.resolve();
    };
    WolkvoxChatApplicationCustomizer.prototype._setupMessageListener = function () {
        var _this = this;
        this._messageListener = function (e) {
            try {
                if (!_this._isOriginAllowed(e.origin)) {
                    _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn("Message from unauthorized origin rejected: ".concat(e.origin), 'MessageListener', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.INVALID_ORIGIN);
                    return;
                }
                if (!_this._isValidMessageData(e.data)) {
                    _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn('Invalid message data type', 'MessageListener', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.INVALID_MESSAGE_DATA);
                    return;
                }
                _this._handleMessage(e.data);
            }
            catch (error) {
                _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.handle(error, 'MessageListener');
            }
        };
        window.addEventListener('message', this._messageListener);
    };
    WolkvoxChatApplicationCustomizer.prototype._isOriginAllowed = function (origin) {
        return _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.ALLOWED_ORIGINS.indexOf(origin) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._isValidMessageData = function (data) {
        return typeof data === 'string';
    };
    WolkvoxChatApplicationCustomizer.prototype._handleMessage = function (data) {
        if (this._isResizeMessage(data)) {
            this._handleResizeMessage(data);
        }
        if (this._isStartMessage(data)) {
            this._initWolkvoxWidget();
        }
        if (this._isReopenMessage(data)) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Chat reopened, reinitializing...');
            this._initWolkvoxWidget();
        }
        if (this._isCloseMessage(data)) {
            this._handleChatClosed();
        }
        if (this._isTitleMessage(data)) {
            this._handleTitleNotification(data);
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._isResizeMessage = function (data) {
        return data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.RESIZE) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._isStartMessage = function (data) {
        return data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.START) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._isReopenMessage = function (data) {
        return data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.RESTART) !== -1 || data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.REOPEN) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._isCloseMessage = function (data) {
        return data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.CLOSE) !== -1 || data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.CLOSED) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._isTitleMessage = function (data) {
        return data.indexOf(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.TITLE) !== -1;
    };
    WolkvoxChatApplicationCustomizer.prototype._handleResizeMessage = function (data) {
        if (!this._iframe)
            return;
        var dimensions = data.replace(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.RESIZE, '').split('||');
        var height = parseInt(dimensions[0], 10);
        var width = parseInt(dimensions[1], 10);
        if (!this._areDimensionsValid(height, width)) {
            _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn("Invalid dimensions: ".concat(height, "x").concat(width), 'MessageListener:Resize', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.INVALID_DIMENSIONS);
            return;
        }
        this._applyIframeDimensions(dimensions);
    };
    WolkvoxChatApplicationCustomizer.prototype._areDimensionsValid = function (height, width) {
        return height <= _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.MAX_DIMENSION_PX &&
            width <= _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.MAX_DIMENSION_PX;
    };
    WolkvoxChatApplicationCustomizer.prototype._applyIframeDimensions = function (dimensions) {
        if (!this._iframe)
            return;
        var heightValue = dimensions[0];
        var widthValue = dimensions[1];
        var rightValue = dimensions[2];
        var bottomValue = dimensions[3];
        this._iframe.style.height = this._formatDimension(heightValue);
        this._iframe.style.width = this._formatDimension(widthValue);
        this._iframe.style.right = heightValue.indexOf('%') !== -1 ? '0%' : "".concat(rightValue, "px");
        this._iframe.style.bottom = "".concat(bottomValue, "px");
    };
    WolkvoxChatApplicationCustomizer.prototype._formatDimension = function (value) {
        return value.indexOf('%') !== -1 ? value : "".concat(value, "px");
    };
    WolkvoxChatApplicationCustomizer.prototype._handleChatClosed = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Chat closed by user');
        this._stopTitleNotifications();
        document.title = this._originalTitle;
    };
    WolkvoxChatApplicationCustomizer.prototype._stopTitleNotifications = function () {
        if (this._titleFlasher) {
            clearInterval(this._titleFlasher);
            this._titleFlasher = undefined;
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._handleTitleNotification = function (data) {
        var newTitle = data.replace(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_TYPES.TITLE, '');
        if (!this._isTitleLengthValid(newTitle)) {
            _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn("Title too long: ".concat(newTitle.length, " chars"), 'MessageListener:Title', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.INVALID_TITLE_LENGTH);
            return;
        }
        this._stopTitleNotifications();
        if (this._shouldFlashTitle(newTitle)) {
            this._startTitleFlashing(newTitle);
        }
        else {
            document.title = this._originalTitle;
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._isTitleLengthValid = function (title) {
        return title.length <= _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.MAX_TITLE_LENGTH;
    };
    WolkvoxChatApplicationCustomizer.prototype._shouldFlashTitle = function (title) {
        return title.charAt(0) === '(' && title.substring(title.length - 2) === ') ';
    };
    WolkvoxChatApplicationCustomizer.prototype._startTitleFlashing = function (newTitle) {
        var _this = this;
        this._titleFlasher = window.setInterval(function () {
            document.title = newTitle + ' New Messages';
            setTimeout(function () {
                document.title = _this._originalTitle;
            }, 2000);
        }, 4000);
    };
    WolkvoxChatApplicationCustomizer.prototype._getButtonDimensions = function () {
        var sizeBoton = this.properties.sizeBoton || 'l';
        return _config_Constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_SIZES[sizeBoton] || _config_Constants__WEBPACK_IMPORTED_MODULE_2__.BUTTON_SIZES.l;
    };
    WolkvoxChatApplicationCustomizer.prototype._tryCreatePlaceholder = function () {
        return this.context.placeholderProvider.tryCreateContent(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__.PlaceholderName.Bottom, { onDispose: this._onDispose }) || this.context.placeholderProvider.tryCreateContent(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__.PlaceholderName.Top, { onDispose: this._onDispose });
    };
    WolkvoxChatApplicationCustomizer.prototype._createWolkvoxIframe = function () {
        var _a;
        if (!((_a = this._placeholder) === null || _a === void 0 ? void 0 : _a.domElement))
            return;
        var urlFrame = this._buildIframeUrl();
        var dimensions = this._getButtonDimensions();
        this._iframe = this._createIframeElement(urlFrame, dimensions);
        this._setupIframeEventHandlers();
        document.body.appendChild(this._iframe);
    };
    WolkvoxChatApplicationCustomizer.prototype._buildIframeUrl = function () {
        var baseUrl = this.properties.baseUrlWolkvox || _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.DEFAULT_BASE_URL;
        var operation = this.properties.operation || _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.DEFAULT_OPERATION;
        return "".concat(baseUrl, "iframe.php?prodId=").concat(operation);
    };
    WolkvoxChatApplicationCustomizer.prototype._createIframeElement = function (urlFrame, dimensions) {
        var iframe = document.createElement('iframe');
        this._setIframeAttributes(iframe);
        this._setIframeStyles(iframe, dimensions);
        iframe.src = urlFrame;
        return iframe;
    };
    WolkvoxChatApplicationCustomizer.prototype._setIframeAttributes = function (iframe) {
        iframe.id = _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.ID;
        iframe.title = _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.ID;
        iframe.name = _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.ID;
        iframe.setAttribute('allow', _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.ALLOW);
        iframe.setAttribute('sandbox', _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.SANDBOX);
        iframe.setAttribute('referrerpolicy', _config_Constants__WEBPACK_IMPORTED_MODULE_2__.IFRAME_ATTRIBUTES.REFERRER_POLICY);
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('draggable', 'true');
        iframe.frameBorder = '0';
    };
    WolkvoxChatApplicationCustomizer.prototype._setIframeStyles = function (iframe, dimensions) {
        iframe.style.height = dimensions.height;
        iframe.style.width = dimensions.width;
        iframe.style.position = 'fixed';
        iframe.style.right = '1%';
        iframe.style.bottom = '1%';
        iframe.style.zIndex = _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.IFRAME_Z_INDEX.toString();
        iframe.style.overflow = 'hidden';
        iframe.style.border = 'none';
    };
    WolkvoxChatApplicationCustomizer.prototype._setupIframeEventHandlers = function () {
        var _this = this;
        if (!this._iframe)
            return;
        this._iframe.addEventListener('load', function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Wolkvox iframe loaded successfully');
            setTimeout(function () {
                _this._initWolkvoxWidget();
            }, _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.INIT_DELAY_MS);
        });
        this._setupIframeInteractionListener();
    };
    WolkvoxChatApplicationCustomizer.prototype._setupIframeInteractionListener = function () {
        var _this = this;
        this._iframeClickListener = function () {
            var timeSinceLastInit = Date.now() - _this._lastInitTime;
            if (timeSinceLastInit > 5000) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'User interacted with widget after long pause, checking if reinitialization needed');
            }
        };
        window.addEventListener('blur', function () {
            if (document.activeElement === _this._iframe && _this._iframeClickListener) {
                _this._iframeClickListener();
            }
        });
    };
    WolkvoxChatApplicationCustomizer.prototype._initWolkvoxWidget = function () {
        if (!this._canInitializeWidget()) {
            return;
        }
        if (this._shouldThrottleInitialization()) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Skipping initialization - too soon after last init');
            return;
        }
        this._lastInitTime = Date.now();
        var initData = this._buildInitializationData();
        var encodedData = btoa(JSON.stringify(initData));
        this._sendInitializationMessage(encodedData);
    };
    WolkvoxChatApplicationCustomizer.prototype._canInitializeWidget = function () {
        if (!this._iframe) {
            _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn('Cannot initialize widget: iframe not found', 'InitWidget', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.IFRAME_NOT_FOUND);
            return false;
        }
        if (!this._iframe.contentWindow) {
            _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.warn('Cannot initialize widget: iframe contentWindow not ready', 'InitWidget', _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.IFRAME_CONTENT_WINDOW_NOT_READY);
            return false;
        }
        return true;
    };
    WolkvoxChatApplicationCustomizer.prototype._shouldThrottleInitialization = function () {
        var now = Date.now();
        return now - this._lastInitTime < _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.THROTTLE_INTERVAL_MS;
    };
    WolkvoxChatApplicationCustomizer.prototype._buildInitializationData = function () {
        return {
            urlOrigen: btoa(window.location.host),
            sizeboton: this.properties.sizeBoton || 'l',
            sizechat: this.properties.sizeChat || 'l',
            fullscreen: this.properties.fullscreen || '0',
            idConfig: this.properties.idConfig || _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.DEFAULT_ID_CONFIG,
            txt1: this.properties.txt1 || '',
            txt2: this.properties.txt2 || '',
            txt3: this.properties.txt3 || '',
            txt4: this.properties.txt4 || '',
            txt5: this.properties.txt5 || '',
            txt6: this.properties.txt6 || '',
            context: this.properties.context || '',
            height_mobile: this.properties.heightMobile || ''
        };
    };
    WolkvoxChatApplicationCustomizer.prototype._sendInitializationMessage = function (encodedData) {
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Sending initialization data to Wolkvox widget');
            var targetOrigin = this._getTargetOrigin();
            this._iframe.contentWindow.postMessage(encodedData, targetOrigin);
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, "Message sent to verified origin: ".concat(targetOrigin));
        }
        catch (error) {
            this._handleInitializationError(error, encodedData);
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._getTargetOrigin = function () {
        var baseUrl = this.properties.baseUrlWolkvox || _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.DEFAULT_BASE_URL;
        return new URL(baseUrl).origin;
    };
    WolkvoxChatApplicationCustomizer.prototype._handleInitializationError = function (error, encodedData) {
        var wolkvoxError = _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.createError(error, _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorCode.INIT_POSTMESSAGE_FAILED, 'Failed to send initialization data to Wolkvox widget');
        _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.handle(wolkvoxError, 'InitWidget');
        this._retryInitialization(encodedData);
    };
    WolkvoxChatApplicationCustomizer.prototype._retryInitialization = function (encodedData) {
        var _this = this;
        setTimeout(function () {
            var _a;
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Retrying widget initialization...');
            try {
                if ((_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) {
                    var targetOrigin = _this._getTargetOrigin();
                    _this._iframe.contentWindow.postMessage(encodedData, targetOrigin);
                }
            }
            catch (retryError) {
                _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.handle(retryError, 'InitWidget:Retry');
            }
        }, _config_Constants__WEBPACK_IMPORTED_MODULE_2__.WOLKVOX_CONFIG.RETRY_DELAY_MS);
    };
    WolkvoxChatApplicationCustomizer.prototype.onDispose = function () {
        try {
            this._cleanupMessageListener();
            this._cleanupTitleNotifications();
            this._cleanupIframe();
            this._cleanupContainer();
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(_config_Constants__WEBPACK_IMPORTED_MODULE_2__.LOG_SOURCE, 'Widget disposed successfully');
        }
        catch (error) {
            _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler.handle(error, 'Dispose');
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._cleanupMessageListener = function () {
        if (this._messageListener) {
            window.removeEventListener('message', this._messageListener);
            this._messageListener = undefined;
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._cleanupTitleNotifications = function () {
        this._stopTitleNotifications();
        if (this._originalTitle) {
            document.title = this._originalTitle;
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._cleanupIframe = function () {
        var _a;
        if ((_a = this._iframe) === null || _a === void 0 ? void 0 : _a.parentElement) {
            this._iframe.parentElement.removeChild(this._iframe);
            this._iframe = undefined;
        }
    };
    WolkvoxChatApplicationCustomizer.prototype._cleanupContainer = function () {
        var _a;
        if ((_a = this._container) === null || _a === void 0 ? void 0 : _a.parentElement) {
            this._container.parentElement.removeChild(this._container);
        }
        this._container = undefined;
        this._placeholder = undefined;
    };
    return WolkvoxChatApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__.BaseApplicationCustomizer));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WolkvoxChatApplicationCustomizer);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=wolkvox-chat-application-customizer.js.map