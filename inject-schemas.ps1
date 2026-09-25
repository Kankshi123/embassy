$pages = @{
  'weddings' = @{
    file = 'src\app\weddings\page.tsx'
    schemaVar = 'weddingSchema'
  }
  'events' = @{
    file = 'src\app\events\page.tsx'
    schemaVar = 'eventSchema'
  }
  'gastronomy' = @{
    file = 'src\app\gastronomy\page.tsx'
    schemaVar = 'gastronomySchema'
  }
  'legacy' = @{
    file = 'src\app\legacy\page.tsx'
    schemaVar = 'legacySchema'
  }
  'contact' = @{
    file = 'src\app\contact\page.tsx'
    schemaVar = 'contactSchema'
  }
}

foreach ($page in $pages.GetEnumerator()) {
  $filePath = $page.Value.file
  $schemaVar = $page.Value.schemaVar
  if (Test-Path $filePath) {
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $scriptTag = "      <script type=`"application/ld+json`" dangerouslySetInnerHTML={{ __html: JSON.stringify($schemaVar) }} />`n"
    # Insert after the opening fragment tag in the return statement
    $content = $content -replace '(return \(\r?\n\s*<>)', "`$1`n$scriptTag"
    Set-Content $filePath $content -Encoding UTF8 -NoNewline
    Write-Host "Done: $filePath"
  } else {
    Write-Host "NOT FOUND: $filePath"
  }
}
Write-Host "All schema injections complete."
