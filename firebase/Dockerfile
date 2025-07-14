FROM node:18-slim

# Install Java and Firebase CLI
RUN apt-get update && \
    apt-get install -y default-jre curl gnupg && \
    npm install -g firebase-tools && \
    apt-get clean

WORKDIR /app
COPY . .

CMD ["firebase", "emulators:start", "--only", "firestore", "--project", "adagia"]
