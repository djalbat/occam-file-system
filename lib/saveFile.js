"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return saveFile;
    }
});
var _occamentities = require("occam-entities");
var _fileSystem = require("./utilities/fileSystem");
function saveFile(projectsDirectoryPath, json, callback) {
    var file = _occamentities.File.fromJSON(json), success = (0, _fileSystem.saveFile)(file, projectsDirectoryPath);
    json = success; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZSB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZSBhcyBzYXZlRmlsZUV4IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICBzdWNjZXNzID0gc2F2ZUZpbGVFeChmaWxlLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGpzb24gPSBzdWNjZXNzOyAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsImZpbGUiLCJGaWxlIiwiZnJvbUpTT04iLCJzdWNjZXNzIiwic2F2ZUZpbGVFeCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzZCQUpIOzBCQUVrQjtBQUV4QixTQUFTQSxTQUFTQyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3BFLElBQU1DLE9BQU9DLG1CQUFJLENBQUNDLFFBQVEsQ0FBQ0osT0FDckJLLFVBQVVDLElBQUFBLG9CQUFVLEVBQUNKLE1BQU1IO0lBRWpDQyxPQUFPSyxTQUFTLEdBQUc7SUFFbkJKLFNBQVNEO0FBQ1gifQ==