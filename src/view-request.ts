import {NextFunction, Request, Response} from "express";

const requestLog = ((req: Request, res: Response, next: NextFunction) => {
    const requestData = {
        time: new Date().toISOString(),
        url: req.originalUrl,
        userAgent: req.headers['user-agent']
    }

    console.log("Richieste: ", requestData);
    next();
});

module.exports = requestLog;

