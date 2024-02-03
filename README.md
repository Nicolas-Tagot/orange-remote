# Orange-remote

## - Description

This is an React Native application remote orange controller.


## - Technical description

- State:
http://ip_livebox_tv:8080/remoteControl/cmd?operation=10

- Actions:
```
http://ip_livebox_tv:8080/remoteControl/cmd?operation=01&key=code_touche&mode=numéro_mode

```

Based on the API : https://gist.github.com/alexandrevilain/c74fd7dabe148c8a16092eba38267c63

List of control is available in file:
    `./resources/control-list.md`


## - Project architecture

|_src
    |_utils
        // utils, hooks, ...
    |_services
        // Services to call api.
    |_components
        // Buttons, css, ...
    |_modules
        |_containers
            // Grids, box, regroups components.

Tests files under each files. Components or services, functions ... 
            