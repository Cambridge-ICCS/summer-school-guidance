/**
 * When any cell in the specified range `rangeToMonitor` is edited, a slack
 * message will be triggered containing the following info:
 * ```
 * @[RSE name] has been requested in a climate code clinic by [student name] at [date time]
 * ```
 * @param {Object} e - Event object containing range information
 */
function cellEdit(e) {
  const range = e.range;
  if (!range) {
    console.log("No range provided in the event.");
    return;
  }

  const sheet = range.getSheet();
  const sheetName = "Sheet1";
  const rangeToMonitor = "C7:P22";

  console.log("Sheet Name: " + sheet.getName());
  console.log("Range: " + range.getA1Notation());
  console.log("Is in range: " + isInRange(range, rangeToMonitor));

  if (sheet.getName() === sheetName && isInRange(range, rangeToMonitor)) {
    const studentName = range.getValue();
    const rseID = sheet.getRange(2, range.getColumn()).getValue();
    const time = sheet.getRange(range.getRow(), 1).getValue() + " " + sheet.getRange(range.getRow(), 2).getValue();

    console.log("Student Name: " + studentName);
    console.log("rse ID : " + rseID);
    console.log("Time: " + time);

    if (studentName){
    sendToSlack(rseID, studentName, time);
    }
  }
}

/**
 * Checks if a cell is within a specified range
 * @param {Object} cell - The cell object to check
 * @param {string} rangeString - The range string in A1 notation (e.g., "C7:P22")
 * @returns {boolean} - True if cell is within range, false otherwise
 */
function isInRange(cell, rangeString) {
  const range = SpreadsheetApp.getActiveSpreadsheet().getRange(rangeString);
  const rangeStart = range.getCell(1, 1).getA1Notation();
  const rangeEnd = range.getCell(range.getNumRows(), range.getNumColumns()).getA1Notation();
  const cellNotation = cell.getA1Notation();

  const rangeStartCol = rangeStart.charCodeAt(0);
  const rangeEndCol = rangeEnd.charCodeAt(0);
  const cellCol = cellNotation.charCodeAt(0);

  const rangeStartRow = parseInt(rangeStart.substring(1));
  const rangeEndRow = parseInt(rangeEnd.substring(1));
  const cellRow = parseInt(cellNotation.substring(1));

  return cellCol >= rangeStartCol && cellCol <= rangeEndCol &&
    cellRow >= rangeStartRow && cellRow <= rangeEndRow;
}

/**
 * Sends student request data to Slack via webhook
 * @param {string} rseID - The RSE ID
 * @param {string} studentName - The student's name
 * @param {string} time - The time of the attendance
 */
function sendToSlack(rseID, studentName, time) {
  const slackWebhookUrl = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
  const payload = {
    rse: rseID,
    student: studentName,
    time: time
  };

  console.log("payload:", JSON.stringify(payload))

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(slackWebhookUrl, options);
}
