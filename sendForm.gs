function sendForm() {
  var message = "A form was submitted with the following information \n\n";
  var sheet = SpreadsheetApp.getActiveSheet();  
  var lastRow = sheet.getLastRow(); 
  var lastColumn = sheet.getLastColumn(); 
  var myEmailAddress = Session.getActiveUser().getEmail();
  var subjectLine = "Form submitted"; // you should consider a better subject line
  
  //the following code takes the form information from the last row and puts into the message variable
  
  var labelData = sheet.getRange(1, 1, 1, lastColumn).getValues();
  var data = sheet.getRange(lastRow,1,1, lastColumn).getValues(); 
  
  for (var i=0; i<lastColumn; i++) {
    var labelUnit = labelData[0][i];
    var dataUnit = data[0][i];
    message = message + labelUnit + ": " + dataUnit + "\n";  
  }
  
  Logger.log(message);
  MailApp.sendEmail(myEmailAddress, subjectLine, message);
}