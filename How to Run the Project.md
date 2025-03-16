# How to Run This Project in VS Code

## Step 1: Download Project Files
1. **Download** all the project files and **unzip** them.  
2. Keep all the files, including **3D models, images, and scripts**, in the **same folder** for better management.  

## Step 2: Install Node.js
1. Download and install the latest **LTS version** of Node.js from [Node.js Official Website](https://nodejs.org/).  
2. This project was tested with **Node.js v22.14.0 (LTS)**, but any recent LTS version should work.  

## Step 3: Open Project in VS Code
1. Open **VS Code** and go to **File → Open Folder**.  
2. Select the project folder where you extracted the files.
3. If you change the directory of any texture or model folders, please update the corresponding directory in the desktop_scene.js code.

## Step 4: Install Dependencies
Open the **terminal** in VS Code (**Ctrl + `** on Windows/Linux or **Cmd + `** on Mac) and run the following commands one by one:  

## Install Three.js
npm install three

## Install Vite (for development server)
npm install --save-dev vite

## Once the dependencies are installed, start the local development server with the following command:
npx vite

## After running this command, you will see a localhost link in the terminal, such as:
Local: http://localhost:5173/

## Step 5: Open the Project in Your Browser
1. Open your browser and navigate to `http://localhost:5173`.  
2. You should see your project running with the 3D models and scripts loaded correctly. 
