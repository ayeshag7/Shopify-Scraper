from flask import Flask, jsonify, request
from flask_cors import CORS
from scraper import scrape_region, extract_store_content

app = Flask(__name__)
CORS(app, resources={
    r"/store-info": {"origins": "http://localhost:3000"},
    r"/top-stores/*": {"origins": "http://localhost:3000"}
})


@app.route('/top-stores/<region>', methods=['GET'])
def top_stores(region):
    print(region)
    scraped_data = scrape_region(region)
    if not scraped_data:
        return jsonify({'error': 'Failed to retrieve top stores data or the data is empty'}), 500
    
    top_stores_info = scraped_data
    return jsonify({'top_stores': top_stores_info}), 200


@app.route('/store-info', methods=['GET'])
def store_info():
    store_url = request.args.get('url')
    if store_url is None:
        return jsonify({'error': 'Store URL parameter is required'}), 400
    
    store_info = extract_store_content(store_url)

    if store_info is None:
        return jsonify({'error': 'Failed to retrieve store info'}), 500
    
    return jsonify({'store_info': store_info}), 200

if __name__ == '__main__':
    app.run(debug=True)
