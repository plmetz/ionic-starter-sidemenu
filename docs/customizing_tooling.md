# Customizing Tooling

Each tool used in this project that needs to be customized is listed below along with:
- A brief explanation of what it is used for in this project
- Instructions on customizing it for your own use
- Instructions on removing if not needed

**Note:** Before customizing you should follow the directions in the [README](../README.md) to clone the repository and then you will need to push it up to your own git repository (github is used for these examples).

## AppVeyor

[AppVeyor](https://appveyor.com/) is a continuous integration solution used to test the build status of the app. It works with GitHub, Bitbucket, GitLab, and VSTS. There are paid tiers but it is free for open source projects.

**Customize:**

In order to use AppVeyor in your own project you will need to connect it to your own account and setup notifications:

1. Create an account at [AppVeyor](https://appveyor.com/)
2. Connect account to your repository - at this point AppVeyor will build your app each time you push a commit
3. Get your own badge by going to your project on AppVeyor then to `settings` then `badges`. Copy and paste into [README](../README.md)
4. The [AppVeyor Config](../appveyor.yml) is setup to notify you of success and failures via Slack messages therefore you should do **one** of the following:
   * Connect to your own Slack:
     * Follow directions [here](https://my.slack.com/services/new/incoming-webhook/) to configure a new incoming webhook integration and get a webhook URL
     * After getting the webhook URL encrypt it with the AppVeyor [configuration data encryption tool](https://ci.appveyor.com/tools/encrypt)
     * Copy and paste the encrypted webhook URL into the [AppVeyor Config](../appveyor.yml):
     ```
     notifications:
       - provider: Slack
         incoming_webhook:
           secure: <INSERT ENCRYPTED WEBHOOK HERE>
           channel: <UPDATE CHANNEL>
         ...
     ```
     **NOTE:** using an encrypted incoming webhook allows this file to be posted publicly without reveling or allowing access to your Slack channel. Read more about secure variables [here](https://www.appveyor.com/docs/build-configuration/#secure-variables)
   * Or remove Slack Notifications:
     * At bottom of [AppVeyor Config](../appveyor.yml) remove the Slack provider notification block
   * Or use another [notification method](https://www.appveyor.com/docs/notifications/) or configure notifications in the [AppVeyor](https://appveyor.com/) project settings

**Remove:**

To remove AppVeyor integration simply delete the `appveyor.yml` configuration file at the project root and remove the badge from [README](../README.md).


## Code Climate

[Code Climate](https://codeclimate.com/) gives a quick and basic code review of your project. It incorporates structure, style, and test coverage data to give you an overall grade for your project. There are paid tiers but it is free for open source projects.

**Customize:**

In order to use Code Climate in your own project you will need to connect it to your own account:

1) Create an account on [Code Climate](https://codeclimate.com/)
2) Connect your account to your repository
3) Get your own badge by going to your project on Code Climate then to `settings` then `badges`. Copy and paste into [README](../README.md)

**Remove:**

To remove Code Climate integration simply remove the badge from [README](../README.md).


## David

[David](https://david-dm.org/) gives you indications as to how up to date your dependencies are. It is free for public projects on Github.

**Customize:**

In order to use David you need to connect it to your own repository:

1) Changes the two David badges in [README](../README.md) to point towards your repository on GitHub

**Remove:**

To remove David integration simply remove the two badges from [README](../README.md).
