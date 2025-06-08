import { PrismaClient } from "./generated/prisma";

export const db=globalThis.prima || new PrismaClient()

if(process.env.NODE_ENV !=="production"){
    globalThis.prisma=db;
}