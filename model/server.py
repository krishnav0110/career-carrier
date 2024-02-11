from flask import Flask, request, abort
import json
from rfc import Model

app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
	if request.method == 'POST':
		data = request.get_json()

		# code to compute result from data
		result = data['data']

		return json.dumps(result)

	abort(404)

if __name__ == '__main__':
	app.run(port=5000)