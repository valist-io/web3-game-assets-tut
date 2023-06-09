mergeInto(LibraryManager.library, {
  ContractBalance: function () {
    var returnStr = balanceOf;
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },
});