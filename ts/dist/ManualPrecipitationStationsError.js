"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualPrecipitationStationsError = void 0;
class ManualPrecipitationStationsError extends Error {
    isManualPrecipitationStationsError = true;
    sdk = 'ManualPrecipitationStations';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ManualPrecipitationStationsError = ManualPrecipitationStationsError;
//# sourceMappingURL=ManualPrecipitationStationsError.js.map