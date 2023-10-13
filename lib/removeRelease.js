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
    var pathMaps = json.pathMaps, lastPathMap = last(pathMaps);
    (0, _removeProjectEntries.removeProjectEntry)(projectsDirectoryPath, lastPathMap);
    var sourceEntryPath = lastPathMap.sourceEntryPath;
    pathMaps.forEach(function(pathMap) {
        Object.assign(pathMap, {
            sourceEntryPath: sourceEntryPath
        });
    });
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVSZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdEVudHJ5IH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdEVudHJpZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUmVsZWFzZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcGF0aE1hcHMgfSA9IGpzb24sXG4gICAgICAgIGxhc3RQYXRoTWFwID0gbGFzdChwYXRoTWFwcyk7XG5cbiAgcmVtb3ZlUHJvamVjdEVudHJ5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbGFzdFBhdGhNYXApO1xuXG4gIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBsYXN0UGF0aE1hcDtcblxuICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgICBzb3VyY2VFbnRyeVBhdGhcbiAgICB9KTtcbiAgfSk7XG5cbiAganNvbiA9IHtcbiAgICBwYXRoTWFwc1xuICB9O1xuXG4gIGNhbGxiYWNrKGpzb24pO1xufVxuIl0sIm5hbWVzIjpbInJlbW92ZVJlbGVhc2UiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJwYXRoTWFwcyIsImxhc3RQYXRoTWFwIiwicmVtb3ZlUHJvamVjdEVudHJ5Iiwic291cmNlRW50cnlQYXRoIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7eUJBTk87b0NBRUk7QUFFbkMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxTQUFTRCxjQUFjRyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3pFLElBQU0sQUFBRUMsV0FBYUYsS0FBYkUsVUFDRkMsY0FBY04sS0FBS0s7SUFFekJFLElBQUFBLHdDQUFrQixFQUFDTCx1QkFBdUJJO0lBRTFDLElBQU0sQUFBRUUsa0JBQW9CRixZQUFwQkU7SUFFUkgsU0FBU0ksT0FBTyxDQUFDLFNBQUNDO1FBQ2hCQyxPQUFPQyxNQUFNLENBQUNGLFNBQVM7WUFDckJGLGlCQUFBQTtRQUNGO0lBQ0Y7SUFFQUwsT0FBTztRQUNMRSxVQUFBQTtJQUNGO0lBRUFELFNBQVNEO0FBQ1gifQ==