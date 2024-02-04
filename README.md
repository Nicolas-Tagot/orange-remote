# Orange-remote

## - Description

This is an React Native application remote orange controller.

React Native V:0.73 `https://reactnative.dev/`
Mui
Mui icons

## - Technical description

Based on the gist API : https://gist.github.com/alexandrevilain/c74fd7dabe148c8a16092eba38267c63

- State:
`http://ip_livebox_tv:8080/remoteControl/cmd?operation=10`

- Actions:
`http://ip_livebox_tv:8080/remoteControl/cmd?operation=01&key=code_touche&mode=numéro_mode`


```
0 : send touch
1 : long push
2 : stop long push

116 : ON/OFF
512 : 0
513 : 1
514 : 2
515 : 3
516 : 4
517 : 5
518 : 6
519 : 7
520 : 8
521 : 9

402 : CH+
403 : CH-
115 : VOL+
114 : VOL-
113 : MUTE

103 : UP
108 : DOWN
105 : LEFT
106 : RIGHT
352 : OK
158 : BACK
139 : MENU
164 : PLAY/PAUSE
168 : FBWD
159 : FFWD
167 : REC
393 : VOD
```

## - Project architecture

// Root of project
|_assets
    // List of icons, pictures, ...
|_src
    |_utils
        // utils, hooks, ...
    |_services
        // Services to call api.
    |_components
        // Buttons, css, ...
    |_packages
        |_containers
            // Grids, box, regroups components.

Tests files under each files. Components or services, functions ... 

## - Configurations

### - Installation
To install the project use `npm i`
The list of dependances is in package.json.

### - Build 

    // TODO

## - Licence

    Designed by:
- Nicolas Tagot - https://github.com/Nicolas-Tagot

    Based on the search:
- Alexandre Vilain - https://gist.github.com/alexandrevilain



