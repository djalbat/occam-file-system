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
        return _default;
    },
    post: function() {
        return post;
    }
});
var _stream = require("stream");
var _necessary = require("necessary");
var _constants = require("../constants");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var POST_METHOD = _necessary.methods.POST_METHOD, createRequest = _necessary.requestUtilities.createRequest, OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE, ACCEPT_HEADER = _necessary.headers.ACCEPT_HEADER, CONTENT_TYPE_HEADER = _necessary.headers.CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = _necessary.contentTypes.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
function post(host, uri, query, json, callback) {
    var _obj;
    var content = JSON.stringify(json), method = POST_METHOD, _$headers = (_obj = {}, _define_property(_obj, ACCEPT_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE), _define_property(_obj, CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE), _obj);
    var request = createRequest(host, uri, query, method, _$headers, function(error, response) {
        if (response === null) {
            error = true;
        } else {
            var statusCode = response.statusCode;
            if (statusCode !== OK_200_STATUS_CODE) {
                error = true;
            }
        }
        if (error) {
            var _$json = null;
            callback(_$json);
            return;
        }
        contentFromResponse(response, function(content) {
            var _$json = null;
            try {
                _$json = JSON.parse(content);
            } catch (error) {} ///
            callback(_$json);
        });
    }), readable = _stream.Readable.from(content);
    readable.pipe(request);
}
var _default = {
    post: post
};
function contentFromResponse(response, callback) {
    var content = _constants.EMPTY_STRING;
    response.on(_constants.DATA, function(data) {
        content += data;
    });
    response.on(_constants.END, function() {
        callback(content);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmltcG9ydCB7IG1ldGhvZHMsIGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IFBPU1RfTUVUSE9EIH0gPSBtZXRob2RzLFxuICAgICAgeyBjcmVhdGVSZXF1ZXN0IH0gPSByZXF1ZXN0VXRpbGl0aWVzLFxuICAgICAgeyBPS18yMDBfU1RBVFVTX0NPREUgfSA9IHN0YXR1c0NvZGVzLFxuICAgICAgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gPSBoZWFkZXJzLFxuICAgICAgeyBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFIH0gPSBjb250ZW50VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGpzb24sIGNhbGxiYWNrKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcdC8vL1xuXHRcdFx0XHRtZXRob2QgPSBQT1NUX01FVEhPRCxcblx0XHRcdFx0aGVhZGVycyA9IHtcbiAgICAgICAgICBbQUNDRVBUX0hFQURFUl06IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gICAgICAgICAgW0NPTlRFTlRfVFlQRV9IRUFERVJdOiBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFXG4gICAgICAgIH07XG5cblx0Y29uc3QgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRlcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHRcdGlmIChzdGF0dXNDb2RlICE9PSBPS18yMDBfU1RBVFVTX0NPREUpIHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc3QganNvbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGNhbGxiYWNrKGpzb24pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGVudEZyb21SZXNwb25zZShyZXNwb25zZSwgKGNvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdGxldCBqc29uID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UoY29udGVudCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge31cdC8vL1xuXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhqc29uKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHJlYWRhYmxlID0gUmVhZGFibGUuZnJvbShjb250ZW50KTtcblxuXHRyZWFkYWJsZS5waXBlKHJlcXVlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBvc3Rcbn07XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG5cdGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG5cdHJlc3BvbnNlLm9uKERBVEEsIChkYXRhKSA9PiB7XG5cdFx0Y29udGVudCArPSBkYXRhO1xuXHR9KTtcblxuXHRyZXNwb25zZS5vbihFTkQsICgpID0+IHtcblx0XHRjYWxsYmFjayhjb250ZW50KTtcblx0fSk7XG59XG4iXSwibmFtZXMiOlsicG9zdCIsIlBPU1RfTUVUSE9EIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJyZXF1ZXN0VXRpbGl0aWVzIiwiT0tfMjAwX1NUQVRVU19DT0RFIiwic3RhdHVzQ29kZXMiLCJBQ0NFUFRfSEVBREVSIiwiaGVhZGVycyIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFIiwiY29udGVudFR5cGVzIiwiaG9zdCIsInVyaSIsInF1ZXJ5IiwianNvbiIsImNhbGxiYWNrIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJyZXF1ZXN0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjb250ZW50RnJvbVJlc3BvbnNlIiwicGFyc2UiLCJyZWFkYWJsZSIsIlJlYWRhYmxlIiwiZnJvbSIsInBpcGUiLCJFTVBUWV9TVFJJTkciLCJvbiIsIkRBVEEiLCJkYXRhIiwiRU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3REEsT0FFRTtlQUZGOztJQTFDZ0JBLElBQUk7ZUFBSkE7OztzQkFaUzt5QkFFcUQ7eUJBRXRDOzs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLGNBQWdCQyxrQkFBTyxDQUF2QkQsYUFDRixBQUFFRSxnQkFBa0JDLDJCQUFnQixDQUFsQ0QsZUFDRixBQUFFRSxxQkFBdUJDLHNCQUFXLENBQWxDRCxvQkFDQUUsZ0JBQXVDQyxrQkFBTyxDQUE5Q0QsZUFBZUUsc0JBQXdCRCxrQkFBTyxDQUEvQkMscUJBQ2pCLEFBQUVDLDhDQUFnREMsdUJBQVksQ0FBNUREO0FBRUQsU0FBU1YsS0FBS1ksSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRO1FBR3ZDO0lBRmIsSUFBTUMsVUFBVUMsS0FBS0MsU0FBUyxDQUFDSixPQUM1QkssU0FBU25CLGFBQ1RPLGFBQVUsV0FDSixpQkFESSxNQUNIRCxlQUFnQkcsOENBQ2pCLGlCQUZJLE1BRUhELHFCQUFzQkMsOENBRm5CO0lBS2IsSUFBTVcsVUFBVWxCLGNBQWNTLE1BQU1DLEtBQUtDLE9BQU9NLFFBQVFaLFdBQVMsU0FBQ2MsT0FBT0M7UUFDckUsSUFBSUEsYUFBYSxNQUFNO1lBQ3RCRCxRQUFRO1FBQ1QsT0FBTztZQUNOLElBQU0sQUFBRUUsYUFBZUQsU0FBZkM7WUFFUixJQUFJQSxlQUFlbkIsb0JBQW9CO2dCQUN0Q2lCLFFBQVE7WUFDVDtRQUNEO1FBRUEsSUFBSUEsT0FBTztZQUNWLElBQU1QLFNBQU87WUFFYkMsU0FBU0Q7WUFFVDtRQUNEO1FBRUFVLG9CQUFvQkYsVUFBVSxTQUFDTjtZQUM5QixJQUFJRixTQUFPO1lBRVgsSUFBSTtnQkFDSEEsU0FBT0csS0FBS1EsS0FBSyxDQUFDVDtZQUNuQixFQUFFLE9BQU9LLE9BQU8sQ0FBQyxFQUFFLEdBQUc7WUFFdEJOLFNBQVNEO1FBQ1Y7SUFDRCxJQUNBWSxXQUFXQyxnQkFBUSxDQUFDQyxJQUFJLENBQUNaO0lBRTVCVSxTQUFTRyxJQUFJLENBQUNUO0FBQ2Y7SUFFQSxXQUFlO0lBQ2RyQixNQUFBQTtBQUNEO0FBRUEsU0FBU3lCLG9CQUFvQkYsUUFBUSxFQUFFUCxRQUFRO0lBQzlDLElBQUlDLFVBQVVjLHVCQUFZO0lBRTFCUixTQUFTUyxFQUFFLENBQUNDLGVBQUksRUFBRSxTQUFDQztRQUNsQmpCLFdBQVdpQjtJQUNaO0lBRUFYLFNBQVNTLEVBQUUsQ0FBQ0csY0FBRyxFQUFFO1FBQ2hCbkIsU0FBU0M7SUFDVjtBQUNEIn0=