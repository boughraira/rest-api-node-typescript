
export const MONGODB_URI = "mongodb://localhost:27017/api";

if (!MONGODB_URI) {
    console.log("No mongo connection string.");
    process.exit(1);
}

export const JWT_SECRET = "hazem123";

if (!JWT_SECRET) {
    console.log("No JWT secret string.");
    process.exit(1);
}
