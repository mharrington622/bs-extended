# bs-extended
This package was created to allow the browser-sync config file to be used along with the command line to mix and match config options.

## Usage

### VS Code example
```json
{
	"command": "${workspaceRoot}\\node_modules\\.bin\\bs-extended.cmd",  
	"args": ["--startPath=${fileBasename}","--config=bs-config.js"]
}
```

### Node command line example
```
$ bs-extended --startPath="C:\Some Path\index.html" --config=bs-config.js
```

## FAQ
_Why is this useful?_
>Mostly due to VS Code's task runner implementation, I wanted several options to run with browser-sync but you could only have either command line options or a config file, but not both.  The config file did not allow dynamic startPages.  Due to how VS Code implements its task runner, I wanted to specify the startPath in the CLI and have other options in the config file.

_Why is this useful for me?_
>That is up to you to decide ;)