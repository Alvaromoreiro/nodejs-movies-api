# Node.js API Project

This project is an API developed with Node.js that utilizes various folders to organize its structure. Below is a description of each folder and the dependencies used in the project.

## Folder Structure

- **controllers:** Contains controllers that handle the logical functions of the application.
- **middlewares:** Stores custom middleware used in the routes.
- **utils:** Contains utilities and helper functions used throughout the project.
- **models:** Contains the data models of the application.
- **schemas:** Saves the validation schemas used, especially if Zod is used for data validation.
- **routes:** Contains the definitions of API routes.

## Dependencies

- **standard:** A set of rules to ensure consistency in code style.
- **cors:** Middleware to enable CORS (Cross-Origin Resource Sharing).
- **dotenv:** Loads environment variables from a `.env` file for use in the project.
- **express:** Web framework for Node.js that simplifies the creation of web applications and APIs.
- **mongodb:** Official MongoDB driver for Node.js.
- **morgan:** Middleware for logging HTTP requests.
- **zod:** Library for data schema validation in TypeScript.

To set up the project, you'll first need to install Node.js and npm on your system. Here are general instructions for installing them on common operating systems:

### Installing Node.js and npm on Windows:

1. **Download Node.js:**

   - Go to the official Node.js website (https://nodejs.org/).
   - Download the LTS (Long Term Support) version recommended for most users.

2. **Install Node.js:**

   - Run the downloaded installer and follow the installation wizard instructions.

3. **Verify the Installation:**
   - Open the command prompt (cmd) or PowerShell.
   - To verify that Node.js and npm have been installed successfully, run the following commands:
     ```bash
     node -v
     npm -v
     ```

### Installing Node.js and npm on macOS:

1. **Installation with Homebrew (recommended):**

   - Open the Terminal.
   - Install Homebrew if you don't have it:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Install Node.js and npm with Homebrew:
     ```bash
     brew install node
     ```

2. **Verify the Installation:**
   - In the Terminal, run the following commands:
     ```bash
     node -v
     npm -v
     ```

### Installing Node.js and npm on Linux (Ubuntu):

1. **Installation with apt:**

   - Open the Terminal.
   - Update the package index:
     ```bash
     sudo apt update
     ```
   - Install Node.js and npm:
     ```bash
     sudo apt install nodejs npm
     ```

2. **Verify the Installation:**
   - In the Terminal, run the following commands:
     ```bash
     node -v
     npm -v
     ```

### Running the Project:

1. **Clone the Project:**

   - Open the Terminal.
   - Navigate to the directory where you want to clone the project.
   - Run the following command to clone the repository:
     ```bash
     git clone REPOSITORY_URL
     ```

2. **Enter the Project Directory:**

   - Navigate to the project directory:
     ```bash
     cd project_name
     ```

3. **Install Dependencies:**

   - Run the following command to install the project dependencies:
     ```bash
     npm install
     ```

4. **Create the `.env` File:**

   - Create a `.env` file in the project's root and set the MongoDB key:
     ```plaintext
     MONGODB_PASSWORD="KEY"
     ```

5. **Run the Server:**

   - Start the server with the following command:
     ```bash
     npm start
     ```

6. **Access the API:**
   - Open your browser and go to the API URL (by default, http://localhost:3000).

Now you should have the project up and ready to test. You can use the "Rest Client" extension in Visual Studio Code or any other tool of your choice to make requests to the API. Good luck with your project!
