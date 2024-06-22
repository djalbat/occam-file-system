"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeRelease;
    }
});
var _necessary = require("necessary");
var _removeProjectEntries = require("./removeProjectEntries");
var last = _necessary.arrayUtilities.last;
function removeRelease(projectsDirectoryPath, json, callback) {
    var entryDirectory;
    var pathMaps = json.pathMaps, lastPathMap = last(pathMaps), pathMap = lastPathMap; ///
    entryDirectory = false;
    Object.assign(pathMap, {
        entryDirectory: entryDirectory
    });
    (0, _removeProjectEntries.removeProjectEntry)(projectsDirectoryPath, pathMap);
    entryDirectory = true;
    Object.assign(pathMap, {
        entryDirectory: entryDirectory
    });
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVSZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdEVudHJ5IH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdEVudHJpZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUmVsZWFzZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGxldCBlbnRyeURpcmVjdG9yeTtcblxuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uLFxuICAgICAgICBsYXN0UGF0aE1hcCA9IGxhc3QocGF0aE1hcHMpLFxuICAgICAgICBwYXRoTWFwID0gbGFzdFBhdGhNYXA7ICAvLy9cblxuICBlbnRyeURpcmVjdG9yeSA9IGZhbHNlO1xuXG4gIE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuICAgIGVudHJ5RGlyZWN0b3J5XG4gIH0pO1xuXG4gIHJlbW92ZVByb2plY3RFbnRyeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApO1xuXG4gIGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZTtcblxuICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICBlbnRyeURpcmVjdG9yeVxuICB9KTtcblxuICBqc29uID0ge1xuICAgIHBhdGhNYXBzXG4gIH07XG5cbiAgY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlUmVsZWFzZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsImVudHJ5RGlyZWN0b3J5IiwicGF0aE1hcHMiLCJsYXN0UGF0aE1hcCIsInBhdGhNYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW1vdmVQcm9qZWN0RW50cnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7eUJBTk87b0NBRUk7QUFFbkMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxTQUFTRCxjQUFjRyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3pFLElBQUlDO0lBRUosSUFBTSxBQUFFQyxXQUFhSCxLQUFiRyxVQUNGQyxjQUFjUCxLQUFLTSxXQUNuQkUsVUFBVUQsYUFBYyxHQUFHO0lBRWpDRixpQkFBaUI7SUFFakJJLE9BQU9DLE1BQU0sQ0FBQ0YsU0FBUztRQUNyQkgsZ0JBQUFBO0lBQ0Y7SUFFQU0sSUFBQUEsd0NBQWtCLEVBQUNULHVCQUF1Qk07SUFFMUNILGlCQUFpQjtJQUVqQkksT0FBT0MsTUFBTSxDQUFDRixTQUFTO1FBQ3JCSCxnQkFBQUE7SUFDRjtJQUVBRixPQUFPO1FBQ0xHLFVBQUFBO0lBQ0Y7SUFFQUYsU0FBU0Q7QUFDWCJ9