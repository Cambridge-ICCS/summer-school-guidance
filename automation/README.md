# Climate Code Clinic - Student Request System

## Overview

This system allows students to request help from Research Software Engineers (RSEs) during climate
code clinics by simply entering their name in a Google Sheet. When a student adds their name to the
designated area, a Slack notification is automatically sent to the appropriate RSE.

## How It Works

### 1. Student Interaction
- Students access a shared Google Sheet named [Code Clinic / Discussion Signups - Summer School 2026](https://docs.google.com/spreadsheets/d/1v8y2GodI9JZoHrFRpLW2tD135MurDBMIcr-ArBFIT3A/edit?gid=0#gid=0)
- The sheet contains a grid where students can sign up for help sessions
- The monitored range is `C7:P22` - this is where students enter their names

### 2. Trigger Mechanism
- When a student enters their name in any cell within the `C7:P22` range
- The `cellEdit()` function is automatically triggered by Google Apps Script
- The script collects three pieces of information:
    - **Student Name**: The name entered by the student in the cell
    - **RSE ID**: Retrieved from row 2 of the same column (identifies which RSE should be notified)
    - **Time**: Combines the date from column 1 and time from column 2 of the same row
- It then generates a web request to Slack using `UrlFetchApp.fetch(slackWebhookUrl, options)`

### 3. Slack Notification
- `code.js` sends a web request with the following payload
    ```js
      const payload = {
        rse: rseID,
        student: studentName,
        time: time
      };
    ```
- This triggers a workflow in Slack which generates a message with the following format:
    ```
    @[RSE name] has been requested in a climate code clinic by [student name] at [date time]
    ```
- The designated RSE receives the Slack message
- The RSE knows which student needs help and when they signed up
- The RSE can read the spreadsheet for more information

## Requirements

- [x] Google Apps Script enabled on the Google Sheet
- [X] A `SLACK_WEBHOOK_URL` from slack stored in the google script properties
- [x] Slack workspace with incoming webhook configured
- [x] Appropriate permissions to access both Google Sheets and Slack
- [x] Slack UserID's for each RSE (added into spreadsheet)

> [!NOTE]
> For now, I have disabled the trigger in the google app settings. 1 week before summer school we
> should re-enable it. Go to `google app script -> triggers -> add trigger`. Select following
> options:
> * Choose which function to run: `CellEdit`
> * Choose which deployment should run: `Head`
> * Select event source: `From Spreadsheet`
> * Select event type: `On Edit`
