# Kaban Web App (React.js, Drag and Drop, MUI V5, Zustand)

# Firebase Emulator

- Add in `package.json`: ("fb-emulators": "firebase emulators:start --import=./fb-emulator --export-on-exit"
  )
- It allows you to run the specified Firebase emulators using a convenient alias.
- `"firebase emulators:start"`: This is the primary command for starting the Firebase emulators. It launches the local Firebase emulators environment, which includes services like Firestore, Realtime Database, Authentication, etc., in an emulation mode. Emulators are useful for testing and development, allowing you to simulate Firebase services locally.
- `--import=./fb-emulator`: This part of the command specifies that the emulator should import data from the ./fb-emulator directory. This could be a directory containing data snapshots or configurations that the emulators should use when starting up. It's a way to pre-populate your local emulated environment with some initial data.
- `--export-on-exit`: This option indicates that, upon exiting the emulators, the current state of the emulated services will be exported to the ./fb-emulator directory. This is useful if you want to persist the state of your local emulators between sessions, ensuring that you don't lose any changes made during development.
- Run emulator with `npm run fb-emulators`
- To use Firebase Emulator, download `Java Runtime Environment (JRE)` version 11 or higher.

# Dependencies

- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material
- react-router-dom
- firebase
- firebase-tools (global)
- zustand
