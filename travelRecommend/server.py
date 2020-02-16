import flask
import numpy as np

# Since __name == "__main__", this points flask to the right direction
app = flask.Flask(__name__)

def model_predict(x_input):
    # weights = np.array([1.2,-1.5,1.0,-1.2,-2])
    # linear_function = np.dot(x_input, weights)
    # return 1/(1 + np.exp(-linear_function))
    return ([0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0])

@app.route('/travel_recommendations', methods = ["POST"])
def response():
    input_json = flask.request.get_json()
    try:
        content = input_json["x_input"]
        x_input = np.array(content)
        #declare weights as dummy model
        output = model_predict(x_input)
        return flask.jsonify({"proba":output})
    except Exception as e:
        print("Input json:", input_json)
        print(e)
        return "Error in input shape!"

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 5000)