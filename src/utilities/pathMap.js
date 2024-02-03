"use strict";

export function nullifyEntryPaths(pathMap) {
  const sourceEntryPath = null,
        targetEntryPath = null;

  Object.assign(pathMap, {
    sourceEntryPath,
    targetEntryPath
  });
}

export function nullifySourceEntryPath(pathMap) {
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

export function nullifySourceEntryPaths(pathMaps) {
  pathMaps.forEach((pathMap) => {
    nullifySourceEntryPath(pathMap);
  });
}

export function nullifyTargetEntryPaths(pathMaps) {
  pathMaps.forEach((pathMap) => {
    nullifyTargetEntryPath(pathMap);
  });
}
