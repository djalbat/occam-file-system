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
var _occammodel = require("occam-model");
var _fileSystem = require("./utilities/fileSystem");
function saveFile(projectsDirectoryPath, json, callback) {
    var file = _occammodel.File.fromJSON(json), success = (0, _fileSystem.saveFile)(file, projectsDirectoryPath);
    json = success; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZSB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZSBhcyBzYXZlRmlsZUV4IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICBzdWNjZXNzID0gc2F2ZUZpbGVFeChmaWxlLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGpzb24gPSBzdWNjZXNzOyAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsImZpbGUiLCJGaWxlIiwiZnJvbUpTT04iLCJzdWNjZXNzIiwic2F2ZUZpbGVFeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzswQkFKSDswQkFFa0I7QUFFeEIsU0FBU0EsU0FBU0MscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUNwRSxJQUFNQyxPQUFPQyxnQkFBSSxDQUFDQyxRQUFRLENBQUNKLE9BQ3JCSyxVQUFVQyxJQUFBQSxvQkFBVSxFQUFDSixNQUFNSDtJQUVqQ0MsT0FBT0ssU0FBUyxHQUFHO0lBRW5CSixTQUFTRDtBQUNYIn0=