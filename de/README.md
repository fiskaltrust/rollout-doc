<div align="center">
<img alt="fiskaltrust" src="../images/fiskaltrust-icon.png" width="450" />
<br/>
<strong>Compliance-As-A-Service für Kassensysteme</strong>
<br/>
<br/>
<h1>Rollout Dokumentation für Deutschland</h1>
<br/>
</div>
<p align="center">
<a href="README.md"><img alt="Docs: DE" src="https://img.shields.io/badge/docs-DE-blue" /></a>
<a href="../en/README.md"><img alt="Docs: EN" src="https://img.shields.io/badge/docs-EN-blue" /></a>
</p>
<br/>

Dieses Repository beinhaltet die **Rollout Dokumentation** von fiskaltrust für den deutschen Markt. Es unterstüzt KassenHersteller und KassenHändler beim Rolloutprozess der fiskaltrust.Middleware und anderer fiskaltrust Produkte. 


## Getting started

fiskaltrust bietet Compliance-As-A-Service für KassenSysteme im Fiskalisierungsbereich an. Diese durch die Verwendung des lizenzkostenfreien fiskaltrust Software-Produkts "fiskaltrust.Middleware" vorgenommen, das vom KassenHersteller in sein KassenSystem integriert wird. 

Die fiskaltrust.Middleware kümmert sich um die Kommunikation mit der TSE und bereitet für KassenSystem die Fiskalisierungsdaten vor, die auf den Beleg gedruckt werden müssen (z.B. Belegnummer, Signaturen, Startzeiten, QR-Code für die Prüfung, usw.). Des Weiteren kann über die fiskaltrust.Middleware, lokal beim KassenBetreiber, ein Export prüfungsrelevanter Daten vorgenommen werden. Diese werden von der fiskaltrust.Middleware im den vom Gesetzgeber definierten Formaten (DSFinV-K, TSE-TAR Files) bereitgestellt. 

Die fiskaltrust.Middleware läuft als eigenständiger Service auf der Kasse des KassenBetreibers und muss deshalb vom KassenHändler dorthin ausgerollt werden.

Des Weiteren bietet fiskaltrust Add-On Produkte (die auf die fiskaltrust.Middleware aufbauen) als auch Einzelprodukte (unabhängig von der fiskaltrust.Middleware) für KassenBetreiber an, die von KassenHändler an diese vertrieben werden. Hierbei handelt es sich um Archivierungsprodukte, automatisierte Meldungen an das Finanzamt, Technische Sicherheitseinrichtungen (TSE) diverser Hersteller als auch um Sorglospakete mit und ohne TSE-As-A-Service. Im Rahmen des Rollouts muss der KassenHändler die zuvor von fiskaltrust erworbenen Produkte an seine KassenBetreiber übertragen und dort aktivieren. 

Der Rolloutprozess besteht also aus der Konfiguration und Auslieferung der fiskaltrust.Middleware auf die Kasse(n) des KassenBetreiber und aus der Übertragung und Aktivierung der Add-On und Einzelprodukte für die KassenBetreiber. In diesem Dokument werden wir beschreiben, welche Vorbereitungsmaßnahmen vor dem tatsächlichen Rollout vorzunehmen sind und wie dann, darauf aufbauend, im Detail der Rollout vorgenommen wird. Dabei wird das fiskaltrust.Portal als Rolloutmanagement-Tool einen wichtigen Platz einnehmen.

### Die unterschiedlichen Rollen der fiskaltrust Partner

Beim Rolloutprozess unterscheidet fiskaltrust grundsätzlich zwischen drei Partnerrollen: KassenHersteller, KassenHändler und KassenBetreiber. 



![Partner-Rollen](../de/einladungsmanagement/images/Partner-Rollen.png "Rollen der fiskaltrust Partner")



