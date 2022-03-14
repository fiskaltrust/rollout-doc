
'---
slug: /overview/legal-data-protection/fair-use-policy-german
title: Fair-use-Policy
'---

---

:::info

(komplette deutsche Version)

:::

# Fair Use Policy

der _fiskaltrust_ gmbh<br />
Toulouser Allee 19a<br />
D-40211 Düsseldorf<br />



## Geltungsbereich

Diese Fair Use Policy bezieht sich auf den Einsatz standortbezogener Produkte der fiskaltrust gmbh.

## Begriffsdefinition

Hier werden die in dieser Fair Use Policy verwendeten Begriffe definiert und erläutert.

### Outlet

Ein Outlet repräsentiert grundsätzlich einen physischen Standort (Filiale oder Niederlassung) des KassenBetreibers. Ein physischer Standort kann jedoch auch durch mehrere, virtuelle Outlets repräsentiert sein, wenn die hier dargestellten Fair Use Regeln nicht mit Hilfe eines einzelnen Outlets eingehalten werden können. 

### Aktive Queue

Eine aktive Queue ist eine im Einsatz befindliche Queue, die durch einen Inbetriebnahmebeleg in Betrieb genommen wurde und noch nicht durch einen Außerbetriebnahmebeleg außer Betrieb genommen wurde. Sie repräsentiert ein elektronisches Aufzeichnungssystem mit Kassenfunktion. 

### Terminals

Terminals sind an einem elektronischen Aufzeichnungssystem mit Kassenfunktion angeschlossene Eingabegeräte, die keine eigenständige Kassenfunktion implementieren. Im Rahmen des _fiskaltrust_ IPOS Interface werden diese anhand des Feldes `cbTerminalID` identifiziert. 

### Standortbezogene Produkte der fiskaltrust gmbh

Standortbezogene Produkte, sind Produkte (bzw. Subscriptions) die pro Outlet erworben werden. Sie werden für die, dem Outlet untergeordneten Aufzeichnungssysteme (Queues) und technischen Sicherheitseinrichtungen (TSE / SCU), eingesetzt (z.B. Sorglos Bundles).

## Fair Use Regeln

Werden in einem Outlet standortbezogene Produkte der **fiskaltrust gmbh** eingesetzt, so dürfen in dem betroffenen Outlet maximal 25 aktive Queues mit insgesamt maximal 25 Kassen oder Terminals betrieben werden. Zudem dürfen im betroffenen Outlet maximal 150.000 TSE Signaturen pro Kalendermonat angefordert werden.

Diese Fair Use Regeln können aufgrund spezifischer Eigenschaften einzelner standortbezogener Produkte durch _fiskaltrust_ angepasst werden. Achten Sie deshalb bitte auch auf die konkreten Produktmerkmale.

### Empfehlung zur Einhaltung der Fair Use Regel

Sollte ein physischer Standort aufgrund höherer Anforderungen nicht durch ein einzelnes Outlet abgedeckt werden können, so steht Ihnen die Möglichkeit zur Verfügung für diesen physischen Standort zusätzliche, virtuelle Outlets, im fiskaltrust.Portal anzulegen. Die virtuellen Outlets müssen mit der Adresse des physischen Standorts im fiskaltrust.Portal angelegt werden damit sie diesem zugeordnet werden können. Pro angelegtem Outlet können dann separat die benötigten, standortbezogenen fiskaltrust Produkte erworben werden.

### Nichteinhaltung der Fair Use Policy

Bei Nichteinhaltung der Fair Use Policy behält sich die **fiskaltrust gmbh** das Recht vor, den Betrieb der im betroffenen Outlet verwendeten Produkte und Komponenten einzuschränken, bis sich diese wieder innerhalb des hier beschriebenen Fair-Use-Rahmen befinden.

### Schätzung der TSE Signaturanzahl

Die Anzahl der Signaturen ist abhängig von der Implementierung und Verwendung des jeweiligen Kassensystems und der TSE, man kann sie aber anhand der Anzahl der Transaktionen schätzen. Jede sign Operation auf der fiskaltrust.Middleware erzeugt Transaktionen und Signaturen, allerdings führen auch administrative Operationen der TSE selbst zu Signaturen. Bei Cloud TSEs ist durchschnittlich mit 2-3 Signaturen je Transaktion zu rechnen, bei Hardware TSEs mit 3-8.


## Download der Version für Deutschland

[PDF Download der Fair Use Policy](media/market-de-fair-use-policy.pdf)