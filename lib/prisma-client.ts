import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient()

import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})