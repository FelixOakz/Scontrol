from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_data():
    return jsonify({"data": {'hello': 'world'}})

if __name__ == "__main__":
    app.run(debug=True)