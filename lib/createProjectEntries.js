"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createProjectEntry: function() {
        return createProjectEntry;
    },
    default: function() {
        return createProjectEntries;
    }
});
var _pathMap = require("./utilities/pathMap");
var _necessary = require("necessary");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, createFile = _necessary.fileSystemUtilities.createFile, createDirectory = _necessary.fileSystemUtilities.createDirectory, checkFileExists = _necessary.fileSystemUtilities.checkEntryExists, checkDirectoryExists = _necessary.fileSystemUtilities.checkEntryExists;
function createProjectEntries(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps;
    pathMaps.forEach(function(pathMap) {
        createProjectEntry(projectsDirectoryPath, pathMap);
    });
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}
function createProjectEntry(projectsDirectoryPath, pathMap) {
    var entryDirectory = pathMap.entryDirectory;
    entryDirectory ? createProjectDirectory(projectsDirectoryPath, pathMap) : createProjectFile(projectsDirectoryPath, pathMap);
}
function createProjectFile(projectsDirectoryPath, pathMap) {
    var targetEntryPath = pathMap.targetEntryPath, targetFilePath = targetEntryPath, absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath), targetFileExists = checkFileExists(absoluteTargetFilePath);
    if (targetFileExists) {
        (0, _pathMap.nullifyTargetEntryPath)(pathMap);
        return;
    }
    try {
        var filePath = absoluteTargetFilePath; ///
        createFile(filePath);
    } catch (error) {
        (0, _pathMap.nullifyTargetEntryPath)(pathMap);
    }
}
function createProjectDirectory(projectsDirectoryPath, pathMap) {
    var targetEntryPath = pathMap.targetEntryPath, targetDirectoryPath = targetEntryPath, absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath), targetDirectoryExists = checkDirectoryExists(absoluteTargetDirectoryPath);
    if (targetDirectoryExists) {
        (0, _pathMap.nullifyTargetEntryPath)(pathMap);
        return;
    }
    try {
        var directoryPath = absoluteTargetDirectoryPath; ///
        createDirectory(directoryPath);
    } catch (error) {
        (0, _pathMap.nullifyTargetEntryPath)(pathMap);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVQcm9qZWN0RW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbnVsbGlmeVRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNyZWF0ZUZpbGUsIGNyZWF0ZURpcmVjdG9yeSwgY2hlY2tFbnRyeUV4aXN0czogY2hlY2tGaWxlRXhpc3RzLCBjaGVja0VudHJ5RXhpc3RzOiBjaGVja0RpcmVjdG9yeUV4aXN0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVudHJpZXMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uO1xuXG4gIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0RW50cnkocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoTWFwKTtcbiAgfSk7XG5cbiAganNvbiA9IHtcbiAgICBwYXRoTWFwc1xuICB9O1xuXG4gIGNhbGxiYWNrKGpzb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVudHJ5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCkge1xuICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gIGVudHJ5RGlyZWN0b3J5ID9cbiAgICBjcmVhdGVQcm9qZWN0RGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCkgOlxuICAgICAgY3JlYXRlUHJvamVjdEZpbGUocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoTWFwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZpbGUocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoTWFwKSB7XG4gIGNvbnN0IHsgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwLFxuICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEVudHJ5UGF0aCwgLy8vXG4gICAgICAgIGFic29sdXRlVGFyZ2V0RmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RmlsZVBhdGgpLFxuICAgICAgICB0YXJnZXRGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGFic29sdXRlVGFyZ2V0RmlsZVBhdGgpO1xuXG4gIGlmICh0YXJnZXRGaWxlRXhpc3RzKSB7XG4gICAgbnVsbGlmeVRhcmdldEVudHJ5UGF0aChwYXRoTWFwKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBhYnNvbHV0ZVRhcmdldEZpbGVQYXRoOyAgLy8vXG5cbiAgICBjcmVhdGVGaWxlKGZpbGVQYXRoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBudWxsaWZ5VGFyZ2V0RW50cnlQYXRoKHBhdGhNYXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoTWFwKSB7XG4gIGNvbnN0IHsgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwLFxuICAgICAgICB0YXJnZXREaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoLCAvLy9cbiAgICAgICAgYWJzb2x1dGVUYXJnZXREaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpLFxuICAgICAgICB0YXJnZXREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZVRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gIGlmICh0YXJnZXREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICBudWxsaWZ5VGFyZ2V0RW50cnlQYXRoKHBhdGhNYXApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gYWJzb2x1dGVUYXJnZXREaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbnVsbGlmeVRhcmdldEVudHJ5UGF0aChwYXRoTWFwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVByb2plY3RFbnRyeSIsImNyZWF0ZVByb2plY3RFbnRyaWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJjcmVhdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNyZWF0ZURpcmVjdG9yeSIsImNoZWNrRW50cnlFeGlzdHMiLCJjaGVja0ZpbGVFeGlzdHMiLCJjaGVja0RpcmVjdG9yeUV4aXN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsInBhdGhNYXBzIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsImNyZWF0ZVByb2plY3REaXJlY3RvcnkiLCJjcmVhdGVQcm9qZWN0RmlsZSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEZpbGVQYXRoIiwiYWJzb2x1dGVUYXJnZXRGaWxlUGF0aCIsInRhcmdldEZpbGVFeGlzdHMiLCJudWxsaWZ5VGFyZ2V0RW50cnlQYXRoIiwiZmlsZVBhdGgiLCJlcnJvciIsInRhcmdldERpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVRhcmdldERpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlFeGlzdHMiLCJkaXJlY3RvcnlQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzQmdCQSxrQkFBa0I7ZUFBbEJBOztJQWRoQixPQVlDO2VBWnVCQzs7O3VCQU5lO3lCQUNZO0FBRW5ELElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLGFBQTJHQyw4QkFBbUIsQ0FBOUhELFlBQVlFLGtCQUErRkQsOEJBQW1CLENBQWxIQyxpQkFBaUJDLEFBQWtCQyxrQkFBNERILDhCQUFtQixDQUFqR0Usa0JBQW1DQSxBQUFrQkUsdUJBQXlCSiw4QkFBbUIsQ0FBOURFO0FBRXpELFNBQVNOLHFCQUFxQlMscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUNoRixJQUFNLEFBQUVDLFdBQWFGLEtBQWJFO0lBRVJBLFNBQVNDLE9BQU8sQ0FBQyxTQUFDQztRQUNoQmYsbUJBQW1CVSx1QkFBdUJLO0lBQzVDO0lBRUFKLE9BQU87UUFDTEUsVUFBQUE7SUFDRjtJQUVBRCxTQUFTRDtBQUNYO0FBRU8sU0FBU1gsbUJBQW1CVSxxQkFBcUIsRUFBRUssT0FBTztJQUMvRCxJQUFNLEFBQUVDLGlCQUFtQkQsUUFBbkJDO0lBRVJBLGlCQUNFQyx1QkFBdUJQLHVCQUF1QkssV0FDNUNHLGtCQUFrQlIsdUJBQXVCSztBQUMvQztBQUVBLFNBQVNHLGtCQUFrQlIscUJBQXFCLEVBQUVLLE9BQU87SUFDdkQsSUFBTSxBQUFFSSxrQkFBb0JKLFFBQXBCSSxpQkFDRkMsaUJBQWlCRCxpQkFDakJFLHlCQUF5Qm5CLGlCQUFpQlEsdUJBQXVCVSxpQkFDakVFLG1CQUFtQmQsZ0JBQWdCYTtJQUV6QyxJQUFJQyxrQkFBa0I7UUFDcEJDLElBQUFBLCtCQUFzQixFQUFDUjtRQUV2QjtJQUNGO0lBRUEsSUFBSTtRQUNGLElBQU1TLFdBQVdILHdCQUF5QixHQUFHO1FBRTdDakIsV0FBV29CO0lBQ2IsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLElBQUFBLCtCQUFzQixFQUFDUjtJQUN6QjtBQUNGO0FBRUEsU0FBU0UsdUJBQXVCUCxxQkFBcUIsRUFBRUssT0FBTztJQUM1RCxJQUFNLEFBQUVJLGtCQUFvQkosUUFBcEJJLGlCQUNGTyxzQkFBc0JQLGlCQUN0QlEsOEJBQThCekIsaUJBQWlCUSx1QkFBdUJnQixzQkFDdEVFLHdCQUF3Qm5CLHFCQUFxQmtCO0lBRW5ELElBQUlDLHVCQUF1QjtRQUN6QkwsSUFBQUEsK0JBQXNCLEVBQUNSO1FBRXZCO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsSUFBTWMsZ0JBQWdCRiw2QkFBOEIsR0FBRztRQUV2RHJCLGdCQUFnQnVCO0lBQ2xCLEVBQUUsT0FBT0osT0FBTztRQUNkRixJQUFBQSwrQkFBc0IsRUFBQ1I7SUFDekI7QUFDRiJ9