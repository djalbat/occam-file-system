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
    nullifyEntryPaths: function() {
        return nullifyEntryPaths;
    },
    nullifySourceEntryPath: function() {
        return nullifySourceEntryPath;
    },
    nullifySourceEntryPaths: function() {
        return nullifySourceEntryPaths;
    },
    nullifyTargetEntryPath: function() {
        return nullifyTargetEntryPath;
    },
    nullifyTargetEntryPaths: function() {
        return nullifyTargetEntryPaths;
    }
});
function nullifyEntryPaths(pathMap) {
    var sourceEntryPath = null, targetEntryPath = null;
    Object.assign(pathMap, {
        sourceEntryPath: sourceEntryPath,
        targetEntryPath: targetEntryPath
    });
}
function nullifySourceEntryPath(pathMap) {
    var sourceEntryPath = null;
    Object.assign(pathMap, {
        sourceEntryPath: sourceEntryPath
    });
}
function nullifyTargetEntryPath(pathMap) {
    var targetEntryPath = null;
    Object.assign(pathMap, {
        targetEntryPath: targetEntryPath
    });
}
function nullifySourceEntryPaths(pathMaps) {
    pathMaps.forEach(function(pathMap) {
        nullifySourceEntryPath(pathMap);
    });
}
function nullifyTargetEntryPaths(pathMaps) {
    pathMaps.forEach(function(pathMap) {
        nullifyTargetEntryPath(pathMap);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxpZnlFbnRyeVBhdGhzKHBhdGhNYXApIHtcbiAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcblxuICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgdGFyZ2V0RW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVNvdXJjZUVudHJ5UGF0aChwYXRoTWFwKSB7XG4gIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IG51bGw7XG5cbiAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgc291cmNlRW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVRhcmdldEVudHJ5UGF0aChwYXRoTWFwKSB7XG4gIGNvbnN0IHRhcmdldEVudHJ5UGF0aCA9IG51bGw7XG5cbiAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgdGFyZ2V0RW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVNvdXJjZUVudHJ5UGF0aHMocGF0aE1hcHMpIHtcbiAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgIG51bGxpZnlTb3VyY2VFbnRyeVBhdGgocGF0aE1hcCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVRhcmdldEVudHJ5UGF0aHMocGF0aE1hcHMpIHtcbiAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgIG51bGxpZnlUYXJnZXRFbnRyeVBhdGgocGF0aE1hcCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm51bGxpZnlFbnRyeVBhdGhzIiwibnVsbGlmeVNvdXJjZUVudHJ5UGF0aCIsIm51bGxpZnlTb3VyY2VFbnRyeVBhdGhzIiwibnVsbGlmeVRhcmdldEVudHJ5UGF0aCIsIm51bGxpZnlUYXJnZXRFbnRyeVBhdGhzIiwicGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIk9iamVjdCIsImFzc2lnbiIsInBhdGhNYXBzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxpQkFBaUI7ZUFBakJBOztJQVVBQyxzQkFBc0I7ZUFBdEJBOztJQWdCQUMsdUJBQXVCO2VBQXZCQTs7SUFSQUMsc0JBQXNCO2VBQXRCQTs7SUFjQUMsdUJBQXVCO2VBQXZCQTs7O0FBaENULFNBQVNKLGtCQUFrQkssT0FBTztJQUN2QyxJQUFNQyxrQkFBa0IsTUFDbEJDLGtCQUFrQjtJQUV4QkMsT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyxpQkFBQUE7UUFDQUMsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNOLHVCQUF1QkksT0FBTztJQUM1QyxJQUFNQyxrQkFBa0I7SUFFeEJFLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztRQUNyQkMsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNILHVCQUF1QkUsT0FBTztJQUM1QyxJQUFNRSxrQkFBa0I7SUFFeEJDLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztRQUNyQkUsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNMLHdCQUF3QlEsUUFBUTtJQUM5Q0EsU0FBU0MsT0FBTyxDQUFDLFNBQUNOO1FBQ2hCSix1QkFBdUJJO0lBQ3pCO0FBQ0Y7QUFFTyxTQUFTRCx3QkFBd0JNLFFBQVE7SUFDOUNBLFNBQVNDLE9BQU8sQ0FBQyxTQUFDTjtRQUNoQkYsdUJBQXVCRTtJQUN6QjtBQUNGIn0=