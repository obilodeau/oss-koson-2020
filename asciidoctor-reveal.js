// Load asciidoctor.js and asciidoctor-reveal.js
const asciidoctor = require('asciidoctor.js')();
const asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

// Convert the document 'slides.adoc' using the reveal.js converter
const options = {safe: 'safe', backend: 'revealjs'};
asciidoctor.convertFile('slides.adoc', options); // (1)