"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";


const { concatenatePaths } = pathUtilities,
      { isDirectoryEmpty,
        checkEntryExists,
        renameFile: renameFileEx,
        renameDirectory: renameDirectoryEx } = fileSystemUtilities;

export default function renameProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  renameEntries(pathMaps, projectsDirectoryPath, (targetEntryPaths) => {
    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function renameEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback) {






  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  entryDirectory ?
    renameDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      renameFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

export function renameDirectory(oldDirectoryPath, newDirectoryPath, callback) {
  let error = null;

  try {
    renameDirectoryEx(oldDirectoryPath);
  } catch (nativeError) {
    error = nativeError;  ///
  }

  callback(error);
}

export function renameFile(oldFilePath, newFilePath, callback) {
  let error = null;

  try {
    renameFileEx(oldFilePath, newFilePath);
  } catch (nativeError) {
    error = nativeError;  ///
  }

  callback(error);
}

function renameEntries(pathMaps, projectsDirectoryPath, callback) {
  const targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      renameEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
      callback(targetEntryPaths);
    }
  );
}

function renameFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const oldFilePath = absoluteSourceFilePath, ///
        newFilePath = absoluteTargetFilePath; ///

  renameFile(oldFilePath, newFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function renameDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath,  ///
        targetDirectoryPath = targetEntryPath,  ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!sourceDirectoryEmpty) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    const directoryPath = absoluteSourceDirectoryPath;  ///

    removeDirectory(directoryPath, (error) => {
      if (error) {
        targetEntryPath = sourceEntryPath;  ///
      }

      callback(sourceEntryPath, targetEntryPath);
    });

    return;
  }

  const oldDirectoryPath = absoluteSourceDirectoryPath, ///
        newDirectoryPath = absoluteTargetDirectoryPath; ///

  renameDirectory(oldDirectoryPath, newDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
