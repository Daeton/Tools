
# Run Tool

*A tool designed to start Daeton from source.*

<br>

## Description

Starts the relatively located Daeton `App.js` with:

- All Permissions

- The Importmap

- Unstable

<br>
<br>

## Starting

*When your terminal is open in the workspace folder:*

```shell
Tools/Tools/Run/Tools.js
```

<br>

### Permission Denied

*You may have to make it executable.*

#### Graphical

<kbd>  Right Click  </kbd>  ›  <kbd>  Properties  </kbd>  ›  <kbd>  Permissions  </kbd>

Turn on `Is Executable`.

#### Command

```shell
sudo chmod ug+x Tools/Tools/Run/Tools.js
```

<br>

### Shortcut

*Consider creating a shortcut in your* <br>
*workspace to make starting easier.*

1. Create the file `<Workspace>/Tool`

2. Paste the following inside:

```shell
#!/usr/bin/env sh
Tools/Tools/Run/Tool.js
```

3. Make it executable:

```shell
sudo chmod ug+x Tool
```

<br>
