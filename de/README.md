<div align="center" className="hide-in-docs">
<img alt="fiskaltrust" src="../images/fiskaltrust-icon.png" width="450" />
<br/>
<strong>Compliance-as-a-Service für KassenSysteme</strong>
<br/>
<br/>
<h1>Rollout Dokumentation für Deutschland</h1>
<br/>
</div>
<p align="center" className="hide-in-docs">
<a href="README.md"><img alt="Docs: DE" src="https://img.shields.io/badge/docs-DE-blue" /></a>
<a href="../en/README.md"><img alt="Docs: EN" src="https://img.shields.io/badge/docs-EN-blue" /></a>
</p>
<br/>

Dieses Repository beinhaltet die **Rollout Dokumentation** von fiskaltrust für den deutschen Markt. Es unterstützt KassenHersteller und KassenHändler beim Rolloutprozess der fiskaltrust.Middleware und anderer fiskaltrust Produkte. 


## Getting started

fiskaltrust bietet Compliance-as-a-Service für KassenSysteme im Fiskalisierungsbereich an. Diese wird durch die Verwendung des lizenzkostenfreien fiskaltrust Software-Produkts "fiskaltrust.Middleware" vorgenommen, das vom KassenHersteller in sein KassenSystem integriert wird. 

Die fiskaltrust.Middleware kümmert sich um die Kommunikation mit der TSE und bereitet für das KassenSystem die Fiskalisierungsdaten vor, die von diesem auf den Beleg gedruckt werden müssen (z.B. Belegnummer, Signaturen, Startzeiten, QR-Code für die Prüfung, usw.). Des Weiteren kann über die fiskaltrust.Middleware, lokal beim KassenBetreiber, ein Export prüfungsrelevanter Daten vorgenommen werden. Diese werden von der fiskaltrust.Middleware im den vom Gesetzgeber vorgegebenen Formaten (DSFinV-K, TSE-TAR Files) bereitgestellt. 

Die fiskaltrust.Middleware läuft als eigenständiger Service auf der Kasse des KassenBetreibers und muss deshalb vom KassenHändler dorthin ausgerollt werden.

Des Weiteren bietet fiskaltrust Add-On Produkte als auch Einzelprodukte für KassenBetreiber an. Add-On Produkte erfordern den Einsatz der fiskaltrust.Middleware und bauen auf diese auf. Einzelprodukte sind unabhängig vom Einsatz der fiskaltrust.Middleware. Die fiskaltrust Produkte  werden ausschließlich über unsere KassenHändler-Partner an KassenBetreiber vertrieben. Hierbei handelt es sich um Archivierungsprodukte, automatisierte Meldungen an das Finanzamt, Technische Sicherheitseinrichtungen (TSE) diverser Hersteller als auch um Sorglospakete mit und ohne TSE-as-a-Service. Im Rahmen des Rollouts muss der KassenHändler die zuvor von fiskaltrust erworbenen Produkte an seine KassenBetreiber übertragen und aktivieren. 

Der Rolloutprozess besteht also aus der Konfiguration und Auslieferung der fiskaltrust.Middleware auf die Kasse(n) des KassenBetreiber und aus der Übertragung und Aktivierung der Add-On und Einzelprodukte für die KassenBetreiber. In diesem Dokument werden wir beschreiben, welche Vorbereitungsmaßnahmen vor dem tatsächlichen Rollout vorzunehmen sind und wie dann, darauf aufbauend, im Detail der Rollout vorgenommen wird. Dabei wird das fiskaltrust.Portal als Rolloutmanagement-Tool eine wichtige Rolle spielen.

### Die unterschiedlichen Rollen der fiskaltrust Partner

Beim Rolloutprozess unterscheidet fiskaltrust grundsätzlich zwischen drei Partnerrollen: KassenHersteller, KassenHändler und KassenBetreiber. 



![Partner-Rollen](images/partner-roles.png "Rollen der fiskaltrust Partner")



KassenHersteller implementieren KassenSysteme und vertreiben diese über Ihre KassenHändler. Die KassenHändler verkaufen das KassenSystem und die dazugehörigen Services an Ihre KassenBetreiber. Die KassenBetreiber betreiben das erworbene KassenSystem in einer oder mehreren Kassen, an einem oder mehreren Standorten. Nach diesem Prinzip ist auch der Rolloutprozess der fiskaltrust.Middleware und anderer fiskaltrust.Produkte aufgebaut. Dabei spielt das fiskaltrust.Portal eine wichtige Rolle, denn es bildet  zur Unterstützung des Rolloutprozess die drei oben genannten Partnerrollen ab.

