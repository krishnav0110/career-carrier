from sklearn import metrics
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import pickle
career = pd.read_csv('combined_data/data_old.csv')

X = career.drop(['Role'], axis=1).to_numpy()
y = career['Role'].to_numpy()

from imblearn.under_sampling import NearMiss
from collections import Counter
smote = NearMiss()
X, y = smote.fit_resample(X, y)
print(Counter(y))



## splitting the data into training and test sets 
from sklearn.model_selection import train_test_split 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
from sklearn.ensemble import RandomForestClassifier
from sklearn import metrics



# from sklearn.model_selection import GridSearchCV
# param_grid = {
#     'n_estimators': [200,300,400],
# }
# gs = GridSearchCV(RandomForestClassifier(), param_grid, scoring='neg_log_loss')
# gs.fit(X, y)
# print(gs.best_params_)
# print(gs.best_score_)





scores = {}
gboost = RandomForestClassifier(n_estimators=300)

gboost.fit(X_train, y_train)
y_pred = gboost.predict(X_test)
scores[5] = metrics.accuracy_score(y_test, y_pred)
print('Accuracy=',scores[5]*100)
y_pred = gboost.predict_proba(X_test)
y_pred /= np.sum(y_pred)
scores[4] = metrics.log_loss(y_test, y_pred)
print('Log Loss=', scores[4])





# # classification report
# print(metrics.confusion_matrix(y_test, y_pred))
# clf_report = metrics.classification_report(y_test, y_pred, output_dict=True)
# sns.heatmap(pd.DataFrame(clf_report).iloc[:-1, :].T, annot=True)
# plt.tight_layout()
# plt.show()

# conf_matrix = metrics.confusion_matrix(y_test, y_pred)
# print(conf_matrix)
# sns.heatmap(pd.DataFrame(conf_matrix), annot=True, fmt='g', xticklabels=career.columns, yticklabels=career.columns)
# plt.xlabel('Predicted')
# plt.ylabel('Actual')
# plt.tight_layout()
# plt.show()



pickle.dump(gboost, open('rfc_model_old.pkl','wb'))
print('test file created')