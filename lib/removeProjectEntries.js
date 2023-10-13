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
    default: function() {
        return removeProjectEntries;
    },
    removeProjectDirectory: function() {
        return removeProjectDirectory;
    },
    removeProjectEntry: function() {
        return removeProjectEntry;
    },
    removeProjectFile: function() {
        return removeProjectFile;
    }
});
var _necessary = require("necessary");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, removeFile = _necessary.fileSystemUtilities.removeEntry, removeDirectory = _necessary.fileSystemUtilities.removeEntry;
function removeProjectEntries(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps;
    pathMaps.forEach(function(pathMap) {
        removeProjectEntry(pathMap);
    });
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}
function removeProjectEntry(projectsDirectoryPath, pathMap) {
    var sourcePath = pathMap.sourcePath;
    if (sourcePath === null) {
        return;
    }
    var entryDirectory = pathMap.entryDirectory;
    entryDirectory ? removeProjectDirectory(projectsDirectoryPath, pathMap) : removeProjectFile(projectsDirectoryPath, pathMap);
}
function removeProjectFile(projectsDirectoryPath, pathMap) {
    var sourceEntryPath = pathMap.sourceEntryPath, sourceFilePath = sourceEntryPath, absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath);
    try {
        var filePath = absoluteSourceFilePath; ///
        removeFile(filePath);
    } catch (error) {
        var sourceEntryPath1 = null;
        Object.assign(pathMap, {
            sourceEntryPath: sourceEntryPath1
        });
    }
}
function removeProjectDirectory(projectsDirectoryPath, pathMap) {
    var sourceEntryPath = pathMap.sourceEntryPath, sourceDirectoryPath = sourceEntryPath, absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath);
    try {
        var directoryPath = absoluteSourceDirectoryPath; ///
        removeDirectory(directoryPath);
    } catch (error) {
        var sourceEntryPath1 = null;
        Object.assign(pathMap, {
            sourceEntryPath: sourceEntryPath1
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVQcm9qZWN0RW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyByZW1vdmVFbnRyeTogcmVtb3ZlRmlsZSwgcmVtb3ZlRW50cnk6IHJlbW92ZURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEVudHJpZXMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uO1xuXG4gIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICByZW1vdmVQcm9qZWN0RW50cnkocGF0aE1hcCk7XG4gIH0pO1xuXG4gIGpzb24gPSB7XG4gICAgcGF0aE1hcHNcbiAgfTtcblxuICBjYWxsYmFjayhqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RFbnRyeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIHtcbiAgY29uc3QgeyBzb3VyY2VQYXRoIH0gPSBwYXRoTWFwO1xuXG4gIGlmIChzb3VyY2VQYXRoID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICBlbnRyeURpcmVjdG9yeSA/XG4gICAgcmVtb3ZlUHJvamVjdERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIDpcbiAgICAgIHJlbW92ZVByb2plY3RGaWxlKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0RmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIHtcbiAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXAsXG4gICAgICAgIHNvdXJjZUZpbGVQYXRoID0gc291cmNlRW50cnlQYXRoLCAvLy9cbiAgICAgICAgYWJzb2x1dGVTb3VyY2VGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VGaWxlUGF0aCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGFic29sdXRlU291cmNlRmlsZVBhdGg7ICAvLy9cblxuICAgIHJlbW92ZUZpbGUoZmlsZVBhdGgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICAgIHNvdXJjZUVudHJ5UGF0aFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0RGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCkge1xuICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcCxcbiAgICAgICAgc291cmNlRGlyZWN0b3J5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aCwgLy8vXG4gICAgICAgIGFic29sdXRlU291cmNlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBhYnNvbHV0ZVNvdXJjZURpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgIHJlbW92ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgICBzb3VyY2VFbnRyeVBhdGhcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlbW92ZVByb2plY3RFbnRyaWVzIiwicmVtb3ZlUHJvamVjdERpcmVjdG9yeSIsInJlbW92ZVByb2plY3RFbnRyeSIsInJlbW92ZVByb2plY3RGaWxlIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJyZW1vdmVFbnRyeSIsInJlbW92ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVtb3ZlRGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwicGF0aE1hcHMiLCJmb3JFYWNoIiwicGF0aE1hcCIsInNvdXJjZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUZpbGVQYXRoIiwiYWJzb2x1dGVTb3VyY2VGaWxlUGF0aCIsImZpbGVQYXRoIiwiZXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVTb3VyY2VEaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT0EsT0FZQztlQVp1QkE7O0lBOENSQyxzQkFBc0I7ZUFBdEJBOztJQWhDQUMsa0JBQWtCO2VBQWxCQTs7SUFjQUMsaUJBQWlCO2VBQWpCQTs7O3lCQWpDbUM7QUFFbkQsSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsQUFBYUMsYUFBNkNDLDhCQUFtQixDQUE3RUYsYUFBeUJBLEFBQWFHLGtCQUFvQkQsOEJBQW1CLENBQXBERjtBQUVsQixTQUFTTixxQkFBcUJVLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDaEYsSUFBTSxBQUFFQyxXQUFhRixLQUFiRTtJQUVSQSxTQUFTQyxPQUFPLENBQUMsU0FBQ0M7UUFDaEJiLG1CQUFtQmE7SUFDckI7SUFFQUosT0FBTztRQUNMRSxVQUFBQTtJQUNGO0lBRUFELFNBQVNEO0FBQ1g7QUFFTyxTQUFTVCxtQkFBbUJRLHFCQUFxQixFQUFFSyxPQUFPO0lBQy9ELElBQU0sQUFBRUMsYUFBZUQsUUFBZkM7SUFFUixJQUFJQSxlQUFlLE1BQU07UUFDdkI7SUFDRjtJQUVBLElBQU0sQUFBRUMsaUJBQW1CRixRQUFuQkU7SUFFUkEsaUJBQ0VoQix1QkFBdUJTLHVCQUF1QkssV0FDNUNaLGtCQUFrQk8sdUJBQXVCSztBQUMvQztBQUVPLFNBQVNaLGtCQUFrQk8scUJBQXFCLEVBQUVLLE9BQU87SUFDOUQsSUFBTSxBQUFFRyxrQkFBb0JILFFBQXBCRyxpQkFDRkMsaUJBQWlCRCxpQkFDakJFLHlCQUF5QmhCLGlCQUFpQk0sdUJBQXVCUztJQUV2RSxJQUFJO1FBQ0YsSUFBTUUsV0FBV0Qsd0JBQXlCLEdBQUc7UUFFN0NiLFdBQVdjO0lBQ2IsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBTUosbUJBQWtCO1FBRXhCSyxPQUFPQyxNQUFNLENBQUNULFNBQVM7WUFDckJHLGlCQUFBQTtRQUNGO0lBQ0Y7QUFDRjtBQUVPLFNBQVNqQix1QkFBdUJTLHFCQUFxQixFQUFFSyxPQUFPO0lBQ25FLElBQU0sQUFBRUcsa0JBQW9CSCxRQUFwQkcsaUJBQ0ZPLHNCQUFzQlAsaUJBQ3RCUSw4QkFBOEJ0QixpQkFBaUJNLHVCQUF1QmU7SUFFNUUsSUFBSTtRQUNGLElBQU1FLGdCQUFnQkQsNkJBQThCLEdBQUc7UUFFdkRqQixnQkFBZ0JrQjtJQUNsQixFQUFFLE9BQU9MLE9BQU87UUFDZCxJQUFNSixtQkFBa0I7UUFFeEJLLE9BQU9DLE1BQU0sQ0FBQ1QsU0FBUztZQUNyQkcsaUJBQUFBO1FBQ0Y7SUFDRjtBQUNGIn0=