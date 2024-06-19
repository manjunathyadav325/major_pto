# # from flask import Flask, request, jsonify, render_template
# # import tensorflow as tf
# # import numpy as np
# # import cv2

# # app = Flask(__name__)

# # # Load the trained emotion detection model
# # model = tf.keras.models.load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\emotion_det_model_using_FER2013\\emotion_detection_model_fer2013.h5")

# # # Define the input size expected by the model
# # input_width, input_height = (48, 48)

# # # Define a function for preprocessing input images
# # def preprocess_image(image):
# #     # Resize the image to match the input size expected by the model
# #     image = cv2.resize(image, (input_width, input_height))
# #     # Normalize pixel values (optional, depends on how the model was trained)
# #     image = image / 255.0
# #     # Convert to numpy array and add batch dimension
# #     image = np.expand_dims(image, axis=-1)  # Add channel dimension
# #     image = np.expand_dims(image, axis=0)   # Add batch dimension
# #     return image

# # # Define a function for interpreting model predictions
# # def interpret_predictions(predictions):
# #     # Example: Convert numerical predictions into human-readable labels
# #     emotion_labels = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]
# #     predicted_emotion_index = np.argmax(predictions)
# #     predicted_emotion = emotion_labels[predicted_emotion_index]
# #     return predicted_emotion

# # # Define a function for determining stress detection
# # def detect_stress(emotion):
# #     positive_emotions = ["Happy", "Surprise", "Neutral"]
# #     if emotion in positive_emotions:
# #         return "NO STRESS DETECTED"
# #     else:
# #         return "STRESS DETECTED"

# # @app.route('/')
# # def index():
# #     return render_template('index.html')

# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     if 'file' not in request.files:
# #         return jsonify({'error': 'No file part'})
# #     file = request.files['file']
# #     if file.filename == '':
# #         return jsonify({'error': 'No selected file'})
# #     if file:
# #         image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
# #         input_image = preprocess_image(image)
# #         predictions = model.predict(input_image)
# #         predicted_emotion = interpret_predictions(predictions)
# #         stress_detection = detect_stress(predicted_emotion)
# #         return jsonify({'predicted_emotion': predicted_emotion, 'stress_detection': stress_detection})

# # if __name__ == '__main__':
# #     app.run(debug=True)
# from flask import Flask, request, jsonify, render_template
# import tensorflow as tf
# import numpy as np
# import cv2

# app = Flask(__name__)

# # Load the trained emotion detection model
# model = tf.keras.models.load_model("C:\\Users\\kandu\\OneDrive\\Desktop\\flask_image\\emotion_detection_model_fer2013.h5")

# # Define the input size expected by the model
# input_width, input_height = (48, 48)

# # Define a function for preprocessing input images
# def preprocess_image(image):
#     # Resize the image to match the input size expected by the model
#     image = cv2.resize(image, (input_width, input_height))
#     # Convert grayscale to RGB
#     image = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
#     # Normalize pixel values (optional, depends on how the model was trained)
#     image = image / 255.0
#     # Convert to numpy array and add batch dimension
#     image = np.expand_dims(image, axis=0)   # Add batch dimension
#     return image

# # Define a function for interpreting model predictions
# def interpret_predictions(predictions):
#     # Example: Convert numerical predictions into human-readable labels
#     emotion_labels = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]
#     predicted_emotion_index = np.argmax(predictions)
#     predicted_emotion = emotion_labels[predicted_emotion_index]
#     return predicted_emotion

# # Define a function for determining stress detection
# def detect_stress(emotion):
#     positive_emotions = ["Happy", "Surprise", "Neutral"]
#     if emotion in positive_emotions:
#         return "NO STRESS DETECTED"
#     else:
#         return "STRESS DETECTED"

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'})
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({'error': 'No selected file'})
#     if file:
#         image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
#         input_image = preprocess_image(image)
#         predictions = model.predict(input_image)
#         predicted_emotion = interpret_predictions(predictions)
#         stress_detection = detect_stress(predicted_emotion)
#         return jsonify({'predicted_emotion': predicted_emotion, 'stress_detection': stress_detection})

# if __name__ == '__main__':
#     app.run(debug=True)