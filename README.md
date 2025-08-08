![Worthsec Logo](/assets/WORTHSECREADMELOGO.png)

<div align="center">

# Learning Project: Worthsec Web App

</div>


Worthsec is a social media platform for events that offers accessibility for diverse groups of people, enabling them to exchange ideas, connect with others, and efficiently manage their events.


<div style="display: flex; justify-content: space-between; align-items: center; width:100%; flex-wrap: wrap; gap:1px">

 <img src="img1.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>


 <img src="img2.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink:0;"/>

<img src="img3.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;" />

<img src="img4.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>


<img src="img6.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>

<img src="img7.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>

<img src="img8.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>

<img src="img9.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>

<img src="img10.png" alt="Client-Server Architecture" style="width:150px;  flex-shrink: 0;"/>




   

</div>

</br>
</br>
</br>


 <div align="center">

 # Tech Stack:
</div>


<div align="center">

[![Tech Stack](https://skillicons.dev/icons?i=nodejs,nextjs,expressjs,postgres,prisma&theme=dark)](https://skillicons.dev)

</div>


</br>
</br>
</br>

### Project Setup and Contribution Guide - Mobile Frontend 

This guide will help you set up the Worthsec project on your local machine, connect to Git, install dependencies, and start the application. Follow the steps below:

---
</br>
</br>

#### 1. Set Up the Project

1. Visit the Worthsec GitHub repository: [Worthsec Mobile App Repository](https://github.com/Goldinnovation/wcmobile-app).
2. Clone the repository using the HTTPS URL or download the project zip file.

   **To clone using HTTPS**:
     ```bash
     git clone https://github.com/Goldinnovation/wcmobile-app.git
     ```
3. After cloning, create a new folder for the project on your local machine (if desired), and move the cloned files into this folder.

---

</br>
</br>
</br>

#### 2. Connect with Git

1. Open your terminal and navigate to the project directory.
2. Connect with Git using the clone URL or set up an SSH key for easier access.
3. Create a new branch for testing or development:

   ```bash
   git branch test
   ```
4. Create a new branch for testing or development:
   ```bash
   git checkout test
   ```


</br>


#### 3. Integrate Dependencies

1. Install the required dependencies:
   ```bash
   npm install
   ```


</br>

#### 4. Credentials 
- Contact your Supervisor for credential Information


#### 4. Connect to Ngrok:
1. Please follow the Ngrok guide on how to set up Ngrok on your local device.
2. Access Ngrok via the CLI to ensure it is set as an environment variable.
3. Add the Ngrok HTTP URL as a credential for API calls in the .env file with the variable  name EXPO_PUBLIC_API_URL.
4. Set up backend server: https://github.com/Goldinnovation/Worthsec-Web-App 
5. Ensure that the server is running on localhost with port 3000.
6. Run Ngrok with the following command:
```bash
   ngrok http 3000
   ```



#### 5. Start the Application 

1. To start the applicationn, use the following command:
   ```bash
   npx expo start  
   ```



</br>
</br>
</br>


## Client-Server Architecture:
</br>
<div style="text-align: center;">

 <img src="CSA1.png" alt="Client-Server Architecture" style="width:650px;"/>

</div>
</br>
</br>
</br>
