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
    nullifySourcePath: function() {
        return nullifySourcePath;
    },
    nullifyTargetEntryPath: function() {
        return nullifyTargetEntryPath;
    }
});
function nullifyEntryPaths(pathMap) {
    var sourceEntryPath = null, targetEntryPath = null;
    Object.assign(pathMap, {
        sourceEntryPath: sourceEntryPath,
        targetEntryPath: targetEntryPath
    });
}
function nullifySourcePath(pathMap) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxpZnlFbnRyeVBhdGhzKHBhdGhNYXApIHtcbiAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcblxuICBPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcbiAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgdGFyZ2V0RW50cnlQYXRoXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVsbGlmeVNvdXJjZVBhdGgocGF0aE1hcCkge1xuICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBudWxsO1xuXG4gIE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuICAgIHNvdXJjZUVudHJ5UGF0aFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bGxpZnlUYXJnZXRFbnRyeVBhdGgocGF0aE1hcCkge1xuICBjb25zdCB0YXJnZXRFbnRyeVBhdGggPSBudWxsO1xuXG4gIE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuICAgIHRhcmdldEVudHJ5UGF0aFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJudWxsaWZ5RW50cnlQYXRocyIsIm51bGxpZnlTb3VyY2VQYXRoIiwibnVsbGlmeVRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsaUJBQWlCO2VBQWpCQTs7SUFVQUMsaUJBQWlCO2VBQWpCQTs7SUFRQUMsc0JBQXNCO2VBQXRCQTs7O0FBbEJULFNBQVNGLGtCQUFrQkcsT0FBTztJQUN2QyxJQUFNQyxrQkFBa0IsTUFDbEJDLGtCQUFrQjtJQUV4QkMsT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyxpQkFBQUE7UUFDQUMsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNKLGtCQUFrQkUsT0FBTztJQUN2QyxJQUFNQyxrQkFBa0I7SUFFeEJFLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztRQUNyQkMsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNGLHVCQUF1QkMsT0FBTztJQUM1QyxJQUFNRSxrQkFBa0I7SUFFeEJDLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztRQUNyQkUsaUJBQUFBO0lBQ0Y7QUFDRiJ9