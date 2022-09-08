# Fun-Pack

This is the official repository and issue-tracker for the modpack Fun-Pack, for Minecraft 1.18.2

### Table of Contents

-   [Testing](#testing)
-   [Setup](#setup)
    -   [CurseForge App)](#curseforge-app-windows--mac)
    -   [MultiMC](#multimc-linux--windows--mac)
-   [Automatic server update](#automatic-server-update)
-   [Links](#links)

<hr></hr>

## Testing

// message to the testers

# Setup

### For Contributors and Testers

Follow these steps to setup your workspace:

## MultiMC

#### Setup MultiMC Instance

1. Download [MultiMC](https://multimc.org/#Download) and [Git](https://git-scm.com/downloads) if you haven't already.
2. Open MultiMC.
3. Click Add Instance, choose Minecraft 1.16.5, click Ok.
4. Click Edit Instance.
5. Click Install Forge, pick the latest version.

#### Repository Setup

6. Fork and clone the repository into the MultiMC Instance.
7. Open the folder of the MultiMC Instance you made (step 1-5), and go into the .minecraft folder - Open a terminal/command line and use the following commands:

```sh
git init                                            # Initialize git in folder
git remote add origin URLToYourForkOfTheModpack     # Set remote origin to your fork of the modpack
git remote -v                                       # Verify remote
git fetch
git checkout develop
git pull
```

8. Now double click the script `InstanceSyncSetup.sh` to setup InstanceSync. It is found in the `automation` folder.

You're done!

Tip: If you run into issues, verify that you are using the right Minecraft and Forge version in your MultiMC instance!

## CurseForge App

1. Download the [CurseForge App](https://curseforge.overwolf.com/) and [Git](https://git-scm.com/downloads) if you haven't already.
2. Fork and clone the repository to the Instances folder of the CurseForge App, the default path is `C:\Users\{UserName}\Documents\Curse\Minecraft\Instances`.

    - _Note: If you've previously used the Twitch App the path will most likely be `C:\Users\{UserName}\Documents\Twitch\Minecraft\Instances`._

3. Double click the script `InstanceSyncSetup.bat` to setup InstanceSync. It is found in the `automation` folder.
4. Open the CurseForge App and you should see the modpack. If you already had CurseForge App open, restart it.

You're done!

# Automatic server update

An easier way to keep your server running on the latest modpack version.
Follow the below steps to be able to update modpack version with only a few clicks.

## Automatic updates with Git

_Note: `.bat` files are for Windows, `.sh` are for Mac / Linux._

1. Clone the repository to an empty folder.
2. Open the `automation` folder.
3. Run the script `InstanceSyncSetup`.
4. Run the script `update-server`.
5. The script `start-automated-server` is now available in the root folder - Run it to start the server.

Re-run the script `update-server` whenever you want to update to a new modpack version.

**Notes**

- 

## Links

-   [CurseForge (normal)](link)

-   [CurseForge (expert)](link)

-   [Discord](link)