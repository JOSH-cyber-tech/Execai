"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = require("@clerk/express");
const router = (0, express_1.Router)();
router.get('/status', (0, express_2.requireAuth)(), (_req, res) => {
    res.json({
        connected: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
        message: process.env.GOOGLE_CLIENT_ID ? 'Google Calendar credentials are configured.' : 'Google Calendar credentials are not configured yet.',
    });
});
exports.default = router;
