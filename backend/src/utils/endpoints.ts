enum session_endpoints {
    GET_SESSION = "/session/:id", // SESSION_ID REQUIRED
    POST_SESSION = "/create",
    UPDATE_SESSION = "/update/session/:id", // SESSION_ID REQUIRED
    DELETE_SESSION = "/delete/session/:id", // SESSION_ID REQUIRED
    GET_ALL_SESSIONS = "/get/all",
}

export { session_endpoints };