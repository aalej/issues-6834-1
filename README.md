# Another repro for 6834

## Versions

firebase-tools: v13.12.0<br>
node: v20.12.2<br>
platform: macOS Sonoma 14.5

## Steps to reproduce

1. Run `firebase emulators:start --project demo-project`
1. Goto "http://localhost:4000/storage/demo-project.appspot.com"
1. Click "Upload file"
   - Upload the image from "images/"
1. Terminal running the emulator shows:

```
i  functions: Beginning execution of "us-central1-firstGenGenerateThumbnail"
>  {"severity":"DEBUG","message":"[\n  'http://127.0.0.1:9199/demo-project.appspot.com/Screenshot%202024-07-03%20at%209.58.51%E2%80%AFPM.png?GoogleAccessId=service-account%40demo-project.iam.gserviceaccount.com&Expires=1720019154&Signature=ikzzB8uLmItaYl3IPS9WrBtNfJJ%2FcXQDD6oE9o7jSMwsPsnDJKfZWRgmuK8fl%2Fzgk20kZVE%2BGoQE2kupB97DKIb0ouNU7EhEWZXNPZznzCMq2zkEn%2FLf%2FBrJbOizgA8S4HMEWkGEqH46G3lVS2a7hxQRKFQMhLBWnecGvdAACHMUxTyIKVtaqogDJYyT3%2FeWyJGPts5WoTQ8Yhm7%2BF7ZVeAMcBcL8ahqC2YyexpWRL%2F6vf75VIH3ojJsCmXHVmERkPwY2gsiDDT%2BQoy%2BQ6s9w%2F659nU720bydRJXGaAcfgb4uwFnjGKeqcWL4TcWmoHIGmMM0TN5L4HAkvoz4vKfdA%3D%3D'\n]"}
i  functions: Finished "us-central1-firstGenGenerateThumbnail" in 89.921084ms
```
