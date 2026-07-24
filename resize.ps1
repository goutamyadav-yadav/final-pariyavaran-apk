Add-Type -AssemblyName System.Drawing
$sourceImagePath = 'C:\Users\DELL\.gemini\antigravity\brain\47123159-ef41-4b9d-ace8-4971c8361f7a\media__1782721579563.jpg'
$targetDir = 'c:\Users\DELL\Desktop\pariyavarn\PriyaVarnParihar\android\app\src\main\res'

$sizes = @{
    'mipmap-mdpi' = 48
    'mipmap-hdpi' = 72
    'mipmap-xhdpi' = 96
    'mipmap-xxhdpi' = 144
    'mipmap-xxxhdpi' = 192
}

$img = [System.Drawing.Image]::FromFile($sourceImagePath)

foreach ($key in $sizes.Keys) {
    $size = $sizes[$key]
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.DrawImage($img, 0, 0, $size, $size)
    
    $path1 = Join-Path $targetDir $key | Join-Path -ChildPath 'ic_launcher.png'
    $path2 = Join-Path $targetDir $key | Join-Path -ChildPath 'ic_launcher_round.png'
    
    $bmp.Save($path1, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save($path2, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graph.Dispose()
    $bmp.Dispose()
    Write-Host "Saved $size x $size to $key"
}

$img.Dispose()
