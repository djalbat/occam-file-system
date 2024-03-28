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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxpZnlFbnRyeVBhdGhzKHBhdGhNYXApIHtcbiAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcblxuICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgdGFyZ2V0RW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVNvdXJjZUVudHJ5UGF0aChwYXRoTWFwKSB7XG4gIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IG51bGw7XG5cbiAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgc291cmNlRW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVRhcmdldEVudHJ5UGF0aChwYXRoTWFwKSB7XG4gIGNvbnN0IHRhcmdldEVudHJ5UGF0aCA9IG51bGw7XG5cbiAgT2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG4gICAgdGFyZ2V0RW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVNvdXJjZUVudHJ5UGF0aHMocGF0aE1hcHMpIHtcbiAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgIG51bGxpZnlTb3VyY2VFbnRyeVBhdGgocGF0aE1hcCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVRhcmdldEVudHJ5UGF0aHMocGF0aE1hcHMpIHtcbiAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgIG51bGxpZnlUYXJnZXRFbnRyeVBhdGgocGF0aE1hcCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm51bGxpZnlFbnRyeVBhdGhzIiwibnVsbGlmeVNvdXJjZUVudHJ5UGF0aCIsIm51bGxpZnlTb3VyY2VFbnRyeVBhdGhzIiwibnVsbGlmeVRhcmdldEVudHJ5UGF0aCIsIm51bGxpZnlUYXJnZXRFbnRyeVBhdGhzIiwicGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIk9iamVjdCIsImFzc2lnbiIsInBhdGhNYXBzIiwiZm9yRWFjaCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLGlCQUFpQjtlQUFqQkE7O0lBVUFDLHNCQUFzQjtlQUF0QkE7O0lBZ0JBQyx1QkFBdUI7ZUFBdkJBOztJQVJBQyxzQkFBc0I7ZUFBdEJBOztJQWNBQyx1QkFBdUI7ZUFBdkJBOzs7QUFoQ1QsU0FBU0osa0JBQWtCSyxPQUFPO0lBQ3ZDLElBQU1DLGtCQUFrQixNQUNsQkMsa0JBQWtCO0lBRXhCQyxPQUFPQyxNQUFNLENBQUNKLFNBQVM7UUFDckJDLGlCQUFBQTtRQUNBQyxpQkFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU04sdUJBQXVCSSxPQUFPO0lBQzVDLElBQU1DLGtCQUFrQjtJQUV4QkUsT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyxpQkFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU0gsdUJBQXVCRSxPQUFPO0lBQzVDLElBQU1FLGtCQUFrQjtJQUV4QkMsT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCRSxpQkFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU0wsd0JBQXdCUSxRQUFRO0lBQzlDQSxTQUFTQyxPQUFPLENBQUMsU0FBQ047UUFDaEJKLHVCQUF1Qkk7SUFDekI7QUFDRjtBQUVPLFNBQVNELHdCQUF3Qk0sUUFBUTtJQUM5Q0EsU0FBU0MsT0FBTyxDQUFDLFNBQUNOO1FBQ2hCRix1QkFBdUJFO0lBQ3pCO0FBQ0YifQ==