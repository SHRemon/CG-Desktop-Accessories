# **Project Title:**  
**A Desktop with Accessories**  

## **Project Requirements:**  
The project requires creating a 3D scene of a desktop with accessories using Three.js. The general requirements include implementing:  
- Custom shaders  
- Proper lighting techniques  
- Perspective projection  
- Textures for objects  
- Animations  
- Both mouse and keyboard interactions  

### **Specific Requirements:**  
- **3D Objects:** A monitor with texture and a CPU with texture  
- **Keyboard Interaction:** Camera movement around the desktop  
- **Mouse Interaction:** Changing the monitor screen texture when clicked  
- **Animation:** Light position rotating around the monitor  

## **Software Platform:**  
The project was developed using the following tools and technologies:  
- **Three.js** - A JavaScript 3D library that abstracts WebGL  
- **GLTF Loader** - For loading 3D models in GLTF format  
- **GLSL** - For writing custom shaders  
- **JavaScript** - For programming interactions and animations  
- **Node.js** - For the development environment and package management  
- **Visual Studio Code** - As the code editor and development environment  
- **Vite** - As the build tool and development server  
- **Google Chrome** - As the browser for testing and running the application  

## **Project Features:**  

### **1. 3D Scene Setup**  
- The project creates a 3D scene with a dark background color and sets up a perspective camera positioned to view the desktop setup.  
- The scene includes a table with legs, a desktop computer, a monitor, a room environment, decorative plants, a sofa, and a chair.  

### **2. Custom Shaders**  
A custom shader is implemented specifically for the monitor screen to create a realistic display effect. The shader includes:  
- **Vertex shader:** Maps texture coordinates from the 3D model to the screen  
- **Fragment shader:** Creates a CRT-like effect with subtle scanlines and a vignette effect around the edges  
- **Uniform variables:** Allow for dynamic time-based effects and texture changes  

### **3. Lighting Implementation**  
The scene implements a comprehensive lighting system with three types of lights:  
- **Ambient Light:** A base-level light (intensity 0.4) to ensure all objects have minimum visibility  
- **Directional Light:** A main light source positioned above the scene that casts shadows  
- **Spotlight:** A dynamic orange-tinted spotlight that rotates around the monitor to create visual interest and demonstrate animation capabilities  
- The directional and spotlight are configured to cast shadows, with appropriate shadow map sizes (1024x1024) to ensure quality shadow rendering.  

### **4. Perspective Projection**  
- The scene uses a **perspective camera** with a 75-degree field of view, creating a realistic sense of depth and scale.  
- The camera's aspect ratio is dynamically adjusted to match the window dimensions, ensuring proper display regardless of screen size.  

### **5. Texturing**  
Multiple textures are implemented:  
- Three different screen textures that cycle when the user clicks (**screen1.png, screen2.png, screen3.png**)  
- The loaded 3D models (desktop computer, room, trees, sofa, chair) include their own textures  
- Material properties like **metalness** and **roughness** are adjusted for various objects to enhance their appearance  

### **6. Animation**  
The main animation feature is the rotating **spotlight** around the monitor:  
- The spotlight orbits around the monitor's position  
- The light constantly targets the monitor, creating a dynamic lighting effect  
- The animation speed is controlled by the **delta time**, ensuring consistent movement regardless of frame rate  

### **7. Mouse Interaction**  
- Clicking anywhere on the scene **cycles through three different screen textures** on the monitor  
- The shader material's texture uniform is updated with the new texture  
- A **console log** confirms when the texture has been changed  

### **8. Keyboard Interaction**  
Extensive keyboard controls allow the user to navigate around the scene:  
- **WASD keys:** Move the camera forward, backward, left, and right  
- **Q/E keys:** Move the camera up and down  
- **Arrow keys:** Rotate the camera to look in different directions  
- **Space bar:** Reset camera orientation to look at the center of the scene  

### **9. 3D Model Loading**  
The project loads several 3D models in GLTF format:  
- **Desktop computer with monitor**  
- **Room environment**  
- **Decorative plants**  
- **Sofa**  
- **Chair**  
Each model is properly scaled, positioned, and configured to **cast and receive shadows**.  

### **10. Responsive Design**  
The scene automatically adjusts to window resizing:  
- **Camera aspect ratio** is updated  
- **Renderer size** is adjusted  
- **Projection matrix** is recalculated  

| #  | Features                                      |
|----|----------------------------------------------|
| 1  | Custom shaders                               |
| 2  | Lighting (ambient, directional, spotlight)  |
| 3  | Perspective projection                      |
| 4  | Textures for objects                        |
| 5  | Animation (rotating light)                  |
| 6  | Mouse interaction (screen texture change)   |
| 7  | Keyboard interaction (camera movement)      |
| 8  | 3D model loading                            |
| 9  | Shadow rendering                            |
| 10 | Responsive design                           |


