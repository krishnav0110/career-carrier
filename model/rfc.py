import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics

class Model:
    def __init__(self, n_estimators=50):
        self.model = RandomForestClassifier(n_estimators=n_estimators)

    def train(self, X, y, random_state=213):
        X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=random_state)
        self.model.fit(X_train, y_train)
        y_pred = self.model.predict(X_test)
        return metrics.accuracy_score(y_test, y_pred)
    
    def predict(self, X):
        return self.model.predict(X)