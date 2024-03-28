"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loadFile;
    }
});
var _fileSystem = require("./utilities/fileSystem");
function loadFile(projectsDirectoryPath, json, callback) {
    var filePath = json.filePath, path = filePath, file = (0, _fileSystem.loadFile)(path, projectsDirectoryPath);
    json = file !== null ? file.toJSON() : null;
    return callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9hZEZpbGUgYXMgbG9hZEZpbGVFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZpbGUocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgZmlsZSA9IGxvYWRGaWxlRXgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKGZpbGUgIT09IG51bGwpID8gIC8vL1xuICAgICAgICAgICAgZmlsZS50b0pTT04oKTpcbiAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsibG9hZEZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJmaWxlUGF0aCIsInBhdGgiLCJmaWxlIiwibG9hZEZpbGVFeCIsInRvSlNPTiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MEJBRmU7QUFFeEIsU0FBU0EsU0FBU0MscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUNwRSxJQUFNLEFBQUVDLFdBQWFGLEtBQWJFLFVBQ0ZDLE9BQU9ELFVBQ1BFLE9BQU9DLElBQUFBLG9CQUFVLEVBQUNGLE1BQU1KO0lBRTlCQyxPQUFPLEFBQUNJLFNBQVMsT0FDUEEsS0FBS0UsTUFBTSxLQUNUO0lBRVosT0FBT0wsU0FBU0Q7QUFDbEIifQ==