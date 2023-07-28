from flask import Flask, jsonify, request

app = Flask(__name__)

dummy_user = {
    "email": "Felix",
    "password": "123",
}


@app.route("/", methods=["GET"])
def test():
    return jsonify({"data": {"teste": "sucesso"}})


@app.route('/api/signIn', methods=['POST'])
def sign_in():
    try:
        data = request.json
        email = data['email']
        password = data['password']
        print(data)

        if email == dummy_user["email"] and password == dummy_user["password"]:
            return jsonify({
                "success": True,
                "message": "Sign-In successful!"
            })
        else:
            return jsonify({
                "success": False,
                "message": "Invalid credentials! Try again."
            })
    except Exception as e:
        print("Error during sign-in", e)
        return jsonify({
            "success": False,
            "message": "An error occurred during Sign-In"
        })


if __name__ == "__main__":
    app.run(debug=True)
