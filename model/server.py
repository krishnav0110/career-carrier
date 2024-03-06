from flask import Flask, request, abort, render_template
import json
import numpy as np
import pickle
from rfc import Model

app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
	if request.method == 'POST':
		data = request.get_json()

		# code to compute result from data

		data = np.array(data['data'])
		data = data.reshape(1,-1)
		# print(data)

		loaded_model = pickle.load(open("careerlast.pkl", 'rb'))
		predictions = loaded_model.predict(data)

		# print(predictions)
		pred = loaded_model.predict_proba(data)
		# print(pred)

		pred = pred > 0.05
		i = 0
		j = 0
		index = 0
		res = {}
		final_res = []
		while j < 17:
			if pred[i, j]:
				res[index] = j
				index += 1
			j += 1

		index = 0
		for key, values in res.items():
			if values != predictions[0]:
				final_res.append(values)
				index += 1

		jobs_dict = [
			'AI ML Specialist',
            'API Integration Specialist',
            'Application Support Engineer',
            'Business Analyst',
            'Customer Service Executive',
            'Cyber Security Specialist',
            'Data Scientist',
            'Database Administrator',
            'Graphics Designer',
            'Hardware Engineer',
            'Helpdesk Engineer',
            'Information Security Specialist',
            'Networking Engineer',
            'Project Manager',
            'Software Developer',
            'Software Tester',
            'Technical Writer'
		]
		careers = []
		for index in final_res:
			careers.append(jobs_dict[index])
		final_res = {'careers': careers}
		return json.dumps(final_res)

	abort(404)

if __name__ == '__main__':
	app.run(port=5000)