### Technische Besonderheiten der Swissbit Cloud

Die Swissbit Cloud TSE hat ein paar technische Besonderheiten gegenüber anderen fiskaltrust.Middleware Konfigurationen, die man beim Rollout unbedingt beachten sollte. 
1.	Die Swissbit Cloud TSE installiert eine eigene Java Umgebung auf dem Computer.  
2.	Die Swissbit Cloud TSE wird mit dem Computer, auf dem sie läuft, fix verbunden (gepaired).
3.	Einschränkungen des Produktes bei Verwendung mit dem fiskaltrust.Sorglos Paket
4.	Zusätzliche Firewall Erfordernisse für die notwendige Internetverbindung

##### 1. Die Swissbit Cloud TSE installiert eine eigene Java Umgebung auf dem Computer.
Die Swissbit Cloud TSE installiert eine eigene Java Umgebung auf dem Computer
Bei der Installation der Swissbit Cloud TSE wird im AppData Verzeichnis des aktuellen Benutzers eine eigene Java Umgebung (genannt FCC) eingerichtet. Bei fiskaltrust wird diese Installation beim ersten Start der Cashbox auf einem Computer durchgeführt. Dies führt zu zwei Einschränkungen. Erstens muss die Installation unter dem Benutzer ausgeführt werden, unter dem sie auch später ausgeführt wird. Es ist nicht möglich wie bei anderen fiskaltrust Installationen den Benutzer zu wechseln. Zweitens kann die fiskaltrust.Middleware nicht mit dem lokalen Systemkonto ausgeführt werden. Daher muss der Anmeldeaccount des Windows Dienstes nach ausführen von install-service.cmd manuell geändert werden, BEVOR die fiskaltrust.Middleware das erste Mal gestartet wird.
![ServiceAccount1](../Shop/images/ServiceAccount1.png)
![ServiceAccount2](../Shop/images/ServiceAccount2.png)
 
Der verwendete Account muss ein lokales, oder ein Domänenkonto mit lokalen Administratorrechten sein und er muss Zugriff auf das Internet haben. Das lokale Systemkonto und der Netzwerkdienst können nicht verwendet werden. Ein einmal verwendetes Konto kann später nicht mehr gewechselt werden.

##### 2. Die Swissbit Cloud TSE wird mit dem Computer, auf dem sie läuft, fix verbunden (gepaired).
Die Swissbit Cloud TSE wird bei der Initialisierung, fix mit dem Computer auf dem diese durchgeführt wird verbunden. nach der ersten Kommunikation mit den Swissbit Cloud Servern kann diese nur mehr auf genau diesem Computer ausgeführt werden. Bei der fiskaltrust.Middleware passiert dies, wenn die Cashbox, die mit der Swissbit Cloud TSE konfiguriert wurde das erste Mal ausgeführt wurde. 
Daher kann die fiskaltrust.Middleware in diesem Fall auch nicht auf anderen Geräten testhalber ausgeführt werden. Die Installation ist eine einmalige Sache. Wenn etwas falsch gemacht wird, muss die Swissbit Cloud TSE erneut erworben werden.

##### 3. Einschränkungen des Produktes bei Verwendung mit dem fiskaltrust.Sorglos Paket
Bei Verwendung der Swissbit Cloud TSE as a Service mit dem fiskaltrust.Sorglos Paket ist die Verwendung auf eine Cashbox pro Standort eingeschränkt. Details entnehmen sie bitte der Produktbeschreibung LINK.

##### 4. Zusätzliche Firewall Erfordernisse für die notwendige Internetverbindung
Beachten sie bitte unsere [FAQ’s zu Firewall Einstellungen](https://docs.fiskaltrust.cloud/doc/productdescription-de-doc/for-posdealers/04-after-sales/troubleshooting-firewall.html)
