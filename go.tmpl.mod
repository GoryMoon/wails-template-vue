module changeme

go 1.23

require github.com/wailsapp/wails/v2 {{.WailsVersion}}


// replace github.com/wailsapp/wails/v2 {{.WailsVersion}} => {{.WailsDirectory}}