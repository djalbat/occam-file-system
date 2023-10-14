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
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVSZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdEVudHJ5IH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdEVudHJpZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUmVsZWFzZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgcGF0aE1hcHMgfSA9IGpzb24sXG4gICAgICAgIGxhc3RQYXRoTWFwID0gbGFzdChwYXRoTWFwcyk7XG5cbiAgcmVtb3ZlUHJvamVjdEVudHJ5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbGFzdFBhdGhNYXApO1xuXG4gIGpzb24gPSB7XG4gICAgcGF0aE1hcHNcbiAgfTtcblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVSZWxlYXNlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwicGF0aE1hcHMiLCJsYXN0UGF0aE1hcCIsInJlbW92ZVByb2plY3RFbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozt5QkFOTztvQ0FFSTtBQUVuQyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLFNBQVNELGNBQWNHLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDekUsSUFBTSxBQUFFQyxXQUFhRixLQUFiRSxVQUNGQyxjQUFjTixLQUFLSztJQUV6QkUsSUFBQUEsd0NBQWtCLEVBQUNMLHVCQUF1Qkk7SUFFMUNILE9BQU87UUFDTEUsVUFBQUE7SUFDRjtJQUVBRCxTQUFTRDtBQUNYIn0=