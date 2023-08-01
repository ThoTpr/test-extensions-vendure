# Copied from real-world-vendure

Steps to reproduce:
- yarn
- go to react-app and run yarn && yarn build
- go to card-page and run yarn && yarn build
- got to root dir and run yarn build
- go to test-app and run yarn start -> bug

If you run yarn dev with 'extensionUrl: "http://localhost:5173/admin/extensions/card-page/customer' in src/ui-extensions/modules/card-page.module.ts, app should be available on http://localhost:3000/admin/extensions/card-page/customer/1

