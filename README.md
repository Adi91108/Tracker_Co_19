# COVID Tracker Dashboard 🦠🌍

## Description 📄

This project creates an interactive dashboard that dynamically displays information about COVID-19 using the Disease CovidMap API. The dashboard allows users to consult updated COVID-19 statistics in various countries and visualize different types of data.

Access to the dashboard is created through a landing page with information about COVID-19 and its prevention.

The project is developed with React and JavaScript, offering an intuitive and easy-to-use interface.

## Features ✨

- **Dynamic Visualization**: Displays real-time statistics on COVID-19.
- **Interactivity**: Users can select different countries and data types to visualize.
- **Customizable Filters**: Allows users to consult specific data such as confirmed cases, recovered, deaths, among others.
- **Graphs and Tables**: Presents the information in graphs and tables for easy interpretation.
- **Automatic Update**: Data is automatically updated to reflect the latest information.

## Technologies Used 🛠️

- **HTML, CSS**
- **React**: Main library for building the user interface.
- **JavaScript**: Programming language used for the project's logic.
- **Disease CovidMap API**: Source of COVID-19 data ([http://disease.sh/](http://disease.sh/)) & ([https://covid-api.com/](https://covid-api.com/)).
- **Axios**: Used to make requests to the API.
- **Costume Hook Fetch API**: Made apiServices to fetch data easily.
- **Bootstrap & MUI **: CSS framework for the responsive and styled design of the dashboard.
- **DataTables (with jQuery)**: For creating the interactive table of Tracker 2.
- **React Data Table Component**: For the development of Tracker 3.
- **GitHub**: [Repository](https://github.com/Adi91108/Tracker_Co_19.git)
- **Leaflet Map**: Interactive world map.
- **Vistest**: Framework used for testing.

## Installation 💻

To run this project on your local environment, follow these steps:

1. **Clone the repository**:

   - Access the [online repository page](https://github.com/Adi91108)
   - Copy the repository URL that appears when you access the Code button
   - Clone the repository using the terminal:

   ```sh
   git clone <copied-repository-url>
   cd path/to/the/file
   ```

2. **Install dependencies**:

   - Enter VS Code
   - In the VS Code Terminal (Ctrl + ñ or Terminal > New terminal), write the following:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

4. **How to view it in the browser**:

   - Open the terminal again and write:

   ```sh
   npm run dev
   ```

   - CTRL + click on the link that appears:

     ```
     ➜  Local:   http://localhost:XXXX/
     ```

   The dashboard should be available at [http://localhost:XXXX](http://localhost:XXXX).

## Navigate through the Dashboard 🗺️

1. **Landing Page**:

   - First, the Landing page will appear. In its navigation bar, there is a button called 'Tracker' that will take you to the Dashboard.

2. **SideBar Navigation**:

   - On the left is a SideBar that allows you to navigate through the different Trackers of the Dashboard:

   - **Tracker 1**: Select Country - Use the drop-down menu to select the country you want to see the statistics for.
   - **Tracker 2**: Choose Data Type - Select the data type (confirmed cases, recovered, deaths) that you want to visualize.
   - **Tracker 3**: Graph table showing the Top 10 countries with different types of filtering.
   - **Tracker 4**: Update Data - The data will be automatically updated by reloading the page to obtain the latest information.

## Deployment 🚀

Ensure you have a clear and concise README.md file for the repository, using emojis to enhance readability and engagement.
