#bizistats

**Donostia**ko **bizikleta publiko**en zerbitzuak eskeintzen duen **API**a darabilkien **web aplikazioa** da **bizistats**.

**bizistats** is a **webapp** that uses data provided by the **public bike service** **API** from **Donostia - San Sebastian**.

> Arratsalde/Gau bateko proiektua da, oso xinplea. Kontuan hartu hori!  

[Node.js](http://nodejs.org/) zerbitzaria, [AngularJS](http://www.angularjs.org/) javascript frameworka eta [Twitter Bootstrap](http://twitter.github.com/bootstrap/) js/css frameworka erabiliz sortua, [jQuery](http://jquery.org) eta [Moment.js](http://momentjs.com/) ahaztu gabe. 

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


###Instalazioa

* Errepositorioa klonatu: ``git clone git://github.com/jimakker/bizistats.git``
* Sortu berri den karpetan sartu: ``cd bizistats``
* Instalatu beharrezko moduluak *npm* erabiliz: ``npm install express jade request buffered-writer``
* Exekutatu **server.js** *node* erabiliz: ``node server.js``
* Jo [http://localhost:3000](http://localhost:3000) helbidera. Kontuan hartu bost minuturoko datuak erakusten direla, beraz ez larritu lehen bost minutuetan.

###Installation

* Clone the repository: ``git clone git://github.com/jimakker/bizistats.git``
* Go to the newly created directory: ``cd bizistats``
* Install *Node.js* dependencies using *npm*: ``npm install express jade request buffered-writer``
* Run **server.js** with *Node.js*: ``node server.js``
* Go to [http://localhost:3000](http://localhost:3000). Wait 5 minutes. Refresh.