# Adding Web3 assets to a Unity game

## Setting Up Your Project

Let’s start by creating a new Unity project, we’re going to use the Third Person starter project!

![third-person-template](docs/setting-up-your-project/img/third-person-template.png)

### Building for Web (WebGL)

To set up the default WebGL build, we will have to fix a few errors. Click player settings to view the **Player** section of the **Build Settings**.

![build-screen](docs/setting-up-your-project/img/build-screen.png)

Next click to expand the **Other Settings** section and uncheck **Auto Graphics API**.

![player-settings](docs/setting-up-your-project/img/player-settings.png)

Scroll down to the **Script Compilation** section click the **+** button and in the box put the text `STARTER_ASSETS_PACKAGES_CHECKED`. Then click apply, and exit the dialog; now you should be ready to build for the web

![STARTER_ASSETS_PACKAGES_CHECKED](docs/setting-up-your-project/img/STARTER_ASSETS_PACKAGES_CHECKED.png)

Now return to the build settings dialog and hit `Build and Run`.

Congratulations you just built a basic third-person game! 🥳
