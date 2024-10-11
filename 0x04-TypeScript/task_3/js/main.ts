// task_3/main.ts

/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New Row ID: ${newRowID}`);

// Create an updated row object with age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

