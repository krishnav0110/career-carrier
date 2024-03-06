from sklearn import metrics
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import pickle
career = pd.read_csv('model/datasets/dataset9000.data', header=None)

X = np.array(career.iloc[:, 0:17])
print(X)
y = np.array(career.iloc[:, 17])
print("hi")
print(y)

career.columns = ["Database Fundamentals","Computer Architecture","Distributed Computing Systems",
"Cyber Security","Networking","Development","Programming Skills","Project Management",
"Computer Forensics Fundamentals","Technical Communication","AI ML","Software Engineering","Business Analysis",
"Communication skills","Data Science","Troubleshooting skills","Graphics Designing","Roles"]

career.dropna(how ='all', inplace = True)
#print("career.dropna(how ='all', inplace = True)",career.dropna(how ='all', inplace = True))
career.head()
## splitting the data into training and test sets 
from sklearn.model_selection import train_test_split 
X_train, X_test, y_train, y_test = train_test_split(X, y,test_size = 0.3, random_state = 213)
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics
scores = {}
knn = KNeighborsClassifier(n_neighbors=5)

knn.fit(X_train, y_train)
print('X_train',X_train)
print('y_train',y_train)
y_pred = knn.predict(X_test)
print('y_pred',y_pred)
scores[5] = metrics.accuracy_score(y_test, y_pred)
print('Accuracy=',scores[5]*100)



# classification report
# print(metrics.confusion_matrix(y_test, y_pred))
# clf_report = metrics.classification_report(y_test, y_pred, output_dict=True)
# sns.heatmap(pd.DataFrame(clf_report).iloc[:-1, :].T, annot=True)
# plt.tight_layout()
# plt.show()

conf_matrix = metrics.confusion_matrix(y_test, y_pred)
print(conf_matrix)
sns.heatmap(pd.DataFrame(conf_matrix), annot=True, fmt='g', xticklabels=career.columns, yticklabels=career.columns)
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.tight_layout()
plt.show()



# elbow method
error_rate = []
for i in range(1, 40):
    knn = KNeighborsClassifier(n_neighbors=i)
    knn.fit(X_train, y_train)
    pred_i = knn.predict(X_test)
    error_rate.append(np.mean(pred_i != y_test))

plt.figure(figsize=(10, 6))
plt.plot(range(1, 40), error_rate, color='blue',
         linestyle='dashed', marker='o',
         markerfacecolor='red', markersize=10)
 
plt.title('Error Rate vs. K Value')
plt.xlabel('K Value')
plt.ylabel('Error Rate')
plt.show()



pickle.dump(knn, open('model/careerlast.pkl','wb'))
print('test file created')