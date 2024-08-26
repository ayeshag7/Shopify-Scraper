import requests
from bs4 import BeautifulSoup
import pandas as pd
import time


regions_dict = {'USA': 'us', 'UK': 'gb', 'Brazil': 'br', 'Germany': 'de', 'France': 'fr'}


def scrape_page(region, page_num):
    base_url = f"https://www.aftership.com/store-list/top-100-{region}-shopify-stores"
    if page_num > 1:
        url = f"{base_url}/page/{page_num}"
    else:
        url = base_url

    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        rows = soup.select('tr.BpgnXY')
        data = []
        for row in rows:
            cells = row.select('td')
            row_data = [cell.text.strip() for cell in cells]
            data.append(row_data)
        return data
    else:
        print("Failed to retrieve page:", url)
        return []

def scrape_region(region):
    all_data = []
    for page_num in range(1, 6):
        page_data = scrape_page(region, page_num)
        all_data.extend(page_data)
        time.sleep(2)  
    if all_data:
        return all_data
    return None

# Function to extract aside content
def extract_aside_content(url):
    try:
        # Send a GET request to the URL
        response = requests.get(url)
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the HTML content
            soup = BeautifulSoup(response.content, 'html.parser')
            # Find the aside tag with class QnMU1d
            aside_tag = soup.find('aside', class_='QnMU1d')
            # Extract all text content from the aside tag
            if aside_tag:
                aside_text = aside_tag.get_text(separator='\n')  # Get text content separated by newlines
                return aside_text
            else:
                print("No aside tag found with class QnMU1d")
                return None
        else:
            print("Failed to fetch URL:", url)
            return None
    except Exception as e:
        print("An error occurred:", e)
        return None

# Function to parse the aside text and extract desired information into an array
def parse_aside_text(aside_text):
    try:
        # Split the aside text into lines
        lines = aside_text.split('\n')
        # Initialize an empty array to store values
        values = []
        # Iterate through the lines and extract desired information
        for line in lines:
            # Split each line into key-value pairs
            parts = line.split(':')
            # Extract the value and remove any leading/trailing whitespace
            value = parts[-1].strip()
            # Append the value to the array
            values.append(value)
        return values
    except Exception as e:
        print("An error occurred while parsing aside text:", e)
        return None
    
def extract_store_content(url):
    aside_content = extract_aside_content(url)
    if aside_content:
        aside_values = parse_aside_text(aside_content)
        filtered_array = list(filter(lambda x: x != "", aside_values))
        return filtered_array
    return None