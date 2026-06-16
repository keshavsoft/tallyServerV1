import express from "express";
import cookieParser from 'cookie-parser';

export default function setupRoutes(app) {
    app.use(express.static('Public'));
    app.use(cookieParser());
};