#bizistats

**Donostia**ko bizikleta publikoen zerbitzuak eskeintzen duen APIa darabilkien nodejs+angularjs+bootstrap aplikazioa

> Arratsalde/Gau bateko proiektua da, oso xinplea. Kontuan hartu hori!  

[Node.js](http://nodejs.org/) zerbitzaria, [AngularJS](http://www.angularjs.org/) javascript frameworka eta [Twitter Bootstrap](http://twitter.github.com/bootstrap/) js/css frameworka erabiliz sortua. 

Datuak fitxategi batean gordetzen ditu minuturo, inungo lotsarik gabe. Gainera, APIak zerbitzatzen dituen datu inefizienteak inefizienteki gordetzen ditu zuzenean.

Bezeroak datu guztiak jasotzen ditu, mega dexente izan daitezke hilabete baten ostean! Dena dela, bezeroak 5-en multiploak (0,5,10,15,...) diren minutuen datuak erakusten ditu estatistika eran (minuturo ezkerraldeko informazio gunean), karga gutxiagotzeko (erraz aldatu daiteke hau, baina kontuan hartu milaka erregistro izan daitezkela!).

Egunen batean API serio bat idatziko da... Laguntza eskertua izango da!

##NodeJS Dependencies


* [Express.js](http://expressjs.com/)
* [Request](https://github.com/mikeal/request)
* [Jade](http://jade-lang.com/)
* [BufferedWriter](https://github.com/Gagle/Node-BufferedWriter)

[DEMO](http://bizistats.nodester.com)
----
hosted @ [Nodester](http://nodester.com)


###Installation

Errepositorioa klonatu , instalatu beharrezko moduluak *npm* erabiliz, exekutatu **server.js** *node* erabiliz eta jo [http://localhost:3000](http://localhost:3000) helbidera. Kontuan hartu 5 minuturo gordetzen dituela datuak, beraz ez larritu.