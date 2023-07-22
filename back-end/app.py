from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins; use CORS(app, origins='http://your-react-native-app.com') to specify a specific origin

@app.route('/', methods=['GET'])
def get_data():
    return jsonify({"data": {'hello': 'world'}})

if __name__ == "__main__":
    app.run(debug=True)