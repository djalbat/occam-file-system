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
    createProjectDirectory: function() {
        return createProjectDirectory;
    },
    createProjectEntry: function() {
        return createProjectEntry;
    },
    createProjectFile: function() {
        return createProjectFile;
    },
    default: function() {
        return createProjectEntries;
    }
});
var _necessary = require("necessary");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, createFile = _necessary.fileSystemUtilities.createFile, createDirectory = _necessary.fileSystemUtilities.createDirectory;
function createProjectEntries(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps;
    pathMaps.forEach(function(pathMap) {
        createProjectEntry(pathMap);
    });
    json = {
        pathMaps: pathMaps
    };
    callback(json);
}
function createProjectEntry(projectsDirectoryPath, pathMap) {
    var sourcePath = pathMap.sourcePath;
    if (sourcePath === null) {
        return;
    }
    var entryDirectory = pathMap.entryDirectory;
    entryDirectory ? createProjectDirectory(projectsDirectoryPath, pathMap) : createProjectFile(projectsDirectoryPath, pathMap);
}
function createProjectFile(projectsDirectoryPath, pathMap) {
    var sourceEntryPath = pathMap.sourceEntryPath, sourceFilePath = sourceEntryPath, absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath);
    try {
        var filePath = absoluteSourceFilePath; ///
        createFile(filePath);
    } catch (error) {
        var targetEntryPath = null;
        Object.assign(pathMap, {
            targetEntryPath: targetEntryPath
        });
    }
}
function createProjectDirectory(projectsDirectoryPath, pathMap) {
    var sourceEntryPath = pathMap.sourceEntryPath, sourceDirectoryPath = sourceEntryPath, absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath);
    try {
        var directoryPath = absoluteSourceDirectoryPath; ///
        createDirectory(directoryPath);
    } catch (error) {
        var targetEntryPath = null;
        Object.assign(pathMap, {
            targetEntryPath: targetEntryPath
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVQcm9qZWN0RW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVGaWxlOiBjcmVhdGVGaWxlLCBjcmVhdGVEaXJlY3Rvcnk6IGNyZWF0ZURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVudHJpZXMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uO1xuXG4gIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0RW50cnkocGF0aE1hcCk7XG4gIH0pO1xuXG4gIGpzb24gPSB7XG4gICAgcGF0aE1hcHNcbiAgfTtcblxuICBjYWxsYmFjayhqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbnRyeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIHtcbiAgY29uc3QgeyBzb3VyY2VQYXRoIH0gPSBwYXRoTWFwO1xuXG4gIGlmIChzb3VyY2VQYXRoID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICBlbnRyeURpcmVjdG9yeSA/XG4gICAgY3JlYXRlUHJvamVjdERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIDpcbiAgICAgIGNyZWF0ZVByb2plY3RGaWxlKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGhNYXApIHtcbiAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXAsXG4gICAgICAgIHNvdXJjZUZpbGVQYXRoID0gc291cmNlRW50cnlQYXRoLCAvLy9cbiAgICAgICAgYWJzb2x1dGVTb3VyY2VGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VGaWxlUGF0aCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGFic29sdXRlU291cmNlRmlsZVBhdGg7ICAvLy9cblxuICAgIGNyZWF0ZUZpbGUoZmlsZVBhdGgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IHRhcmdldEVudHJ5UGF0aCA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aE1hcCkge1xuICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcCxcbiAgICAgICAgc291cmNlRGlyZWN0b3J5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aCwgLy8vXG4gICAgICAgIGFic29sdXRlU291cmNlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBhYnNvbHV0ZVNvdXJjZURpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgIGNyZWF0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCB0YXJnZXRFbnRyeVBhdGggPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVByb2plY3REaXJlY3RvcnkiLCJjcmVhdGVQcm9qZWN0RW50cnkiLCJjcmVhdGVQcm9qZWN0RmlsZSIsImNyZWF0ZVByb2plY3RFbnRyaWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJjcmVhdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNyZWF0ZURpcmVjdG9yeSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsInBhdGhNYXBzIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJzb3VyY2VQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VGaWxlUGF0aCIsImFic29sdXRlU291cmNlRmlsZVBhdGgiLCJmaWxlUGF0aCIsImVycm9yIiwidGFyZ2V0RW50cnlQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlRGlyZWN0b3J5UGF0aCIsImFic29sdXRlU291cmNlRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXFEZ0JBLHNCQUFzQjtlQUF0QkE7O0lBaENBQyxrQkFBa0I7ZUFBbEJBOztJQWNBQyxpQkFBaUI7ZUFBakJBOztJQTVCaEIsT0FZQztlQVp1QkM7Ozt5QkFMMkI7QUFFbkQsSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsQUFBWUEsYUFBaURDLDhCQUFtQixDQUFoRkQsWUFBd0JFLEFBQWlCQSxrQkFBb0JELDhCQUFtQixDQUF4REM7QUFFakIsU0FBU0wscUJBQXFCTSxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ2hGLElBQU0sQUFBRUMsV0FBYUYsS0FBYkU7SUFFUkEsU0FBU0MsT0FBTyxDQUFDLFNBQUNDO1FBQ2hCYixtQkFBbUJhO0lBQ3JCO0lBRUFKLE9BQU87UUFDTEUsVUFBQUE7SUFDRjtJQUVBRCxTQUFTRDtBQUNYO0FBRU8sU0FBU1QsbUJBQW1CUSxxQkFBcUIsRUFBRUssT0FBTztJQUMvRCxJQUFNLEFBQUVDLGFBQWVELFFBQWZDO0lBRVIsSUFBSUEsZUFBZSxNQUFNO1FBQ3ZCO0lBQ0Y7SUFFQSxJQUFNLEFBQUVDLGlCQUFtQkYsUUFBbkJFO0lBRVJBLGlCQUNFaEIsdUJBQXVCUyx1QkFBdUJLLFdBQzVDWixrQkFBa0JPLHVCQUF1Qks7QUFDL0M7QUFFTyxTQUFTWixrQkFBa0JPLHFCQUFxQixFQUFFSyxPQUFPO0lBQzlELElBQU0sQUFBRUcsa0JBQW9CSCxRQUFwQkcsaUJBQ0ZDLGlCQUFpQkQsaUJBQ2pCRSx5QkFBeUJmLGlCQUFpQkssdUJBQXVCUztJQUV2RSxJQUFJO1FBQ0YsSUFBTUUsV0FBV0Qsd0JBQXlCLEdBQUc7UUFFN0NiLFdBQVdjO0lBQ2IsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBTUMsa0JBQWtCO1FBRXhCQyxPQUFPQyxNQUFNLENBQUNWLFNBQVM7WUFDckJRLGlCQUFBQTtRQUNGO0lBQ0Y7QUFDRjtBQUVPLFNBQVN0Qix1QkFBdUJTLHFCQUFxQixFQUFFSyxPQUFPO0lBQ25FLElBQU0sQUFBRUcsa0JBQW9CSCxRQUFwQkcsaUJBQ0ZRLHNCQUFzQlIsaUJBQ3RCUyw4QkFBOEJ0QixpQkFBaUJLLHVCQUF1QmdCO0lBRTVFLElBQUk7UUFDRixJQUFNRSxnQkFBZ0JELDZCQUE4QixHQUFHO1FBRXZEbEIsZ0JBQWdCbUI7SUFDbEIsRUFBRSxPQUFPTixPQUFPO1FBQ2QsSUFBTUMsa0JBQWtCO1FBRXhCQyxPQUFPQyxNQUFNLENBQUNWLFNBQVM7WUFDckJRLGlCQUFBQTtRQUNGO0lBQ0Y7QUFDRiJ9