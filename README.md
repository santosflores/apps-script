1. Make sure [clasp](https://developers.google.com/apps-script/guides/typescript#:~:text=used%20clasp%20previously.-,Using%20TypeScript%20in%20a%20Clasp%20Project,extension%20from%20gs%20to%20ts%20) is available
2. Clone the repository
3. Create a new Apps Script project (clasp create)
4. Compile the TS code and push it into the cloud (clasp push)
5. Open the Apps Script IDE to play with the code

```
santosflores@santosflores-dev:~/Development/github$ gh repo clone santosflores/apps-script
Cloning into 'apps-script'...
remote: Enumerating objects: 14, done.
remote: Counting objects: 100% (14/14), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 14 (delta 3), reused 13 (delta 2), pack-reused 0
Receiving objects: 100% (14/14), done.
Resolving deltas: 100% (3/3), done.
santosflores@santosflores-dev:~/Development/github$ ls
apps-script
santosflores@santosflores-dev:~/Development/github$ cd apps-script/
santosflores@santosflores-dev:~/Development/github/apps-script$ clasp create
? Create which script? standalone
Created new standalone script: https://script.google.com/d/1XAuzF7dxhE3yC5HzdKpdmPDaSbfEPRRjuwWngbutbZwD_FDM51ixBhC0/edit
santosflores@santosflores-dev:~/Development/github/apps-script$ clasp open
Opening script: https://script.google.com/d/1XAuzF7dxhE3yC5HzdKpdmPDaSbfEPRRjuwWngbutbZwD_FDM51ixBhC0/edit
santosflores@santosflores-dev:~/Development/github/apps-script$ clasp push
? Manifest file has been updated. Do you want to push and overwrite? Yes
└─ /usr/local/google/home/santosflores/Development/github/apps-script/appsscript.json
└─ /usr/local/google/home/santosflores/Development/github/apps-script/hello_world.ts
└─ /usr/local/google/home/santosflores/Development/github/apps-script/main.ts
└─ /usr/local/google/home/santosflores/Development/github/apps-script/yt_policies.ts
Pushed 4 files.
santosflores@santosflores-dev:~/Development/github/apps-script$ clasp open
Opening script: https://script.google.com/d/1XAuzF7dxhE3yC5HzdKpdmPDaSbfEPRRjuwWngbutbZwD_FDM51ixBhC0/edit

```
