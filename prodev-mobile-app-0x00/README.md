# expo-router

Check out the [Expo Router documentation](https://docs.expo.dev/routing/introduction/) for more information.

# First Mobile App with Expo Router

## Steps Followed for Scaffolding

1. Navigated to project directory:
   ```bash
   cd prodev-mobile-setup
   ```

2. Initialized new Expo project using Expo Router template:
   ```bash
   npx create-expo-app@latest .
   ```

3. Modified the Home Screen:
   - Edited `app/(tabs)/index.tsx`
   - Changed default text from "Welcome to the Home screen" to "** First App Created**"

4. Started Expo development server:
   ```bash
   npx expo start
   ```

5. Tested the app on iOS/Android devices by scanning the QR code.

6. Ran the reset command:
   ```bash
   npm run reset-project
   ```
   (Note: The `reset-project` script was not found in package.json, so ran `npx expo reset-project` instead.)

## Observations from reset-project command

- The reset command cleared the Metro bundler cache and reset the project state.
- It helps resolve caching issues and ensures a clean build environment.


