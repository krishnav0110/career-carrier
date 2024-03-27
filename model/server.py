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

		loaded_model = pickle.load(open("rfc_model.pkl", 'rb'))
		predictions = loaded_model.predict(data)

		pred = loaded_model.predict_proba(data)
		print(pred)

		jobs_dict = loaded_model.classes_

		final_res = []
		for index in range(len(jobs_dict)):
			if pred[0, index] > 0.1:
				final_res.append(index)
		
		print(final_res)

		careers = []
		rating_sum = 0
		for index in final_res:
			careers.append({'name': jobs_dict[index], 'rate': pred[0, index]})
			rating_sum += pred[0, index]
		
		for career in careers:
			career['rate'] /= rating_sum
		
		final_res = {'careers': careers}
		return json.dumps(final_res)

	abort(404)

if __name__ == '__main__':
	app.run(port=5000)