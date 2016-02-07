var vip=angular.module("vip",["ngCookies","ui.router"]);vip.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"views/home.html"}).state("portfolio",{url:"/portfolio",templateUrl:"views/portfolio.html"})}]),vip.factory("translations",["$http","$q",function(a,b){var c={en:{},cn:{},pt:{},es:{},ar:{}};for(var d in c)c.hasOwnProperty(d)&&(angular.isUndefined(window.translations)?!function(b){c[b]=a.get("translation/"+b+".yml").then(function(a){return jsyaml.load(a.data)})}(d):!function(a,d){c[d]=b(function(b){b(a)})}(window.translations[d],d));return{getTranslations:function(a){return c.hasOwnProperty(a)?c[a]:void 0}}}]),vip.controller("MainCtrl",["$scope","translations","$cookies","$location","$anchorScroll","$http",function(a,b,c,d,e,f){if(a.scrollTo=function(a){d.hash(a),e()},a.translation={},a.showMenu=!1,a.chatMinimized=!0,a.popUpOpen=!0,a.langdir="auto",a.isOperatorOnline=!1,f.get("//chat.visaipartners.pt/index.php/site_admin/restapi/isonline").then(function(b){a.isOperatorOnline=b.data.isonline},function(){a.isOperatorOnline=!1}),!c.get("language")){var g;g=angular.isUndefined(window.navigator.languages)||angular.isUndefined(window.navigator.languages[0])?angular.isUndefined(window.navigator.language)?angular.isUndefined(window.navigator.userLanguage)?"en":window.navigator.userLanguage:window.navigator.language:window.navigator.languages[0],g=g.replace(/(.*)-.*/,"$1"),c.put("language",g)}a.lang=c.get("language"),"ar"===a.lang?a.langdir="rtl":a.langdir="ltr",a.langs=[{abr:"en",ext:"English",active:!1},{abr:"cn",ext:"简体中文",active:!1},{abr:"pt",ext:"Português",active:!1},{abr:"es",ext:"Castellano",active:!1},{abr:"ar",ext:"Arabic",active:!1}];var h=a.loadTranslation=function(d){b.getTranslations(d).then(function(b){a.translation=b});for(var e=0;e<a.langs.length;++e)a.langs[e].active=a.langs[e].abr===d;c.put("language",d),a.showMenu=!1};h(a.lang),a.t=function(b){return a.translation.hasOwnProperty(b)&&!angular.isUndefined(a.translation[b])?a.translation[b]:b}}]),vip.controller("PortfolioCtrl",["$scope","$http","$sce",function(a,b,c){a.trustAsHtml=c.trustAsHtml,a.tiles=[],b.get("data/portfolio.json").then(function(b){a.tiles=b.data},function(a){console.log(a)})}]),angular.module("vip").run(["$templateCache",function(a){"use strict";a.put("views/home.html",'<section id=video-section class="vh_height100 text-primary"><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><div class=logo><img width=200px src=media/logo.svg onerror="this.src=\'media/logo.png\'"></div><div class=page-title>Golden Visa Packages</div><div class=page-subtitle>{{t(\'Get the Golden Visa for 500.000€\')}} <b>{{t(\'and spend no more\')}}</b><br>{{t(\'The expenses are on us!\')}}</div></div></div></div></section><section id=william-quote class=ct-section><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img class=round-profile-pic src=media/guilherme.jpg><blockquote>{{t(\'Given our experience, property is the investment of choice for most overseas investors\')}}.<br><b>{{t(\'But do you know how much a Golden Visa REALLY costs\')}}</b></blockquote></div></div></div><div ng-hide=showPriceGoldenVisa2 class="read-more center-block mobile-only"><div class=button ng-click="showPriceGoldenVisa2 = true">{{t(\'Read More\')}}&nbsp;&nbsp;<i class="fa fa-arrow-circle-down"></i></div></div></section><section ng-class="{\'desktop-only\': !showPriceGoldenVisa2}" id=price-golden-visa2 class="ct-section desktop-only"><div class=container><p>{{t(\'Besides the minimum investment of 500.000€ (mandatory by the Portuguese and Spanish Residence permit law) you have to consider the cost of\')}}:</p><p><ul><li>{{t(\'Trip and expenses during the mandatory period\')}}</li><li>{{t(\'Legal Fees, like the Lawyer, and SEF process\')}}</li><li>{{t(\'Acquisition costs Like taxes, IMT, Stamp Duty, Deed and Registration\')}}</li><li>{{t(\'Maintnence costs like Condominium Fee\')}}</li></ul></p><p>{{t(\'For a 500.000€ acquisition you end up spending more 75.000€ to 150.000€, besides the trouble, and time consume\')}}</p><p class="color-primary-0 center"><b>{{t(\'But at VIP we don’t sell houses, we provide solutions\')}}!</b></p><p>{{t(\'So Considering that RENTABILITY and MOBILITY are the main motivation for foreigners investors we evolved our business products in order to provide the best service possible\')}}.</p></div></section><section class=ct-section id=packages><h1 class=color-primary-0>{{t(\'Packages\')}}</h1><div class=container><div class=row><div id=package-lifestyle class="package col-xs-12 col-md-6" itemscope itemtype=http://schema.org/Product><div class=content><h2 itemprop=name class=pname>{{t(\'Lifestyle\')}}</h2><div class=pk-text><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner itemprop=description>{{t(\'For the luxury products\')}}<br>{{t(\'For a 500.000€ or a 750.000€ all inclusive package, have access to the best golf and sea properties in Portugal, Spain or Italy\')}}</div></div></div></div></div></div><div id=package-rentability class="package col-xs-12 col-md-6" itemscope itemtype=http://schema.org/Product><div class=content><h2 itemprop=name class=pname>{{t(\'Rentability\')}}</h2><div class=pk-text><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner itemprop=description>{{t(\'Minimum 7% net\')}}<br>{{t(\'Acquire one or more of our rented commercial spaces and maximize your 500.000€ investment Without worring about tennents or expenses\')}}.</div></div></div></div></div></div></div><div class=row><div id=package-education class="package col-xs-12 col-md-6" itemscope itemtype=http://schema.org/Product><div class=content><h2 itemprop=name class=pname>{{t(\'Education\')}}</h2><div class=pk-text><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner itemprop=description>{{t(\'To study abroad\')}}<br>{{t(\'Specially designed to facilitate families that come to study abroad\')}}.<br>{{t(\'With properties near the major Universities or International Schools\')}}.</div></div></div></div></div></div><div id=package-emigration class="package col-xs-12 col-md-6" itemscope itemtype=http://schema.org/Product><div class=content><h2 itemprop=name class=pname>{{t(\'Emigration\')}}</h2><div class=pk-text><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner itemprop=description>{{t(\'Moving overseas\')}}<br>{{t(\'For those who consider moving overseas\')}}.<br>{{t(\'For just 500.000€ you can get an apartment and a shop, in a good location, good yield\')}}.<br>{{t(\'No expenses added\')}}.</div></div></div></div></div></div></div></div></section><section class=ct-section id=advert3><div id=advert3-title><h1 class=color-primary-0>{{t(\'What\\\'s included\')}}</h1></div><div class=bg-positioner><div class=container><div class=row><div class="item col-xs-6 col-md-4"><i class="fa fa-home fa-3x"></i><br>{{t(\'Property Acquisition\')}}</div><div class="item col-xs-6 col-md-4"><i class="fa fa-gavel fa-3x"></i><br>{{t(\'Legal services\')}}</div><div class="item col-xs-6 col-md-4"><img src=media/sef.png><br>{{t(\'Golden Visa Application Process\')}}</div></div><div class=row><div class="item col-xs-6 col-md-4"><i class="fa fa-money fa-3x"></i><br>{{t(\'Acquisition expenses\')}}</div><div class="item col-xs-6 col-md-4"><i class="fa fa-users fa-3x"></i><br>{{t(\'Family reunification\')}}</div><div class="item col-xs-6 col-md-4"><i class="fa fa-3x">%</i><br>{{t(\'Property taxes\')}}</div></div><div class=row><div class="item col-xs-6 col-md-4"><i class="fa fa-building-o fa-3x"></i><br>{{t(\'Property maintenance\')}}</div><div class="item col-xs-6 col-md-4"><i class="fa fa-plane fa-3x"></i><br>{{t(\'Five years of Hotel Flight Transportation\')}}</div><div class="item col-xs-6 col-md-4"><i class="fa fa-medkit fa-3x"></i><br>{{t(\'Medical and Life insurance policy\')}}</div></div></div></div></section><section class="ct-section bg-secondary" id=about-us><div class=container><h1 class=color-primary-0>{{t(\'About us\')}}</h1><div class=container><div class=row><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/mario.jpg><div class=name itemprop=name>Mário Benavente</div><div itemprop=jobTitle class=job>Chairman</div></div></div></div></div><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/guilherme.jpg><div class=name itemprop=name>William Monteiro</div><div itemprop=jobTitle class=job>CEO</div></div></div></div></div><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/pedro.jpg><div class=name itemprop=name>Pedro Andrade</div><div itemprop=jobTitle class=job>CFO</div></div></div></div></div></div><div class=row><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/vera.jpg><div class=name itemprop=name>Vera Tavares</div><div itemprop=jobTitle class=job>European Department Manager</div></div></div></div></div><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/felicia.jpg><div class=name itemprop=name>Felicia</div><div itemprop=jobTitle class=job>Chinese Department Manager</div></div></div></div></div><div class="profile col-xs-12 col-sm-4" itemprop=member itemscope itemtype=http://schema.org/Person><div class=vh-align-outer><div class=vh-align-middle><div class=vh-align-inner><img itemprop=image width=100px class=round-profile-pic src=media/estevao.jpg><div class=name itemprop=name>Estevão Santos</div><div itemprop=jobTitle class=job>CIO</div></div></div></div></div></div><div class=more-info></div><div ng-hide=showMoreAboutUs class="read-more center mobile-only"><div class=button ng-click="showMoreAboutUs = true">{{t(\'Read More\')}}&nbsp;&nbsp;<i class="fa fa-arrow-circle-down"></i></div></div><div ng-class="{\'desktop-only\': !showMoreAboutUs}"><p>{{t(\'about us long text\')}}</p><p>{{t(\'about us long text2\')}}</p></div></div></div></section><section class="ct-section portfolio" id=portfolio><h1 class=color-primary-0>{{t(\'Successful deals\')}}</h1><div class=row ui-sref=portfolio><div class="col-xs-12 col-md-4"><img src="media/portfolio/img1.jpg"><div class=hover><div class=table><div class=inner><div class=cell>{{t(\'Click to see more\')}}</div></div></div></div></div><div class="col-xs-12 col-md-4"><img src="media/portfolio/img2.jpg"><div class=hover><div class=table><div class=inner><div class=cell>{{t(\'Click to see more\')}}</div></div></div></div></div><div class="col-xs-12 col-md-4"><img src="media/portfolio/img3.jpg"><div class=hover><div class=table><div class=inner><div class=cell>{{t(\'Click to see more\')}}</div></div></div></div></div></div></section><section class=ct-section id=partnerships><div class=container><h1 class=color-primary-0>{{t(\'Our partners\')}}</h1><div class=row><div class="partner col-xs-12 col-sm-4 center"><a href="http://www.am-associados.pt/"><img src=media/partnerships/am.sociedade.png></a></div><div class="partner col-xs-12 col-sm-4 center"><a href="http://ind.millenniumbcp.pt/"><img src=media/partnerships/mbcp.png></a></div><div class="partner col-xs-12 col-sm-4 center"><a href="http://www.interpass.pt/"><img src=media/partnerships/interpass.png></a></div></div><div class=row><div class="partner col-xs-12 col-sm-4 center"><a href="http://www.f1h2o.com/"><img src=media/partnerships/f1h20.png></a></div><div class="partner col-xs-12 col-sm-4 center"><a href="http://antarte.pt/"><img src=media/partnerships/antarte.png></a></div><div class="partner col-xs-12 col-sm-4 center"><a href="http://www.porsche.com/"><img src=media/partnerships/porsche.png></a></div></div></div></section>'),a.put("views/portfolio.html",'<section id=portfolio-full class=portfolio><div class=container-fluid ng-controller=PortfolioCtrl><div class=row ng-repeat="tileGrp in tiles"><div class=col-xs-12 ng-class="{\'col-md-4\': $parent.$even, \'col-md-6\': $parent.$odd}" ng-repeat="tile in tileGrp"><img src="media/portfolio/img{{tile.id}}.jpg"><div class=hover><div class=table><div class=inner><div class=cell ng-bind-html=trustAsHtml(tile.text)></div></div></div></div></div></div></div></section>')}]);