app.py

```python
from flask import Flask, request, jsonify
import mysql.connector
from sentence_transformers import SentenceTransformer, util
import torch

app = Flask(__name__)

# Load pre-trained sentence transformer model
model = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')

def get_incidents():
    # Connect to the MySQL database
    conn = mysql.connector.connect(
        host="localhost",
        user="root",  # Replace with your MySQL username
        password="",  # Replace with your MySQL password
        database="audio_search"
    )
    cursor = conn.cursor()

    # Query the database for all incidents
    cursor.execute('SELECT incidentNo, description FROM incidents')
    result = cursor.fetchall()

    # Close the connection
    cursor.close()
    conn.close()

    # Split the result into separate lists of incident numbers and descriptions
    incident_nos, descriptions = zip(*result)
    return list(incident_nos), list(descriptions)

incident_nos, descriptions = get_incidents()

# Encode all descriptions in the database
encoded_descriptions = model.encode(descriptions, convert_to_tensor=True)

def find_most_similar_descriptions(input_text, top_n=3):
    # Encode the input text
    encoded_input = model.encode(input_text, convert_to_tensor=True)

    # Compute cosine similarities
    cosine_scores = util.pytorch_cos_sim(encoded_input, encoded_descriptions)[0]

    # Get top N similarity scores and their indices
    top_indices = cosine_scores.argsort(descending=True)[:top_n]

    top_incident_nos = [incident_nos[i] for i in top_indices]
    top_descriptions = [descriptions[i] for i in top_indices]
    top_scores = cosine_scores[top_indices]

    return top_incident_nos, top_descriptions, top_scores

@app.route('/similar_incidents', methods=['POST'])
def similar_incidents():
    input_description = request.data.decode('utf-8')

    if not input_description:
        return jsonify({"error": "Description is required"}), 400

    top_incident_nos, top_descriptions, top_scores = find_most_similar_descriptions(input_description)

    response = []
    for i in range(len(top_incident_nos)):
        response.append({
            "incidentNo": top_incident_nos[i],
            "description": top_descriptions[i],
            "score": top_scores[i].item()
        })

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
```

# Running the Updated API

1. Save the updated code to a file called `app.py`.
2. Run the Flask app:

```sh
python app.py
```

# Example Request

You can test the API using curl or any API client like Postman. Here's an example using curl with plain text input:

```sh
curl -X POST http://127.0.0.1:5000/similar_incidents -H "Content-Type: text/plain" --data "The main server is not responding."
```

This request will return the top 3 most similar incidents from your database based on the input description.