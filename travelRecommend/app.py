import flask
import numpy as np

# Since __name == "__main__", this points flask to the right direction
app = flask.Flask(__name__)

def model_predict(x_input):
    # Fake results for now

    return ({"0": "Alcatraz Island",
    "1": "Muir Woods National Monument",
    "2": "California Academy of Sciences",
    "3": "Colma Cremation and Funeral Services",
    "4": "St Stephen's Episcopal Church, Belvedere",
    "5": "Rodeo Beach",
    "6": "Serbian Cemetery",
    "7": "Corinthian Yacht Club",
    "8": "Spaulding Wooden Boat Center",
    "9": "San Francisco Yacht Club"})
    # return ([0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0])

@app.route('/travel_recommendations', methods = ["POST"])
def response():
    input_json = flask.request.get_json()
    try:
        content = input_json["x_input"]
        x_input = np.array(content)
        #declare weights as dummy model
        output = model_predict(x_input)
        return flask.jsonify({"ranking":output})
    except Exception as e:
        print("Input json:", input_json)
        print(e)
        return "Error in input shape!"

if __name__ == '__main__':
    app.run(host = "0.0.0.0")