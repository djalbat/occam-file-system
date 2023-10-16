"use strict";

export function nullifyEntryPaths(pathMap) {
  const sourceEntryPath = null,
        targetEntryPath = null;

  Object.assign(pathMap, {
    sourceEntryPath,
    targetEntryPath
  });
}
