# Shopify Scraper

This repository contains the code for a Shopify scraper that I built using Beautiful Soup and Selenium for the backend, and React with Tailwind CSS for the frontend. The scraper allows users to search for specific Shopify stores by name and also displays the top 100 Shopify stores in various countries like the USA, UK, France, Germany, Brazil, etc.

## Features

- **Search for Specific Shopify Stores**: Users can search for a specific Shopify store by its name.
- **Top 100 Shopify Stores**: Displays the top 100 Shopify stores in selected countries.
- **Detailed Store Information**:
  - **Store Name**
  - **Category**
  - **Estimated Monthly and Annual Revenue**
  - **Contact Information**
  - **Website** (if available)
  - **Average Time Spent Per Page**

## Tech Stack

### Backend
- **Beautiful Soup**: Used for web scraping and parsing HTML.
- **Selenium**: Automates browser interactions to scrape dynamic content.

### Frontend
- **React**: Handles the user interface, allowing for a dynamic and responsive experience.
- **Tailwind CSS**: Provides utility-first CSS for styling the application.

## Installation

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shopify-scraper.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd shopify-scraper/backend
    ```
3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the scraper:
    ```bash
    python scraper.py
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd shopify-scraper/frontend
    ```
2. Install the required npm packages:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage

- **Search**: Enter the name of the Shopify store in the search bar and click "Search."
- **Explore Top Stores**: Browse through the top 100 Shopify stores in your chosen country by selecting a country from the dropdown menu.