### Prozessüberblick

![Prozess-Überblick](images/process-1.png "Prozess-Überblick")

KassenHersteller, die sich für fiskaltrust entschieden haben, integrieren die fiskaltrust.Middleware in ihr KassenSystem, d.h. sie implementieren ihr KassenSystem so, dass es mit der fiskaltrust.Middleware kommunizieren kann, die als eigenständiger Service läuft. Voraussetzung hierfür ist die eigenständige Registrierung des KassenHerstellers im fiskaltrust.Portal. Dabei unterschreiben KassenHersteller digital einen Kooperationsvertrag mit fiskaltrust und können dadurch die fiskaltrust.Middleware lizenzkostenfrei nutzen. Während der Integration der fiskaltrust.Middleware setzen sich KassenHersteller auch damit auseinander, wie die fiskaltrust.Middleware später auf die Kassen der KassenBetreiber ausgerollt werden soll. Sie treffen dabei Vorbereitungen um ihre KassenHändler beim Rolloutprozess ihres KassenSystems und der fiskaltrust.Middleware unterstützen zu können. Je nach Umfang (Anzahl der Kassen auf die die fiskaltrust.Middleware später ausgeliefert werden soll) analysieren sie auch Automatisierungsoptionen für einen Massenrollout. Dabei kommt es oft vor, dass KassenHersteller sogenannte Konfiguration-Templates für ihre KassenHändler vorbereiten.

KassenHersteller sollten möglichst früh Ihre KassenHändler zur Registrierung im fiskaltrust.Portal einladen, damit sie sich gemeinsam auf den Rollout der fiskaltrust.Middleware vorbereiten können und damit die KassenHändler wiederum ihre KassenBetreiber rechtzeitig im fiskaltrust.Portal zur Registrierung einladen können, denn diese müssen dort eine Nutzungsvereinbarung digital unterschreiben, damit die fiskaltrust.Middleware auf ihre Kasse installiert und betrieben werden darf. Diese Einladungen werden über das fiskaltrust.Portal vorgenommen. Der Einladungsprozess mit den dazugehörigen Details wird im Kapitel [Einladungsmanagement](./invitation-management/README.md) beschrieben.

KassenHersteller besprechen daraufhin mit ihren KassenHändler wie die Konfiguration der auszuliefernden fiskaltrust.Middleware Instanzen vorzunehmen ist und führen eine gemeinsame Pilotinstallation bei einem KassenBetreiber durch. Wie die Konfiguration der fiskaltrust.Middleware vorgenommen werden kann, was genau konfiguriert werden muss und welche Automatisierungsoptionen für Massenrollouts zur Verfügung stehen lesen Sie im Kapitel [Rollout der fiskaltrust.Middleware](./middleware/README.md). Nach erfolgreicher Pilotinstallation und Vorbereitung für den Massenrollout übernehmen die KassenHändler das Zepter und führen den Massenrollout selbständig durch.

KassenHändler haben zudem die Möglichkeit im fiskaltrust.Portal Add-On Produkte und Einzelprodukte von fiskaltrust zu erwerben und als Bestandteil Ihrer Serviceleistung an die KassenBetreiber weiter zu verkaufen. Zur Freischaltung von Mengenrabatten, vereinbaren KassenHändler mit fiskaltrust die Konditionen mit Hilfe von Rahmenverträgen und können daraufhin sogenannte Entitlements im fiskaltrust.Shop (Bestandteil des fiskaltrust.Portal) erwerben. Diese übertragen sie im Rahmen des Rollouts an ihre Kunden, den KassenBetreiber, und aktivieren die dazugehörigen Produkte über das fiskaltrust.Portal. Die genaue Vorgehensweise dazu wird im Kapitel [fiskaltrust Produkte kaufen und weiter verkaufen](./shop/README.md) beschrieben.

### Aufbau der Rolloutdokumentation

Diese Dokumentation ist auf Grundlage der oben beschriebenen Prozesse in folgende Hauptelemente aufgeteilt:

