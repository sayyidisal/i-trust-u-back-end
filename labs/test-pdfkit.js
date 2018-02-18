var PDFDocument, doc, fs;

PDFDocument = require('pdfkit');
fs = require('fs');

doc = new PDFDocument({
  size: 'A8',
  layout: 'landscape',
  margin: 5,
});

doc.registerFont('OpenSans', './assets/fonts/Open_Sans/OpenSans-Regular.ttf')
doc.registerFont('OpenSansLight', './assets/fonts/Open_Sans/OpenSans-Light.ttf')

doc.pipe(fs.createWriteStream('output.pdf'));
doc.image('./assets/templates/business-card-template.png', 0, 0, {width: 215});
// draw some text
doc.font('OpenSans')
   .fontSize(14)
   .fillColor('white')
   .text('Diky Arga Anggara', 20, 20);
doc.font('OpenSansLight')
   .fontSize(9)
   .text('Manulife Indonesia', 20, 40);
 doc.font('OpenSans')
   .fontSize(7)
   .text('Phone : 085713836009', 20, 100);  
 doc.font('OpenSans')
   .fontSize(7)
   .text('Email : dikyarga.id@gmail.com', 20, 112); 
doc.font('OpenSans')
  .fontSize(7)
  .text('Alamat : Nusa Dua - Bali', 20, 125); 
 doc.font('OpenSans')
   .fontSize(4)
   .fillColor('black')
   .text('Temukan profil dan ulasan seputar saya di iTrustU', 158, 75, {width: 50, align: 'center'}); 
doc.image('./assets/images/qr/qr-5a871f590be80fce2655dc18.png', 163, 95, {width: 40});


doc.end();

// ---
// generated by coffee-script 1.9.2