from sklearn import metrics
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import pickle
career = pd.read_csv('combined_data/data_old.csv')

# sns.countplot(x='Role', data=career)
# plt.xticks(rotation=90)
# plt.tight_layout()
# plt.show()

X = career.drop(['Role'], axis=1).to_numpy()
y = career['Role'].to_numpy()

from imblearn.under_sampling import NearMiss
from collections import Counter
smote = NearMiss()
X, y = smote.fit_resample(X, y)
print(Counter(y))



## splitting the data into training and test sets 
from sklearn.model_selection import train_test_split 
X_train, X_test, y_train, y_test = train_test_split(X, y,test_size = 0.3, stratify=y)
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics



# elbow method
error_rate = []
max_kneighbor = 40
for i in range(1, max_kneighbor):
    knn = KNeighborsClassifier(n_neighbors=i)
    knn.fit(X_train, y_train)
    pred_i = knn.predict_proba(X_test)
    pred_i /= np.sum(pred_i)
    error_rate.append(metrics.log_loss(y_test, pred_i))

plt.figure(figsize=(10, 6))
plt.plot(range(1, max_kneighbor), error_rate, color='blue',
         linestyle='dashed', marker='o',
         markerfacecolor='red', markersize=10)

plt.title('Error Rate vs. K Value')
plt.xlabel('K Value')
plt.ylabel('Error Rate')
plt.show()

from sklearn.model_selection import GridSearchCV
param_grid = {
    'n_neighbors': [value for value in range(1, 20)]
}
gs = GridSearchCV(KNeighborsClassifier(), param_grid, scoring='neg_log_loss')
gs.fit(X, y)
print(gs.best_params_)
print(gs.best_score_)





scores = {}
knn = KNeighborsClassifier(n_neighbors=11)

knn.fit(X_train, y_train)
print('predicting')
y_pred = knn.predict(X_test)
print('score calculating')
scores[5] = metrics.accuracy_score(y_test, y_pred)
print('Accuracy=',scores[5]*100)
y_pred = knn.predict_proba(X_test)
y_pred /= np.sum(y_pred)
scores[4] = metrics.log_loss(y_test, y_pred)
print('Log Loss=',scores[4])



# classification report
# print(metrics.confusion_matrix(y_test, y_pred))
# clf_report = metrics.classification_report(y_test, y_pred, output_dict=True)
# sns.heatmap(pd.DataFrame(clf_report).iloc[:-1, :].T, annot=True)
# plt.tight_layout()
# plt.show()

# conf_matrix = metrics.confusion_matrix(y_test, y_pred)
# print(conf_matrix)
# sns.heatmap(pd.DataFrame(conf_matrix), annot=True, fmt='g', xticklabels=knn.classes_, yticklabels=knn.classes_)
# plt.xlabel('Predicted')
# plt.ylabel('Actual')
# plt.tight_layout()
# plt.show()


pickle.dump(knn, open('knn_model_old.pkl','wb'))
print('test file created')