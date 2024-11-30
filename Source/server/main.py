from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)


@app.route("/api/users", methods=['GET'])

def users():
    return jsonify(
        {
            "users": [
                'pesho',
                'gosho',
                'ivailo'
            ]
        }
    )

if __name__ == "__main__":
    app.run(debug="True",port=8020)