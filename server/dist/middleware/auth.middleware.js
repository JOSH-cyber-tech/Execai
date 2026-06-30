"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuthMiddleware = exports.clerkAuth = void 0;
const express_1 = require("@clerk/express");
// Middleware to initialize clerk
exports.clerkAuth = (0, express_1.clerkMiddleware)();
// Middleware to enforce authentication
const requireAuthMiddleware = (req, res, next) => {
    // We use requireAuth from @clerk/express to protect routes
    (0, express_1.requireAuth)()(req, res, next);
};
exports.requireAuthMiddleware = requireAuthMiddleware;
