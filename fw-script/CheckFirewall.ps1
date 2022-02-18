# Run this script like: .\CheckFirewall.ps1 FirewallTests.csv

param ($urlsFileName)

function GetResultObject
{
	param (
		[string]$Server,
		[string]$Notes,
		[string]$Purpose
	)

	$props = @{
		From = $env:COMPUTERNAME
		Url = $Server
		Notes = $Notes
		Purpose = $Purpose
	}

	New-Object PsObject -Property $props
}

function TestConnection
{
	param 
	(
		[string]$Server,
		[string]$ExpectedCode
	)

	try
	{
		$WebResponse = Invoke-WebRequest -UseBasicParsing $Server
	}
	catch
	{
		$WebResponse = $_.Exception.Response
	}
	return $WebResponse.StatusCode -eq $ExpectedCode
}

function FirewallEntry
{
	param (
		[string]$Server,
		[string]$Purpose,
		[string]$ExpectedCode
	)

	$props= @{
		RemoteUrl = $Server
		Purpose = $Purpose
		ExpectedCode = $ExpectedCode
	}

	return New-Object PsObject -Property $props
}

function RunUrlCheck
{
	param (
		[String]$file #This is meant to be a CSV with "Url", and "Purpose" fields. Purpose describes why the url is needed, so that we can reason about things more easily.
	)

	If (!$file) {
		Write-Host "Usage: .\CheckFirewall.ps1 filename.csv"
		return
	}

	$testsToRun = Import-Csv -Path $file

	$urls = @()

	foreach($test in $testsToRun)
	{
		$convertedItem = FirewallEntry -Server $test.Url -Purpose $test.Purpose -ExpectedCode $test.Code
		$urls = $urls + $convertedItem
	}

	$results = @()
	foreach ($item in $urls)
	{
		If(TestConnection -Server $item.RemoteUrl -ExpectedCode $item.ExpectedCode)
		{
			$resultObj = GetResultObject -Server $item.RemoteUrl -Notes 'okay' -Purpose $item.Purpose
		}
		Else
		{
			$resultObj = GetResultObject -Server $item.RemoteUrl -Notes 'Server did not respond' -Purpose $item.Purpose
		}

		$results = $results + $resultObj
	}

	$failedItems = $results | ? { $_.Notes -ne "okay" } | measure
	If ($failedItems.Count -gt 0)
	{
		Write-Host "FAILED!"
		Write-Host "Number of failures: " + $failedItems.Count
	}
	Else
	{
		Write-Host "We're all good!"
	}

	foreach($result in $results)
	{
		If($result.Notes -eq "okay")
		{
			$status = "SUCCESS"
		}
		Else
		{
			$status = "FAILURE"
		}

		$statusMessage = "Status: ($status) -- Purpose: " + $result.Purpose
		Write-Host $statusMessage
	}

	Write-Host "Full Results below: "
	$results | Format-Table -AutoSize
}

function GetDotNetVersions()
{
	return Get-ChildItem "HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP" -recurse |
		Get-ItemProperty -name Version,Release -EA 0 |
		Where { $_.PSChildName -match "^(?!S)\p{L}"} |
		Select @{Name="Name"; Expression="PSChildName"}, Version, Release
}


# Entry point

Write-Host "CheckFirewall 2.0"
Write-Host

# Collecting system relevant information
$info = Get-ComputerInfo
$mwprocs = Get-Process |  where {$_.ProcessName -like "fiskaltrust*"}
$connectivity = Test-Connection 8.8.8.8 -Quiet

Write-Host "Machine name:" $info.CsName
Write-Host "OS version:" $info.OsVersion
Write-Host "Windows name:" $info.WindowsProductName
Write-Host "Overall connectivity:" $connectivity
Write-Host "Active Middleware instances:" $mwprocs.Length

GetDotNetVersions | Format-Table

RunUrlCheck -file $urlsFileName