KassenHersteller implementieren KassenSysteme und vertreiben diese über Ihre KassenHändler. Die KassenHändler verkaufen das KassenSystem und die dazugehörigen Services an Ihre KassenBetreiber. Die KassenBetreiber betreiben das erworbene KassenSystem in einer oder mehreren Kassen, an einem oder mehreren Standorten. Mach diesem Prinzip ist auch der Rolloutprozess der fiskaltrust.Middleware und anderer fiskaltrust.Produkte aufgebaut. Dabei spielt das fiskaltrust.Portal eine wichtige Rolle, denn es bildet  zur Unterstützung des Rolloutprozess die drei oben genannten Partnerrollen ab.

KassenHersteller, die sich für fiskaltrust entschieden haben integrieren die fiskaltrust.Middleware in ihr KassenSystem, d.h. sie implementieren ihr KassenSystem so, dass es mit der fiskaltrust.Middleware kommunizieren kann, die als eigenständiger Service läuft. Voraussetzung hierfür ist die eigenständige Registrierung des KassenHerstellers im fiskaltrust.Portal. Dabei unterschreiben KassenHersteller digital einen Kooperationsvertrag mit fiskaltrust und können dadurch die fiskaltrust.Middleware lizenzkostenfrei nutzen. Während der Integration der fiskaltrust.Middleware setzen sich KassenHersteller auch damit auseinander, wie die fiskaltrust.Middleware später auf die Kassen der KassenBetreiber ausgerollt werden soll. Sie treffen dabei Vorbereitungen um ihre KassenHändler beim Rolloutprozess ihres KassenSystems und der fiskaltrust.Middleware unterstützen zu können.





## Inhalte
<pre>
├── <a href="./einladungsmanagement/README.md" title="Einladungsmanagement">Einladungsmanagement</a>
│   └── <a href="./einladungsmanagement/README.md#kassenhersteller-laden-kassenhändler-ein" title="KassenHändler einladen">KassenHändler einladen</a>
│   └── <a href="./einladungsmanagement/README.md#kassenhändler-laden-kassenbetreiber-ein" title="KassenBetreiber einladen">KassenBetreiber einladen</a>
│       └── <a href="./einladungsmanagement/README.md#standorte-für-kassenbetreiber-anlegen" title="Standorte für KassenBetreiber anlegen">Standorte für KassenBetreiber anlegen</a>
├── <a href="./middleware/README.md" title="Middleware">Rollout der fiskaltrust.Middleware</a>
│   └── <a href="./middleware/README.md" title="Konfiguration der Middleware">Konfiguration der Middleware</a>
│   └── <a href="./middleware/README.md" title="Service testen">Service testen</a>
│   └── <a href="./middleware/README.md" title="Rollout Szenarien">Rollout Szenarien</a>
│   └── <a href="./middleware/README.md" title="Automatisierung des Rollout">Automatisierung des Rollout</a>
│       └── <a href="./middleware/README.md" title="Templates für die Konfiguration">Templates für die Konfiguration</a>
│       └── <a href="./middleware/README.md" title="Auslieferung der Middleware">Auslieferung der Middleware</a>
├── <a href="./shop/README.md" title="Shop">fiskaltrust Produkte kaufen und weiter verkaufen</a>
│   └── <a href="./shop/README.md" title="fiskaltrust.Shop">fiskaltrust.Shop</a>
│   └── <a href="./shop/README.md" title="Rahmenverträge für Mengenrabatt">Rahmenverträge für Mengenrabatt</a>
│   └── <a href="./shop/README.md" title="Produkte über Entitlements kaufen">Produkte über Entitlements kaufen</a>
│   └── <a href="./shop/README.md" title="Übetragung gekaufter Produkte an die KassenBetreiber">Übetragung gekaufter Produkte an die KassenBetreiber</a>
│       └── <a href="./shop/README.md" title="Lieferoptionen für Hardware TSEs">Lieferoptionen für Hardware TSEs</a>
│       └── <a href="./shop/README.md" title="Swissbit Cloud TSE auschecken und einrichten">Swissbit Cloud TSE auschecken und einrichten</a>
│       └── <a href="./shop/README.md" title="Fiskaly Cloud TSE auschecken und einrichten">Fiskaly Cloud TSE auschecken und einrichten</a>
</pre>