1. [Einladungsmanagement](./invitation-management/README.md) - wichtig für KassenHersteller und für KassenHändler
2. [Rollout der fiskaltrust.Middleware](./middleware/README.md) - wichtig für KassenHersteller und für KassenHändler
3. [fiskaltrust Produkte kaufen und weiter verkaufen](./shop/README.md)  - wichtig vor allem für KassenHändler

### Weiteres

Es kommt gelegentlich vor, dass fiskaltrust Partner nicht exakt in die oben beschrieben Partnerrollen hineinpassen, weil sie zum Beispiel KassenHersteller und KassenHändler in einem sind (z.B. KassenHersteller, der selbst den Vertrieb an die Endkunden übernimmt) oder sowohl KassenHersteller als auch KassenBetreiber sind (z.B. ein Franchise Unternehmen). Sollten Sie einer dieser Partner sein und sich nicht vollständig in den hier beschriebenen Partnerrollen wiederfinden, empfehlen wir Ihnen sich dennoch an den beschriebenen Prozess zu halten, indem sie sich selbst im fiskaltrust.Portal einladen, um die fehlende(n) Partnerrolle(n) zu übernehmen und zu kompensieren. Sollten Sie weitere Fragen dazu haben, steht Ihnen gerne unser Support- und Sales-Team unter info@fiskaltrust.de zur Verfügung.

<div className="hide-in-docs">

## Inhalte
<pre>
├── <a href="./invitation-management/README.md" title="Einladungsmanagement">Einladungsmanagement</a>
│   └── <a href="./invitation-management/README.md#kassenhersteller-laden-kassenhändler-ein" title="KassenHersteller laden KassenHändler ein">KassenHersteller laden KassenHändler ein</a>
│   └── <a href="./invitation-management/README.md#kassenhändler-laden-kassenbetreiber-ein" title="KassenHändler laden KassenBetreiber ein">KassenHändler laden KassenBetreiber ein</a>
├── <a href="./middleware/README.md" title="Middleware">Rollout der fiskaltrust.Middleware</a>
│   └── <a href="./middleware/README.md#konfiguration-der-fiskaltrustmiddleware" title="Konfiguration der Middleware">Konfiguration der Middleware</a>
│   └── <a href="./middleware/README.md#service-starten-und-testen" title="Service testen">Service testen</a>
│   └── <a href="./middleware/README.md#datenexport-testen" title="Datenexport testen">Datenexport testen</a>
│   └── <a href="./middleware/README.md#rollout-szenarien" title="Rollout Szenarien">Rollout Szenarien</a>
│   └── <a href="./middleware/README.md#automatisierung-des-rollout" title="Automatisierung des Rollout">Automatisierung des Rollout</a>
├── <a href="./shop/README.md" title="Shop">fiskaltrust Produkte kaufen und weiter verkaufen</a>
│   └── <a href="./shop/README.md#fiskaltrustshop" title="fiskaltrust.Shop">fiskaltrust.Shop</a>
│   └── <a href="./shop/README.md#rahmenverträge-für-mengenrabatt" title="Rahmenverträge für Mengenrabatt">Rahmenverträge für Mengenrabatt</a>
│   └── <a href="./shop/README.md#produkte-über-entitlements-kaufen" title="Produkte über Entitlements kaufen">Produkte über Entitlements kaufen</a>
│   └── <a href="./shop/README.md#übertragung-gekaufter-entitlements-an-die-kassenbetreiber" title="Übertragung gekaufter Entitlements an die KassenBetreiber">Übertragung gekaufter Entitlements an die KassenBetreiber</a>
│   └── <a href="./shop/README.md#lieferoptionen-für-hardware-tses" title="Lieferoptionen für Hardware TSEs">Lieferoptionen für Hardware TSEs</a>
│   └── <a href="./shop/README.md#swissbit-cloud-tse-auschecken-und-einrichten" title="Swissbit Cloud TSE auschecken und einrichten">Swissbit Cloud TSE auschecken und einrichten</a>
│   └── <a href="./shop/README.md#fiskaly-cloud-tse-auschecken-und-einrichten" title="Fiskaly Cloud TSE auschecken und einrichten">Fiskaly Cloud TSE auschecken und einrichten</a>

</pre>
</div>

