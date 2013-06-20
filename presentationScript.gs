function readEmails(){
	var doc = DocumentApp.create('Horray email subjects!')
	var threads = GmailApp.getInboxThreads(0, 15)

	for(var i in threads){
      var msg = threads[i].getFirstMessageSubject();
      //msg = LanguageApp.translate(msg, 'en','es'); //uncomment to translate headers to spanish!
      doc.appendParagraph(msg);
      Logger.log(msg);
	}
}