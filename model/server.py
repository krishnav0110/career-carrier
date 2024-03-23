from flask import Flask, request, abort, render_template
import json
import numpy as np
import pickle

app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
	if request.method == 'POST':
		data = request.get_json()

		# code to compute result from data

		data = np.array(data['data'])
		data = data.reshape(1,-1)

		loaded_model = pickle.load(open("knn_model.pkl", 'rb'))
		predictions = loaded_model.predict(data)

		pred = loaded_model.predict_proba(data)

		jobs_dict = loaded_model.classes_
		pred = pred > 0.01
		j = 0
		index = 0
		res = {}
		final_res = []
		while j < len(jobs_dict):
			if pred[0, j]:
				res[index] = j
				index += 1
			j += 1

		index = 0
		for key, values in res.items():
			if values != predictions[0]:
				final_res.append(values)
				index += 1

		careers = []
		for index in final_res:
			careers.append(jobs_dict[index])
		final_res = {'careers': careers}
		return json.dumps(final_res)

	abort(404)

if __name__ == '__main__':
	app.run(port=5000)