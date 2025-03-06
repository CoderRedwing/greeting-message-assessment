# Greeting App

A simple web application that takes a user's name as input and returns a personalized greeting message. 

## 🛠️ Backend Setup
1. Navigate to the `api` directory:
   ```sh
   cd api
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Test the API:
   ```sh
   curl http://localhost:4000/api/greet?name=Ajitesh
   ```


## 🎨 Frontend Setup
1. Navigate to the `ui` directory:
   ```sh
   cd ui
   ```
2. Open `index.html` in a browser to test locally.

## 📜 API Endpoint
- **GET /api/greet?name=YourName**
- **Example Response**:
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  ```
- **Error Handling**:
  ```json
  {
    "error": "Name is required."
  }
  ```

## 🎯 Features
- Simple user input with instant greeting response.
- Input field clears after response.

## 👨‍💻 Author
**Ajitesh**

