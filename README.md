# Web Development with firefox in VNC

script provides a simple way to launch Firefox in Fill Screen (kiosk) mode for your web application running on `http://localhost:3000`.

## Usage

1. **Ensure your web application is running on port 3000.**

2. **To Start Firefox:**

    ```sh
        ./scripts/firefox.sh start
    ```

    Alternatively, you can press F5 in Visual Studio Code to start Firefox directly from the debugger if you've set up the appropriate launch.json configuration.

3. **To Stop Firefox:**
    ```sh
        ./scripts/firefox.sh stop
    ```

