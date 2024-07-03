# Another repro for 6834

## Versions

firebase-tools: v13.13.0<br>
node: v20.12.2<br>
platform: macOS Sonoma 14.5

## Steps to reproduce

1. Run `firebase emulators:start --project demo-project`
2. Goto "http://localhost:4000/storage/demo-project.appspot.com"
3. Click "Upload file"
   - Upload the image from "images/"
4. Terminal running the emulator shows:

```
i  functions: Beginning execution of "us-central1-firstGenGenerateThumbnail"
>  {"severity":"DEBUG","message":"[\n  'http://127.0.0.1:9199/demo-project.appspot.com/Screenshot%202024-06-23%20at%208.35.19%E2%80%AFAM.png?GoogleAccessId=service-account%40demo-project.iam.gserviceaccount.com&Expires=1720031434&Signature=DAmIpdrstwdcS4nBbl436yl%2FEvvorq3HojSTV1RlGHLH0QjKIMWSk0yvrJ5MZpKUZ2BPd%2FNhy1iGWNnunA%2Bva%2BXUhkhwsrkzaUhYEqdoIviilIxmEokrwGaFrgldkxcKcxJ2u0cZf8s%2FEgtxuF3S1m%2BSUTkYlVBi5dgQmOW%2BqBw8z1pjeSvO3KFMBpiyy93D48AxWhudT9XurzTSDi2G4n0a7jcFbddtmd9w5jTZir2%2BBBDSNlQLh4jssBKi3NAfAaUkUZnQjtAIB9DRCfH0ouY6563X6dWKKfKJ9kQGYU9WabNsIlWQlDHychve44XijQFgBjJddi%2FGuL3eM32Nog%3D%3D'\n]"}
i  functions: Finished "us-central1-firstGenGenerateThumbnail" in 107.308833ms
```

5. Opening the signed URL creates a new tab showing the image.
