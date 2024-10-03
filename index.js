var pdfUtil = require('pdf-to-text');
var pdf_path = "./Adobe Extract API Sample.pdf";
 
pdfUtil.pdfToText(pdf_path, function(err, data) {
    if (err) throw(err);
    console.log(data);
});