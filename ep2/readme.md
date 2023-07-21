# 🚀 Redux Leaderboard (RLB) Curriculum - Ep2 🎉

Welcome to Episode 2 of the *Redux Leaderboard (RLB) Curriculum*! 🎉 In this exciting episode, we'll guide you through the process of Setting Up the Repo Locally with npm and TypeScript. 🚀

## Curriculum Structure - Redux Leaderboard (RLB) 📘

- **Episode 2: Setting Up the Repo Locally with npm and TypeScript**
  - *Summoning Dependencies*: 📦 Prepare yourself to learn the sacred incantation that will summon all the magical dependencies and unleash their power upon the project!
  - *The Power of TypeScript*: 🧙‍♂️ Delve into the ancient art of TypeScript, the language of the wizards! In this segment, we'll explore the realm of type safety, where bugs fear to tread, and developers wield the power of certainty.
  - *Casting the Spell*: 🚀 With all the knowledge and ingredients at hand, you will cast the spell to run the development server locally. Prepare to unveil the portal to the amazing world of the Redux Leaderboard SPA!

### Prerequisites 🧭

Before you set off on this epic journey, ensure you have the following enchanted tools:

- **npm** (Node Package Manager): To perform powerful commands and summon magical dependencies, make sure you possess the enchanted powers of npm. If you haven't acquired it yet, fear not! You can obtain it from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [here](https://nodejs.org/en/download).

## Getting Started 🎒

Follow these magical steps to embark on your exhilarating quest:

Install TypeScript by running npm install typescript in your terminal.

**Summon the Dependencies**: In your command center (terminal or command prompt), stand tall at the root directory of the repository and invoke the ancient incantation:

```bash
npm install
```

With this sacred chant, you shall summon all the necessary dependencies required for this grand adventure.

**Embrace TypeScript**: Embrace the enchanted language of TypeScript, where you will wield the power of type safety and unravel the mysteries of robust code. Embrace the magical typing system and fear not the unknown bugs, for TypeScript shall guide your way.

**Cast the Development Spell**: Now that the ingredients are gathered, it is time to cast the ultimate development spell. Behold, the command to conjure the Redux Leaderboard SPA into existence, right on your local machine:

```bash
npm start
```

As you execute this powerful incantation, you shall witness the development server conjuring the Redux Leaderboard SPA in all its glory!

## Take Note, Brave Developer! 📝

- Make sure you have the enchanted powers of npm (Node Package Manager) bestowed upon your realm, and ensure that you have Node.js installed as well. If you haven't acquired these mystical tools, fear not! You can obtain Node.js from the [official website](https://nodejs.org/).

- As you traverse the vast realm of our GitHub repository, feel free to explore the wonders of the codebase. Seek wisdom and guidance from the README.md files scattered throughout the journey.

- Remember, you are now a valued member of our adventurous community! If you stumble upon hidden treasures or encounter any mystic issues, do not hesitate to open an issue or send us a magical pull request. Together, we shall continue to improve and expand this epic curriculum!

Happy coding, brave adventurer! 🧙‍♂️💻

## Troubleshooting

problem:

rlb % npm install
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /Users/[username]/Documents/GitHub/rlb/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/Users/[username]/Documents/GitHub/rlb/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in: /Users/[username]/.npm/_logs/2023-07-21T23_43_21_481Z-debug-0.log

solution

It seems that npm is unable to find the `package.json` file in the directory you are running the `npm install` command. The `package.json` file is essential as it contains information about the project and its dependencies.

Here are a few steps you can take to troubleshoot and resolve the issue:

1. **Check Current Directory**: Ensure that you are in the correct directory (the root directory of the project) when running the `npm install` command. Double-check the path to make sure you are in the right location.

2. **Initialize npm**: If you haven't already done so, initialize npm in your project directory by running `npm init`. This command will create a `package.json` file if it doesn't exist.

3. **Verify package.json**: After running `npm init`, make sure that the `package.json` file has been created in the root of your project directory and contains the necessary information.

4. **File Permissions**: Check if you have the necessary permissions to access and modify files in the project directory. Sometimes, file permissions issues can prevent npm from finding or creating the `package.json` file.

5. **NPM Cache**: In some cases, issues with the npm cache can cause problems. You can try running `npm cache clean --force` to clear the npm cache and then try running `npm install` again.

6. **Check Logs**: The error log mentioned in the error message can provide more details about the issue. Check the contents of the log file at `/Users/[username]/.npm/_logs/2023-07-21T23_43_21_481Z-debug-0.log` to see if it provides any additional insights.

If none of the above steps resolve the issue, please share the contents of the error log mentioned above, and I'll do my best to assist further.