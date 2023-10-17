"use strict";

export function nullifyEntryPaths(pathMap) {
  const sourceEntryPath = null,
        targetEntryPath = null;

  Object.assign(pathMap, {
    sourceEntryPath,
    targetEntryPath
  });
}

export function nullifySourcePath(pathMap) {
  const sourceEntryPath = null;

  Object.assign(pathMap, {
    sourceEntryPath
  });
}

export function nullifyTargetEntryPath(pathMap) {
  const targetEntryPath = null;

  Object.assign(pathMap, {
    targetEntryPath
  });
}
