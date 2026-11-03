/**
 * AEON Media contact form -> Google Sheet (adapted from the YOT Productions site plan).
 * Setup: create a Google Sheet with a tab named "Enquiries" and header row:
 *   Timestamp | Name | Email | Brand | Phone | Service | Details
 * Extensions > Apps Script > paste this > Deploy > New deployment > Web app
 *   Execute as: Me   Who has access: Anyone
 * Copy the /exec URL into the GitHub repo variable NEXT_PUBLIC_FORM_ENDPOINT.
 * Field names match the website form (name, email, brand, phone, service, details).
 */
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');
    sheet.appendRow([new Date(), d.name || '', d.email || '', d.brand || '', d.phone || '', d.service || '', d.details || '']);
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
