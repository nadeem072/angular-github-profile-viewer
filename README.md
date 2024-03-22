# Angular GitHub Profile Viewer

This project is a simple GitHub profile viewer built with Angular. It allows you to enter a GitHub username and view the corresponding user's profile.and their projects 

## Project Structure

The project has the following structure:
angular-github-profile-viewer/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.component.html
│   │   │   ├── home.component.ts
│   │   │   └── home.component.spec.ts
│   │   │
│   │   ├── user-profile/
│   │   │   ├── user-profile.component.html
│   │   │   ├── user-profile.component.ts
│   │   │   └── user-profile.component.spec.ts
│   │   │
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.spec.ts
│   │   └── app.module.ts
│   │
│   ├── assets/
│   │   └── ...
│   │
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   │
│   ├── index.html
│   └── ...
│
├── node_modules/
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
└── ...



## Installation

1. Clone the repository: `git clone https://github.com/nadeem072/angular-github-profile-viewer.git`using any CLI or GUI open the 
    folder in a codde editor of your choice 
2. Navigate into the directory: `cd angular-github-profile-viewer`

3. Install the dependencies:  using the terminal or CLI and execute the following commands 
         `npm install`
    If Node js is not installed use the following link to install
        `https://nodejs.org/en/download/`

   if angular is not installed in the device download angular using command  
    Install Globally
        `npm install -g @angular/cli`
    Install Locally
        `npm install @angular/cli`

4. Start the server: `ng serve`

5. Open your browser and navigate to `http://localhost:4200`

## Usage

Enter a GitHub username in the input field and click on 'View Profile'. You will be redirected to a page displaying the user's GitHub profile and the repositories of the user 

## Remarks

The application is currently in the developement phase and many things are needed to modified for a better expierience the test cases are not optimal and need development , will focus on the cons in the next commit.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



